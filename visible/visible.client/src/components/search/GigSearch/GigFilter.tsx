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
import { useState } from "react";

//GigFilter component implements the form to filter the gig list
const GigFilter = () => {
  //Dialog (modal) open state
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        {/* overriding some annoying inheritted css size attribute somewhere */}
        <Search
          className="w-8! h-8! min-w-8! min-h-8!"
          strokeWidth={2}
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(true);
          }}
        />
      </DialogTrigger>
      <DialogContent className="max-w-[600px]">
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
            console.log(`form submitted`);
            setIsOpen(false);
          }}
        >
          <Input
            id="keyword"
            type="text"
            placeholder="Search by keyword"
            className="mt-4"
          />
          <DialogFooter>
            <Button variant="secondary" type="submit" className="mt-4!">
              Submit
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default GigFilter;
