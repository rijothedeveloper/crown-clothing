import { useState } from "react";
import "./SignUpForm.styles.scss";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import FormInput from "../formInput/formInput";
import Button from "../button/Button";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const handleForm = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("here handleSubmit");
    if (formFields.password !== formFields.confirmPassword) {
      console.log("password do not match");
      return;
    }
    try {
      const userCredential = await createAuthUserWithEmailAndPassword(
        formFields.email,
        formFields.password
      );
      const user = userCredential.user;
      const userDocRef = createUserDocumentFromAuth(user, {
        displayName: formFields.displayName,
      });
      resetForm();
    } catch (error) {
      console.log(error.message);
    }
  };

  const resetForm = () => {
    setFormFields(defaultFormFields);
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleForm}
          name="displayName"
          value={formFields.displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleForm}
          name="email"
          value={formFields.email}
        />

        <FormInput
          label="password"
          type="password"
          required
          onChange={handleForm}
          name="password"
          value={formFields.password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleForm}
          name="confirmPassword"
          value={formFields.confirmPassword}
        />

        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
