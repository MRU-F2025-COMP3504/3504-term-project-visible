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
const GigListing = ({ parentOnSubmit }) => {
  //form use states
  const [businessId, setBusinessId] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState();
  const [requirements, setRequirements] = useState("");
  const [status, setStatus] = useState("Open");
  const [deadline, setDeadline] = useState("");

  const GigStatus = () => {
    return (
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a status for this gig listing (required)" />
        </SelectTrigger>
        <SelectContent>
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
    createGigListing({
      BusinessId: businessId,
      Title: title,
      Location: location,
      Description: description,
      Budget: budget,
      Requirements: requirements,
      Status: status,
      Deadline: deadline,
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
        {/* BusinessId Input */}
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

export default GigListing;
