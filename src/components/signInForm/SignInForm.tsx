import {
  useEffect,
  useState,
  useContext,
  FormEvent,
  ChangeEvent,
  ErrorInfo,
} from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  createUserDocumentFromAuth,
  loginAuthUserWithEmailAndPassword,
  signInWithGooglepopup,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase";
import FormInput from "../formInput/formInput";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "./SignInForm.styles.scss";
import { UserConext } from "../../contexts/user.context";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const handleFormChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormFields({ ...formFields, [event.target.name]: event.target.value });
  };
  const loginWithGoogle = async () => {
    await signInWithGooglepopup();
    // await createUserDocumentFromAuth(response.user);
  };

  const loginEmailUser = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    resetForm();
    try {
      const userCredentials = await loginAuthUserWithEmailAndPassword(
        formFields.email,
        formFields.password
      );
    } catch (error: any) {
      console.log(error.message);
      switch (error.code) {
        case "auth/wrong-password":
          alert("password is wrong");
          break;
        case "auth/user-not-found":
          alert("password is wrong");
          break;
        default:
          alert("problem in sign in");
      }
    }
  };

  useEffect(() => {
    async function getRedirectedUser() {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = createUserDocumentFromAuth(response.user);
      }
    }
    getRedirectedUser();
  }, []);
  const resetForm = () => {
    setFormFields(defaultFormFields);
  };
  return (
    <div className="sign-up-container">
      <h1>Sign in page</h1>
      <h2>Already have an account</h2>
      <span>Sign in with your email and password</span>
      <form>
        <FormInput
          label="Email"
          type="email"
          required
          value={formFields.email}
          name="email"
          onChange={handleFormChange}
        />
        <FormInput
          label="password"
          type="password"
          required
          value={formFields.password}
          name="password"
          onChange={handleFormChange}
        />
        <div className="button-group">
          <Button type="submit" onClick={() => loginEmailUser}>
            SIGN IN
          </Button>
          <Button
            type="button"
            onClick={loginWithGoogle}
            buttonType={BUTTON_TYPE_CLASSES.google}
          >
            GOOGLE SIGN IN
          </Button>
        </div>

        {/* <button onClick={signInWithGoogleRedirect}>
          Sign in with Google Redirect
        </button> */}
      </form>
    </div>
  );
};

export default SignInForm;
