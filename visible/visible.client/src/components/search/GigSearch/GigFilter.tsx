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

//GigFilter component implements the form to filter the gig list
const GigFilter = () => {
  return (
    <Dialog>
      <form>
        <DialogTrigger>
          {/* overriding some annoying inheritted size attribute somewhere */}
          <Search
            className="!w-[32px] !h-[32px] !min-w-[32px] !min-h-[32px]"
            strokeWidth={2}
          />
        </DialogTrigger>
        <DialogContent className="max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Search Gigs</DialogTitle>
          </DialogHeader>
          <Label htmlFor="keyword"></Label>
          <Input id="keyword" name="keyword" placeholder="Search by keyword" />
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default GigFilter;
