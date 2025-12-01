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
import ContactForm from "./ContactForm";

const ContactFormModal = ({ label, recipient }) => {
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
          className="text-black! bg-white-500! flex w-auto text-wrap"
          variant="outline"
          onClick={(e) => {
            e.preventDefault();
            //open the modal
            setIsOpen(true);
          }}
        >
          {label}
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-purple-400! text-black!">
        <DialogTitle hidden={true}>
          Create an Influencer or Business
        </DialogTitle>
        <DialogDescription hidden={true}>
          Contact an influencer or business
        </DialogDescription>
        <ContactForm parentOnSubmit={onSubmit} recipientName={recipient} />
      </DialogContent>
    </Dialog>
  );
};

export default ContactFormModal;
