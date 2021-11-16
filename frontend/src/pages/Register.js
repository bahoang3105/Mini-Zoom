import Header from "../component/header";
import '../css/register.css';
import SignUpForm from "../component/form/SignUpForm";

const Register = () => {
  const renderForm = () => {
    return (
      <SignUpForm />
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