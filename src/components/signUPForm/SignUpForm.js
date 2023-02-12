import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

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
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input
          type="text"
          required
          onChange={handleForm}
          name="displayName"
          value={formFields.displayName}
        />

        <label>Email</label>
        <input
          type="email"
          required
          onChange={handleForm}
          name="email"
          value={formFields.email}
        />

        <label>Password</label>
        <input
          type="password"
          required
          onChange={handleForm}
          name="password"
          value={formFields.password}
        />

        <label>Confirm Password</label>
        <input
          type="password"
          required
          onChange={handleForm}
          name="confirmPassword"
          value={formFields.confirmPassword}
        />

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
