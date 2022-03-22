import Header from "../component/header";
import './register.css';
import SignUpForm from "../component/form/SignUpForm";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const Register = () => {

  const isLogin = localStorage.getItem('userId') && localStorage.getItem('name');
  const navigate = useNavigate();

  useEffect(() => {
    if(isLogin) {
      navigate('/', { replace: true });
    }
  });

  const renderForm = () => {
    return (
      <SignUpForm />
    );
  }

  return (
    <>
      <Header selectedForm='signUp' />
      {renderForm()}
    </>
  );
}

export default Register;