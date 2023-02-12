import { getRedirectResult } from "firebase/auth";
import { Fragment, useEffect } from "react";
import SignUpForm from "../../components/signUPForm/SignUpForm";
import {
  auth,
  createUserDocumentFromAuth,
  signInWithGooglepopup,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglepopup();
    const userDocRef = createUserDocumentFromAuth(response.user);
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

  return (
    <Fragment>
      <h1>This is a sign in page</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button>
      <SignUpForm />
    </Fragment>
  );
};

export default SignIn;
