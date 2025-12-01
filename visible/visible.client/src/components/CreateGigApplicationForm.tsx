import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { submitGigApplication } from "@/modules/data";

//This component impletements the basic Gig Application form html
//Documentation for the 'Field' components can be found here: https://ui.shadcn.com/docs/components/field
//The form uses a function from the data module to submit the Gig Application information using a POST request to api/application/create

const CreateGigApplicationForm = ({ parentOnSubmit, propGigId }) => {
  //form use states
  const [gigId, setGigId] = useState(propGigId);
  const [applicantId, setApplicantId] = useState("");
  const [applicationText, setApplicationText] = useState("");
  const [status, setApplicationStatus] = useState("");

  const ApplicationStatus = ({ id, onSelectedChange }) => {
    return (
      // USING A VARIABLE SCOPED OUTSIDE THIS BLOCK - ONLY USE ONCE
      <Select
        onValueChange={(value) => {
          setApplicationStatus(value);
        }}
        defaultValue={"submitted"}
        disabled
      >
        <SelectTrigger id={id}>
          <SelectValue placeholder="Select a status for this gig application (required)" />
        </SelectTrigger>
        <SelectContent className="bg-black!">
          <SelectItem value="draft">Draft</SelectItem>
          <SelectItem value="submitted">Submitting</SelectItem>
          <SelectItem value="pending">Pending</SelectItem>
          <SelectItem value="accepted">Accepted</SelectItem>
          <SelectItem value="rejected">Rejected</SelectItem>
          <SelectItem value="removed">Removed</SelectItem>
        </SelectContent>
      </Select>
    );
  };
  //form submit handler - submits the data as a Gig Listing application
  const handleSubmit = () => {
    submitGigApplication({
      GigId: gigId,
      ApplicantId: applicantId,
      ApplicationText: applicationText,
      Status: status,
    });
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
        {/* Gig Input - should be removed later once we can get this id from a session token*/}
        <Field>
          <FieldLabel htmlFor="GigId">Gig Id</FieldLabel>
          <Input
            className="bg-white!"
            id="GigId"
            type="numeric"
            placeholder="Enter the gig id (required)*"
            defaultValue={propGigId}
            required
            onChange={(e) => {
              setGigId(e.target.value);
            }}
            disabled
          />
        </Field>

        {/* Applicant Input - should be removed later once we can get this id from a session token*/}
        <Field>
          <FieldLabel htmlFor="ApplicantId">Applicant Id #</FieldLabel>
          <Input
            className="bg-white!"
            id="ApplicantId"
            type="numeric"
            placeholder="Enter your influencer id (required)*"
            required
            onChange={(e) => {
              setApplicantId(e.target.value);
            }}
          />
        </Field>

        {/* Application Text Input */}
        <Field>
          <FieldLabel htmlFor="ApplicationText">Application Text</FieldLabel>
          <Input
            className="bg-white!"
            id="Application Text"
            type="text"
            placeholder="Enter your applicaton content (required)*"
            required
            onChange={(e) => {
              setApplicationText(e.target.value);
            }}
          />
        </Field>

        {/* Status Input */}
        <Field>
          <FieldLabel htmlFor="Status">Application Status</FieldLabel>
          <ApplicationStatus
            id="Status"
            onSelectedChange={(e) => {
              setApplicationStatus(e.target.value);
            }}
          />
        </Field>

        {/* Submit Button */}
        <Field orientation="horizontal">
          <Button type="submit" className="bg-pink-600! hover:bg-pink-500!">
            Submit
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
};

export default CreateGigApplicationForm;
