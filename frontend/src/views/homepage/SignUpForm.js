import { useState } from "react";

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [noti, setNoti] = useState('');

  const signUp = () => {
    if(username.length === 0 || password.length === 0 || repeatPassword.length === 0 || firstname.length === 0 || lastname.length === 0) {
      setNoti('You need to type all fields');
      return;
    } 
    if(username.length < 8) {
      setNoti('Username is too short');
      return;
    }
    if(password.length < 8) {
      setNoti('Password is too short');
      return;
    }
    if(repeatPassword !== password) {
      setNoti('Password and repeat password are not the same');
      return;
    }
    setNoti('');

  }

  return (
    <div className='homepage-form'>
      <div className='name-form'>
        Sign Up
      </div>
      <div className='input-form'>
        <div className='fields-name'>
          <div className='field-name'>
            <span className='name-input'>
              Lastname
            </span>
            <input 
              type='text' 
              className='input-form-homepage' 
              value={lastname} 
              onChange={e => setLastname(e.target.value)} 
              placeholder='Lastname' 
            />
          </div>
          <div className='field-name'>
            <span className='name-input'>
              Firstname
            </span>
            <input 
              type='text' 
              className='input-form-homepage' 
              value={firstname} 
              onChange={e => setFirstname(e.target.value)} 
              placeholder='Firstname' 
            />
          </div>
        </div>
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
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            className='input-form-homepage' 
            placeholder='Password' 
          />
        </div>
        <div className='field-homepage'>
          <span className='name-input'>
            Repeat
          </span>
          <input 
            type='password' 
            value={repeatPassword} 
            onChange={e => setRepeatPassword(e.target.value)} 
            className='input-form-homepage' 
            placeholder='Repeat Password' 
          />
        </div>
      </div>
      <div className='noti'>
        {noti}
      </div>
      <div className='button-form-homepage' onClick={signUp}>
        Sign Up
      </div>
    </div>
  );
}

export default SignUpForm;