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
import SignUp from "./SignUp";
import { useState } from "react";

const SignUpModal = () => {
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
          Sign Up
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle hidden={true}>Sign Up Form</DialogTitle>
        <DialogDescription hidden={true}>
          Sign up using a form containing Username, Password, Confirm Password,
          and optional First Name, and Last Name fields.
        </DialogDescription>
        <SignUp parentOnSubmit={onSubmit} />
      </DialogContent>
    </Dialog>
  );
};

export default SignUpModal;
