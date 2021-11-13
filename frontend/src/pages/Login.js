import Header from "../views/header";
import '../css/register.css';
import SignInForm from "../views/form/SignInForm";

const Login = () => {
  const renderForm = () => {
    return (
      <SignInForm setSelectedForm='signIn' />
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