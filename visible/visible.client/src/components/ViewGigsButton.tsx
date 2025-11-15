import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { submitSignUp } from "@/modules/data";

const ViewGigsButton = () => {
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
          Gigs
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-black">
        <DialogTitle hidden={true}>viewGigs</DialogTitle>
        <DialogDescription hidden={true}>
          Takes the user to the view gigs screen
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default ViewGigsButton;
