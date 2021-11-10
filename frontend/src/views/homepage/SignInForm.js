import { useState } from "react";

const SignInForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const[noti, setNoti] = useState('');

  const signIn = () => {
    if(username.length === 0 || password.length === 0) {
      setNoti('You need to type all fields');
      return;
    }
    setNoti('');
  }

  return (
    <div className='homepage-form'>
      <div className='name-form'>
        Sign In
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
            onChange={e => setUsername(e.target.value)} 
            placeholder='Username' 
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
            placeholder='Password' 
          />
        </div>
      </div>
      <div className='forgot-password'>
        Forgot Password?
      </div>
      <div className='noti'>
        {noti}
      </div>
      <div className='button-form-homepage' onClick={signIn}>
        Sign In
      </div>
    </div>
  );
}

export default SignInForm;