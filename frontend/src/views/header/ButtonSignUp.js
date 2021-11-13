import { useNavigate } from "react-router";

const ButtonSignUp = (props) => {
  
  const style = props.selectedForm === 'signUp' ? ' selected-form' : '';
  const navigate = useNavigate();

  const redirectToRegister = () => {
    navigate('/register', { replace: true });  
  }

  return (
    <div className={`buttons-header${style}`} onClick={redirectToRegister}>
      Sign Up, It's Free
    </div>
  );
}

export default ButtonSignUp;