import { useNavigate } from "react-router";

const AboutMe = () => {
  const navigate = useNavigate();
  const redirectToAbout = () => {
    navigate('/about', { replace: true });
  }
  return (
    <div className='buttons-header' onClick={redirectToAbout}>
      About Me
    </div>
  );
}

export default AboutMe;