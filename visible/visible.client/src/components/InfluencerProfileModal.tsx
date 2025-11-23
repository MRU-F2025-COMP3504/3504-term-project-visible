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
import InfluencerProfile from "./InfluencerProfile";
import { useState } from "react";

const CreateInfluencerProfileModal = () => {
  //Dialog (modal) open state
  const [isOpen, setIsOpen] = useState(false);

  //onSubmit -> passed to the InfluencerProfile Component to be appended into the end of the on submit function
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
          Create Influencer
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-violet-500 text-black">
        <DialogTitle hidden={true}>Create Influencer Profile</DialogTitle>
        <DialogDescription hidden={true}>
          Create an Influencer Profile
        </DialogDescription>
        <InfluencerProfile parentOnSubmit={onSubmit} />
      </DialogContent>
    </Dialog>
  );
};

export default CreateInfluencerProfileModal;
