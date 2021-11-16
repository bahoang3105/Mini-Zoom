import Header from "../component/header";
import '../css/register.css';
import SignInForm from "../component/form/SignInForm";

const Login = () => {
  const renderForm = () => {
    return (
      <SignInForm />
    );
  }

  return (
    <>
      <Header selectedForm='signIn' />
      <div className='homepage' />
      {renderForm()}
    </>
  );
}

export default Login;