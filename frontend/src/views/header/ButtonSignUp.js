const ButtonSignUp = (props) => {
  const style = props.selectedForm === 'signUp' ? ' selected-form' : '';
  return (
    <div className={`buttons-header${style}`} onClick={() => props.setSelectedForm('signUp')}>
      Sign Up, It's Free
    </div>
  );
}

export default ButtonSignUp;