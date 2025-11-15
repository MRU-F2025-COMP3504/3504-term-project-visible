import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Icon } from "lucide-react";
import { User } from "lucide-react";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const ProfileButton = () => {
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
          Profile
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-black">
        <DialogTitle hidden={true}>Profile</DialogTitle>
        <DialogDescription hidden={true}>
          Takes the user to their profile using this button
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileButton;
