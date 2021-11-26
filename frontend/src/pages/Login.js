import Header from "../component/header";
import '../css/register.css';
import SignInForm from "../component/form/SignInForm";
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