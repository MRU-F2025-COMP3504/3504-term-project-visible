import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import BusinessProfile from "./BusinessProfile";
import { useState } from "react";

const CreateBusinessProfileModal = () => {
  //Dialog (modal) open state
  const [isOpen, setIsOpen] = useState(false);

  //onSubmit -> passed to the BusinessProfile Component to be appended into the end of the on submit function
  const onSubmit = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          className="bg-pink-600! hover:bg-pink-500!"
          variant="outline"
          onClick={(e) => {
            e.preventDefault();
            //open the modal
            setIsOpen(true);
          }}
        >
          Create Business
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-violet-400 text-black">
        <DialogTitle hidden={true}>Create Business Profile</DialogTitle>
        <DialogDescription hidden={true}>
          Create a Business Profile
        </DialogDescription>
        <BusinessProfile parentOnSubmit={onSubmit} />
      </DialogContent>
    </Dialog>
  );
};

export default CreateBusinessProfileModal;
