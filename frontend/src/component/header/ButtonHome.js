import { useNavigate } from "react-router";

const ButtonHome = (props) => {
  const navigate = useNavigate();
  const style = props.selectedForm === 'home' ? ' selected-form' : '';
  const redirectToHome = () => {
    navigate('/', { replace: true });
  }
  return (
    <div className={`buttons-header${style}`} onClick={redirectToHome}>
      Home
    </div>
  );
}

export default ButtonHome;