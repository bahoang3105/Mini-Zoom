import '../../css/header.css';
import AboutMe from './AboutMe';
import ButtonHostAMeet from './ButtonHostAMeet';
import ButtonJoinAMeet from './ButtonJoinAMeet';
import ButtonSignIn from './ButtonSignIn';
import ButtonSignUp from './ButtonSignUp';
import Logo from './Logo';

const Header = (props) => {
  const isLogin = localStorage.getItem('userId') && localStorage.getItem('name');
  if(!isLogin) {
    return (
    <div className='header'>
      <Logo />
      <div className='header-selection'>
        <AboutMe selectedForm={props.selectedForm} />
        <ButtonSignIn selectedForm={props.selectedForm} />
        <ButtonSignUp selectedForm={props.selectedForm} />
      </div>
    </div>
    );
  }
  return (
    <div className='header'>
      <Logo />
      <div className='header-selection'>
        <AboutMe selectedForm={props.selectedForm} />
        <ButtonHostAMeet />
        <ButtonJoinAMeet />
      </div>
    </div>
  );
}

export default Header;