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
import GigListing from "./GigListing";
import { useState } from "react";

const CreateGigListingModal = () => {
  //Dialog (modal) open state
  const [isOpen, setIsOpen] = useState(false);

  //onSubmit -> passed to the SignIn Component to be appended into the end of the on submit function
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
          Gig Listings
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-black">
        <DialogTitle hidden={true}>Sign Up Form</DialogTitle>
        <DialogDescription hidden={true}>
          Sign up using a form containing Username, Password, Confirm Password,
          and optional First Name, and Last Name fields.
        </DialogDescription>
        <GigListing parentOnSubmit={onSubmit} />
      </DialogContent>
    </Dialog>
  );
};

export default CreateGigListingModal;
