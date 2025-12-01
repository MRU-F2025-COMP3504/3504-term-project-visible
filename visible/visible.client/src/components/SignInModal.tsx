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
import SignIn from "./SignIn";
import { useState } from "react";

const SignInModal = () => {
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
          className="bg-blue-500"
          //background-color: #007bff;
          variant="mainPage"
          onClick={(e) => {
            e.preventDefault();
            //open the modal
            setIsOpen(true);
          }}
        >
          Sign In
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-violet-500 text-black">
        <DialogTitle hidden={true}>Sign In Form</DialogTitle>
        <DialogDescription hidden={true}>
          Sign in using a form containing Username, and Password fields.
        </DialogDescription>
        <SignIn parentOnSubmit={onSubmit} />
      </DialogContent>
    </Dialog>
  );
};

export default SignInModal;
