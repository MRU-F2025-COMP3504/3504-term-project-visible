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

//This component implements the basic Influencer Profile form html
//Documentation for the 'Field' components can be found here: https://ui.shadcn.com/docs/components/field
//The form uses a function from the data module to submit the Influencer Profile data via a POST request to api/influencer
const InfluencerProfile = ({ parentOnSubmit }) => {
  //form use states
  const [userId] = useState(1);
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
        {/* Display Name Input */}
        <Field>
          <FieldLabel htmlFor="DisplayName">Display Name</FieldLabel>
          <Input
            className="bg-white!"
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
            className="bg-white!"
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
            className="bg-white!"
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
            className="bg-white!"
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
          <Button type="submit" className="bg-pink-600! hover:bg-pink-500!">
            Submit
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
};

export default InfluencerProfile;
