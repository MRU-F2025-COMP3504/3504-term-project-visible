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
import { createGigListing } from "@/modules/data";

//This component impletements the basic sign up form html
//Documentation for the 'Field' components can be found here: https://ui.shadcn.com/docs/components/field
//The form uses a function from the data module to submit the 2 fields 'Username' and 'Password' using a POST request to api/authentication/sign-up

//TODO:
//- Add date selection validation (confirm date is later than current time)
const CreatGigListingForm = ({ parentOnSubmit }) => {
  //form use states
  const [businessId, setBusinessId] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [requirements, setRequirements] = useState("");
  const [status, setStatus] = useState("");
  const [deadline, setDeadline] = useState("");

  const GigStatus = ({ id, onSelectedChange }) => {
    return (
      // USING A VARIABLE SCOPED OUTSIDE THIS BLOCK - ONLY USE ONCE
      <Select
        onValueChange={(value) => {
          setStatus(value);
        }}
        defaultValue={status}
      >
        <SelectTrigger id={id}>
          <SelectValue placeholder="Select a status for this gig listing (required)" />
        </SelectTrigger>
        <SelectContent className="bg-black!">
          <SelectItem value="draft">Draft</SelectItem>
          <SelectItem value="open">Open</SelectItem>
          <SelectItem value="closed">Closed</SelectItem>
          <SelectItem value="filled">Filled</SelectItem>
          <SelectItem value="removed">Removed</SelectItem>
        </SelectContent>
      </Select>
    );
  };
  //form submit handler - checks if passwords match, sends the username and password to the api function if they do
  const handleSubmit = () => {
    // confirm that budget is a valid number
    if (!isNaN(+budget.replace("$", ""))) {
      //Submit the listing to the API
      createGigListing({
        BusinessId: businessId,
        Title: title,
        Location: location,
        Description: description,
        // strip any leading '$' - should strictly be a number at this point.
        Budget: budget.replace("$", ""),
        Requirements: requirements,
        Status: status,
        Deadline: deadline,
      });
      //testing
      // console.log({
      //   BusinessId: businessId,
      //   Title: title,
      //   Location: location,
      //   Description: description,
      //   // strip any leading '$' - should strictly be a number at this point.
      //   Budget: budget.replace("$", ""),
      //   Requirements: requirements,
      //   Status: status,
      //   Deadline: deadline,
      // });
      //Run the parent component's submission handler (close the modal)
      parentOnSubmit();
    }
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
        {/* BusinessId Input - should be removed later once we can get this id from a session token*/}
        <Field>
          <FieldLabel htmlFor="BusinessId">Business ID</FieldLabel>
          <Input
            id="BusinessId"
            type="numeric"
            placeholder="Enter a business id (required)*"
            required
            onChange={(e) => {
              setBusinessId(e.target.value);
            }}
          />
        </Field>

        {/* Title Input */}
        <Field>
          <FieldLabel htmlFor="Title">Title</FieldLabel>
          <Input
            id="Title"
            type="text"
            placeholder="Enter a title (required)*"
            required
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </Field>

        {/* Location Input */}
        <Field>
          <FieldLabel htmlFor="Location">Location</FieldLabel>
          <Input
            id="Location"
            type="text"
            placeholder="Enter a location (required)*"
            required
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </Field>

        {/* Description Input */}
        <Field>
          <FieldLabel htmlFor="Description">Description</FieldLabel>
          <Input
            id="Description"
            type="text"
            placeholder="Enter a description (required)*"
            required
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </Field>

        {/* Budget Input */}
        <Field>
          <FieldLabel htmlFor="Budget">Budget</FieldLabel>
          <Input
            id="Budget"
            type="numeric"
            placeholder="Enter the budget (required)*"
            required
            onChange={(e) => {
              setBudget(e.target.value);
            }}
          />
          {/* Coniditionally displayed error message - budget must be a number, can have leading $, handled later */}
          {isNaN(+budget.replace("$", "")) && (
            <FieldDescription>
              Error: Budget must be a valid number.
            </FieldDescription>
          )}
        </Field>

        {/* Requirements Input */}
        <Field>
          <FieldLabel htmlFor="Requirements">Requirements:</FieldLabel>
          <Input
            id="Requirements"
            type="text"
            placeholder="Enter the requirements (required)*"
            required
            onChange={(e) => {
              setRequirements(e.target.value);
            }}
          />
        </Field>

        {/* Status Input */}
        <Field>
          <FieldLabel htmlFor="Status">Status</FieldLabel>
          {/* <Input
            id="Status"
            type="text"
            placeholder="Enter the gig's status (required)*"
            required
            onChange={(e) => {
              setStatus(e.target.value);
            }}
          /> */}
          <GigStatus
            id="Status"
            onSelectedChange={(e) => {
              setStatus(e.target.value);
            }}
          />
        </Field>

        {/* Deadline Input */}
        <Field>
          <FieldLabel htmlFor="Deadline">Deadline</FieldLabel>
          <Input
            id="Deadline"
            type="datetime-local"
            placeholder="Enter the deadline (required)*"
            required
            onChange={(e) => {
              setDeadline(e.target.value);
            }}
          />
        </Field>

        {/* Submit Button */}
        <Field orientation="horizontal">
          <Button type="submit">Submit</Button>
        </Field>
      </FieldGroup>
    </form>
  );
};

export default CreatGigListingForm;
