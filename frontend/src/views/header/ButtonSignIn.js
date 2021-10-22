const ButtonSignIn = (props) => {
  const style = props.selectedForm === 'signIn' ? ' selected-form' : '';
  return (
    <div className={`buttons-header${style}`} onClick={() => props.setSelectedForm('signIn')}>
      Sign In
    </div>
  );
}

export default ButtonSignIn;