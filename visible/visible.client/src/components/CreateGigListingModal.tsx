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
import CreateGigListingForm from "./CreateGigListingForm";
import { useState } from "react";

const CreateGigListingModal = ({ isParentOpen, isParentMenuHidden }) => {
  //Dialog (modal) open state
  const [isOpen, setIsOpen] = useState(false);

  //onSubmit -> passed to the GigListing Component to be appended onto the end of the form's submit function
  const onSubmit = () => {
    setIsOpen(false);
    isParentMenuHidden(false);
    isParentOpen(false);
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(bool) => {
        setIsOpen(bool);
        isParentMenuHidden(bool);
        isParentOpen(bool);
      }}
    >
      <DialogTrigger asChild>
        <Button
          variant="outline"
          onClick={(e) => {
            e.preventDefault();
            isParentMenuHidden(true);
            //open the modal
            setIsOpen(true);
          }}
        >
          Post A Gig
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-black">
        <DialogTitle hidden={true}>Create Gig Listing Form</DialogTitle>
        <DialogDescription hidden={true}>
          Create a gig listing.
        </DialogDescription>
        <CreateGigListingForm parentOnSubmit={onSubmit} />
      </DialogContent>
    </Dialog>
  );
};

export default CreateGigListingModal;
