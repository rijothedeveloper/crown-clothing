import { Fragment } from "react";
import {
  createUserDocumentFromAuth,
  signInWithGooglepopup,
} from "../../utils/firebase/firebase";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglepopup();
    const userDocRef = createUserDocumentFromAuth(response.user);
  };
  return (
    <Fragment>
      <h1>This is a sign in page</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
    </Fragment>
  );
};

export default SignIn;
