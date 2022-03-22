import './header.css';
import ButtonHome from './ButtonHome';
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
        <ButtonHome selectedForm={props.selectedForm} />
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
      </div>
    </div>
  );
}

export default Header;