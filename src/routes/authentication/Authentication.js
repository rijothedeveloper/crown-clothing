import SignInForm from "../../components/signInForm/SignInForm";
import SignUpForm from "../../components/signUPForm/SignUpForm";
import { AuthenticationContainer } from "./Authentication.styles";

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
