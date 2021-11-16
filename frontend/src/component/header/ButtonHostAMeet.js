import axios from "axios";
import { useNavigate } from "react-router";
import { API_URL } from "../../URL";

const ButtonHostAMeet = () => {
  const navigate = useNavigate();
  const hostAMeet = async() => {
    const userId = localStorage.getItem('userId');
    const room = await axios.post(API_URL + '/room/create', {
      userId,
    });
    navigate('/room/' + room.data.roomId, { replace: true });
  }

  return (
    <div className='buttons-header' onClick={hostAMeet}>
      Host A Meet
    </div>
  );
}

export default ButtonHostAMeet;