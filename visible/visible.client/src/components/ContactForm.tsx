import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { useState } from "react";

const ContactForm = ({ parentOnSubmit, recipientName }) => {
  //form use states
  const [recipient, setRecipient] = useState(recipientName);

  //form submit handler - submits the data as a Gig Listing application
  const handleSubmit = () => {
    parentOnSubmit();
  };

  return (
    <form
      // Submit function
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <FieldGroup>
        {/* Application Text Input */}
        <Field>
          <FieldLabel htmlFor="Confirmation">
            Success! Your message has been sent to {recipient}!
          </FieldLabel>
        </Field>

        {/* Submit Button */}
        <Field orientation="horizontal">
          <Button type="submit">OK</Button>
        </Field>
      </FieldGroup>
    </form>
  );
};

export default ContactForm;
