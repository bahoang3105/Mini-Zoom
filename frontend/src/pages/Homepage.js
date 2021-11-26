import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../component/header";

const Homepage = () => {

  const isLogin = localStorage.getItem('userId') && localStorage.getItem('name');
  const navigate = useNavigate();

  useEffect(() => {
    if(!isLogin) {
      navigate('/login', { replace: true });
    }
  });

  return (
    <div>
      <Header />
    </div>
  );
}

export default Homepage;