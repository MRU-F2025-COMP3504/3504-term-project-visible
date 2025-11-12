import { Button } from "@/components/ui/button";
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
import CreateGigApplicationForm from "./CreateGigApplicationForm";

const CreateGigApplicationModal = () => {
  //Dialog (modal) open state
  const [isOpen, setIsOpen] = useState(false);

  //onSubmit -> passed to the GigApplication Component to be appended onto the end of the form's submit function
  const onSubmit = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          onClick={(e) => {
            e.preventDefault();
            //open the modal
            setIsOpen(true);
          }}
        >
          Apply to this Gig
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-black">
        <DialogTitle hidden={true}>Create Gig Listing Form</DialogTitle>
        <DialogDescription hidden={true}>
          Create a gig listing.
        </DialogDescription>
        <CreateGigApplicationForm parentOnSubmit={onSubmit} />
      </DialogContent>
    </Dialog>
  );
};

export default CreateGigApplicationModal;
