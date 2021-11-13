import Header from "../views/header";
import '../css/register.css';
import SignUpForm from "../views/form/SignUpForm";

const Register = () => {
  const renderForm = () => {
    return (
      <SignUpForm setSelectedForm='signUp' />
    );
  }

  return (
    <>
      <Header selectedForm='signUp' />
      <div className='homepage' />
      {renderForm()}
    </>
  );
}

export default Register;