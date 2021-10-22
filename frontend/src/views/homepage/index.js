import Header from "../header";
import '../../css/homepage.css';
import SignInForm from "./SignInForm";
import { useState } from "react";
import SignUpForm from "./SignUpForm";

const Homepage = () => {
  const [selectedForm, setSelectedForm] = useState('signIn');
  const renderForm = () => {
    switch(selectedForm) {
      case 'signIn': {
        return (
          <SignInForm />
        );
      }
      case 'signUp': {
        return (
          <SignUpForm />
        );
      }
      default: {
        return <div />;
      }
    }
  }

  return (
    <>
      <Header selectedForm={selectedForm} setSelectedForm={setSelectedForm} />
      <div className='homepage' />
      {renderForm()}
    </>
  );
}

export default Homepage;