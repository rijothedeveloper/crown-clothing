import { Fragment } from "react";
import SignInForm from "../../components/signInForm/SignInForm";
import SignUpForm from "../../components/signUPForm/SignUpForm";
import "./Authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
