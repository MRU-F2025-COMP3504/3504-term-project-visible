import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { createBusinessProfile } from "@/modules/data";

//This component implements the basic Business Profile form html
//Documentation for the 'Field' components can be found here: https://ui.shadcn.com/docs/components/field
//The form uses a function from the data module to submit the Business Profile data via a POST request to api/business
const BusinessProfile = ({ parentOnSubmit }) => {
  //form use states
  const [businessName, setBusinessName] = useState("");
  const [location, setLocation] = useState("");
  const [industry, setIndustry] = useState("");
  const [image, setImage] = useState("");

  //form submit handler - sends the Business profile form data to the database.
  const handleSubmit = () => {
    createBusinessProfile({
      BusinessName: businessName,
      Location: location,
      Industry: industry,
      DisplayImage: image,
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
        {/* Business Name Input */}
        <Field>
          <FieldLabel htmlFor="BusinessName">Business Name</FieldLabel>
          <Input
            id="BusinessName"
            type="text"
            placeholder="Enter the business name (required)*"
            required
            onChange={(e) => {
              setBusinessName(e.target.value);
            }}
          />
        </Field>

        {/* Location Input */}
        <Field>
          <FieldLabel htmlFor="Location">Location</FieldLabel>
          <Input
            id="Location"
            type="text"
            placeholder="Enter the business location (required)*"
            required
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </Field>

        {/* Industry Input */}
        <Field>
          <FieldLabel htmlFor="Industry">Industry</FieldLabel>
          <Input
            id="Industry"
            type="text"
            placeholder="Choose your industry (required)*"
            required
            onChange={(e) => {
              setIndustry(e.target.value);
            }}
          />
        </Field>

        {/* Image Input */}
        <Field>
          <FieldLabel htmlFor="Image">Display Image</FieldLabel>
          <Input
            id="Image"
            type="text"
            placeholder="Provide an image path (required)*"
            required
            onChange={(e) => {
              setImage(e.target.value);
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

export default BusinessProfile;
