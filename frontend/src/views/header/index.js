import '../../css/header.css';
import AboutMe from './AboutMe';
import ButtonHostAMeet from './ButtonHostAMeet';
import ButtonJoinAMeet from './ButtonJoinAMeet';
import ButtonSignIn from './ButtonSignIn';
import ButtonSignUp from './ButtonSignUp';
import Logo from './Logo';

const Header = (props) => {
  return (
    <div className='header'>
      <Logo />
      <AboutMe />
      <ButtonHostAMeet />
      <ButtonJoinAMeet />
      <ButtonSignIn selectedForm={props.selectedForm} setSelectedForm={props.setSelectedForm} />
      <ButtonSignUp selectedForm={props.selectedForm} setSelectedForm={props.setSelectedForm} />
    </div>
  );
}

export default Header;