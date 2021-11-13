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
      <ButtonSignIn />
      <ButtonSignUp />
    </div>
  );
}

export default Header;