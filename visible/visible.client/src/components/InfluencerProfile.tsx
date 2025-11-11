import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { createInfluencerProfile } from "@/modules/data";

//This component impletements the basic sign up form html
//Documentation for the 'Field' components can be found here: https://ui.shadcn.com/docs/components/field
//The form uses a function from the data module to submit the 2 fields 'Username' and 'Password' using a POST request to api/authentication/sign-up
const InfluencerProfile = ({ parentOnSubmit }) => {
  //form use states
  const [userId, setUserId] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState("");
  const [portfolio, setPortfolio] = useState("");

  //form submit handler - sends the influencer profile form data to the database.
  const handleSubmit = () => {
    createInfluencerProfile({
      UserId: userId,
      DisplayName: displayName,
      Bio: bio,
      Avatar: avatar,
      Portfolio: portfolio,
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
        {/* UserId Input */}
        <Field>
          <FieldLabel htmlFor="UserId">User ID</FieldLabel>
          <Input
            id="UserId"
            type="numeric"
            placeholder="Enter your user ID(required)*"
            required
            onChange={(e) => {
              setUserId(e.target.value);
            }}
          />
        </Field>

        {/* Display Name Input */}
        <Field>
          <FieldLabel htmlFor="DisplayName">Display Name</FieldLabel>
          <Input
            id="DisplayName"
            type="text"
            placeholder="Enter a display name (required)*"
            required
            onChange={(e) => {
              setDisplayName(e.target.value);
            }}
          />
        </Field>

        {/* Bio Input */}
        <Field>
          <FieldLabel htmlFor="Bio">Bio</FieldLabel>
          <Input
            id="Bio"
            type="text"
            placeholder="Enter a bio (required)*"
            required
            onChange={(e) => {
              setBio(e.target.value);
            }}
          />
        </Field>

        {/* Avatar Input */}
        <Field>
          <FieldLabel htmlFor="Avatar">Avatar</FieldLabel>
          <Input
            id="Avatar"
            type="text"
            placeholder="Upload an avatar (required)*"
            required
            onChange={(e) => {
              setAvatar(e.target.value);
            }}
          />
        </Field>

        {/* Portfolio Input */}
        <Field>
          <FieldLabel htmlFor="Portfolio">Portfolio</FieldLabel>
          <Input
            id="Portfolio"
            type="text"
            placeholder="Update your portfolio (required)*"
            required
            onChange={(e) => {
              setPortfolio(e.target.value);
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

export default InfluencerProfile;
