import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Dispatch, SetStateAction, useState } from "react";

//define that GigFilter is looking for a setter function
type gigFilterProps = {
  setSearchKeyword: Dispatch<SetStateAction<string>>;
};

//GigFilter component implements the form to filter the gig list
const GigFilter = ({ setSearchKeyword }: gigFilterProps) => {
  //Dialog (modal) open state
  const [isOpen, setIsOpen] = useState(false);
  //Search keyword input use state
  const [keywordForm, setKeywordForm] = useState("");

  //Submit handler function
  const searchFormSubmit = () => {
    //Confirm a parameter was received
    if (!(keywordForm == "")) {
      //set the search parameter
      setSearchKeyword(keywordForm);
    } else {
      //bandaid until clear button made
      setSearchKeyword("");
    }
    setIsOpen(false);
  };

  return (
    <div className="flex justify-end">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger>
          {/* class name is overriding some annoying inheritted css size attribute somewhere */}
          <Search
            className="w-8! h-8! min-w-8! min-h-8!"
            strokeWidth={2}
            onClick={(e) => {
              e.preventDefault();
              //open the modal
              setIsOpen(true);
            }}
          />
        </DialogTrigger>
        <DialogContent className="max-w-[600px] bg-black!">
          <DialogHeader>
            <DialogTitle>Search Gigs</DialogTitle>
          </DialogHeader>
          {/* Description hidden - used by screen readers */}
          <DialogDescription hidden={true}>
            Provide keyword to filter gig listings by attributes.
          </DialogDescription>
          <form
            // Submit Function
            onSubmit={(e) => {
              e.preventDefault();
              searchFormSubmit();
            }}
          >
            <Input
              id="keyword"
              type="text"
              placeholder="Search by keyword or minimum budget"
              className="mt-4"
              value={keywordForm}
              onChange={(e) => {
                e.preventDefault();
                setKeywordForm(e.target.value);
              }}
            />
            <DialogFooter>
              <Button variant="secondary" type="submit" className="mt-4!">
                Submit
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GigFilter;
