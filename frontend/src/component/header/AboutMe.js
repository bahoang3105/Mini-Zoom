import { useNavigate } from "react-router";

const AboutMe = (props) => {
  const navigate = useNavigate();
  const style = props.selectedForm === 'about' ? ' selected-form' : '';
  const redirectToAbout = () => {
    navigate('/about', { replace: true });
  }
  return (
    <div className={`buttons-header${style}`} onClick={redirectToAbout}>
      About Me
    </div>
  );
}

export default AboutMe;