import { useNavigate } from "react-router";

const ButtonSignIn = (props) => {

  const style = props.selectedForm === 'signIn' ? ' selected-form' : '';
  const navigate = useNavigate();

  const redirectToLogin = () => {
    navigate('/login', { replace: true })
  }

  return (
    <div className={`buttons-header${style}`} onClick={redirectToLogin}>
      Log in
    </div>
  );
}

export default ButtonSignIn;