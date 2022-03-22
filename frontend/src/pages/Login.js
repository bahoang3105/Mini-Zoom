import Header from "../component/header";
import './register.css';
import LogInForm from "../component/form/LogInForm";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const Login = () => {

  const isLogin = localStorage.getItem('userId') && localStorage.getItem('name');
  const navigate = useNavigate();

  useEffect(() => {
    if(isLogin) {
      navigate('/', { replace: true });
    }
  });

  const renderForm = () => {
    return (
      <LogInForm />
    );
  }

  return (
    <>
      <Header selectedForm='logIn' />
      {renderForm()}
    </>
  );
}

export default Login;