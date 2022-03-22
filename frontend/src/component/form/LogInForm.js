import axios from "axios";
import { useState } from "react";
import { API_URL } from "../../URL";
import { useNavigate } from "react-router-dom";

const LogInForm = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [noti, setNoti] = useState('');
  const navigate = useNavigate();
  
  const logIn = async() => {
    if(username.length ===0 || password.length ===0) {
      setNoti('You need to type all fields');
      return;
    }
    if(username.length < 8) {
      setNoti('Invalid username');
      return;
    }
    if(password.length < 8) {
      setNoti('Invalid password. Password is too short');
      return;
    }
    setNoti('');
    try {
      const checkLogin = await axios.get(API_URL + '/user/login', {
        params: {
          username,
          password,
        }
      });
      if(checkLogin.data) {
        localStorage.setItem('userId', checkLogin.data.userId);
        localStorage.setItem('name', checkLogin.data.name);
        navigate('/', { replace: true });
      }
    } catch (err) {
      setNoti(err.response.data.message);
      console.error(err.response.data.message);
    }
  }

  return (
    <div className='homepage-form'>
      <div className='name-form'>
        Log In
      </div>
      <div className='input-form'>
        <div className='field-homepage'>
          <span className='name-input'>
            Username
          </span>
          <input 
            type='text' 
            className='input-form-homepage' 
            value={username} 
            onChange={e => setUserName(e.target.value)}
          />
        </div>
        <div className='field-homepage'>
          <span className='name-input'>
            Password
          </span>
          <input 
            type='password' 
            className='input-form-homepage' 
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className='noti'>
        {noti}
      </div>
      <div className='forgot-password'>
        Forgot Password?
      </div>
      <div className='button-form-homepage' onClick={logIn}>
        Log In
      </div>
    </div>
  );
}

export default LogInForm; 
