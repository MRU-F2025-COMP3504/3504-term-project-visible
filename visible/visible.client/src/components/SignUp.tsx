import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { submitSignUp } from "@/modules/data";

//This component impletements the basic sign up form html
//Documentation for the 'Field' components can be found here: https://ui.shadcn.com/docs/components/field
//The form uses a function from the data module to submit the 2 fields 'Username' and 'Password' using a POST request to api/authentication/sign-up
const signUp = () => {
  //form use states
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isPasswordIdentical, setIsPasswordIdentical] = useState(true);

  //form submit handler - checks if passwords match, sends the username and password to the api function if they do
  const handleSubmit = () => {
    if (!(password === passwordConfirm)) {
      setIsPasswordIdentical(false);
    } else {
      setIsPasswordIdentical(true);
      console.log(`passwords match`);
      submitSignUp({
        Username: username,
        Password: password,
      });
    }
  };

  return (
    <form
      // Submit function
      onSubmit={(e) => {
        e.preventDefault();
        console.log(
          `Sign up submitted with ${username} ${password} ${passwordConfirm}`,
        );
        handleSubmit();
      }}
      className="border-2 border-indigo-400 p-4"
    >
      <FieldGroup>
        {/* Username Input */}
        <Field>
          <FieldLabel htmlFor="Username">Username</FieldLabel>
          <Input
            id="Username"
            type="text"
            placeholder="Enter a username"
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
            placeholder="Enter a password"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Field>
        {/* Password Confirm Input */}
        <Field>
          <FieldLabel htmlFor="Password">Confirm Password</FieldLabel>
          <Input
            id="PasswordConfirm"
            type="password"
            placeholder="Confirm your password"
            required
            onChange={(e) => {
              setPasswordConfirm(e.target.value);
            }}
          />
          {/* Conditional Note Shown if Confirm password does not match */}
          {!isPasswordIdentical && (
            <FieldDescription className="text-red-400">
              Error: Passwords must match.
            </FieldDescription>
          )}
          <FieldDescription>
            <i>
              Note: This project does not currently encrypt or hash usernames or
              passwords.
              <br />
              Please don't select a password that you use for another purpose.
            </i>
          </FieldDescription>
        </Field>
        {/* Submit Button */}
        <Field orientation="horizontal">
          <Button type="submit">Sign Up</Button>
        </Field>
      </FieldGroup>
    </form>
  );
};

export default signUp;
