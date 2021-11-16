import { useNavigate } from "react-router";

const ButtonSignIn = (props) => {

  const style = props.selectedForm === 'signIn' ? ' selected-form' : '';
  const navigate = useNavigate();

  const redirectToLogin = () => {
    navigate('/login', { replace: true })
  }

  return (
    <div className={`buttons-header${style}`} onClick={redirectToLogin}>
      Sign In
    </div>
  );
}

export default ButtonSignIn;