import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { submitSignIn } from "@/modules/data";

//This component implements the basic sign-in form html.
//Documentation for the 'Field' components can be found here: https://ui.shadcn.com/docs/components/field
//The form submits 2 fields 'Username' and 'Password' using a POST request to api/authentication/sign-in
const SignIn = ({ parentOnSubmit }) => {
  //field input states
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      // Submit function
      onSubmit={(e) => {
        e.preventDefault();
        submitSignIn({
          Username: username,
          Password: password,
        });
        parentOnSubmit();
      }}
    >
      <FieldGroup className="">
        {/* Username Input */}
        <Field>
          <FieldLabel htmlFor="Username">Username</FieldLabel>
          <Input
            id="Username"
            type="text"
            placeholder="Enter your username."
            required
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </Field>
        {/* Password Input */}
        <Field>
          <FieldLabel htmlFor="Password">Password</FieldLabel>
          <Input
            id="Password"
            type="password"
            placeholder="********"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <FieldDescription>
            Note: This project does not currently encrypt or hash username and
            password. Excersize caution.
          </FieldDescription>
        </Field>
        {/* Submit Button */}
        <Field orientation="horizontal">
          <Button type="submit">Sign In</Button>
        </Field>
      </FieldGroup>
    </form>
  );
};

export default SignIn;
