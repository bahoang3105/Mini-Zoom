const SignUpForm = () => {
  return (
    <div className='homepage-form'>
      <div className='name-form'>
        Sign Up
      </div>
      <div className='input-form'>
        <div className='field-homepage'>
          <span className='name-input'>
            Username
          </span>
          <input type='text' className='input-form-homepage' placeholder='Username' />
        </div>
        <div className='field-homepage'>
          <span className='name-input'>
            Password
          </span>
          <input type='password' className='input-form-homepage' placeholder='Password' />
        </div>
      </div>
      <div className='button-form-homepage'>
        Sign Up
      </div>
    </div>
  );
}

export default SignUpForm;