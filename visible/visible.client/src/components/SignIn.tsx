import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

//This component implements the basic sign-in form html.
//Documentation for the 'Field' components can be found here: https://ui.shadcn.com/docs/components/field
//The form submits 2 fields 'Username' and 'Password' using a POST request to api/authentication/sign-in
const SignIn = () => {
  return (
    <FieldGroup className="border-2 border-indigo-600">
      {/* Username Input */}
      <Field>
        <FieldLabel htmlFor="Username">Username</FieldLabel>
        <Input
          id="Username"
          type="text"
          placeholder="Enter your username."
          required
        />
      </Field>
      {/* Password Input */}
      <Field>
        <FieldLabel htmlFor="Password">Password</FieldLabel>
        <Input id="Password" type="password" placeholder="********" required />
        <FieldDescription>
          Note: This project does not currently encrypt or hash username or
          password. Excersize caution.
        </FieldDescription>
      </Field>
      {/* Submit Button */}
      <Field orientation="horizontal">
        <Button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            console.log(e);
          }}
        >
          Sign In
        </Button>
      </Field>
    </FieldGroup>
  );
};

export default SignIn;
