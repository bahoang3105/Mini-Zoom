import { useState } from 'react';
import Camera from '../../icon/Camera';
import Micro from '../../icon/Micro';
import ShareScreen from '../../icon/ShareScreen';
import Chat from '../../icon/Chat';
import Participant from '../../icon/Participant';
import End from '../../icon/End';
import getUserMedia from './getUserMedia';
import getDisplayMedia from '../getDisplayMedia';
import { useNavigate } from "react-router";

const FooterControl = (props) => {
  const navigate = useNavigate();
  const [micro, setMicro] = useState(false);
  const [camera, setCamera] = useState(false);

  const onClickMicro = async () => {
    if(micro) {

    } else {

    }
    setMicro(!micro);
  }
  
  const onClickCamera = async () => {
    if(camera) {

    } else {

    }
    setCamera(!camera);
  }

  const onClickChat = () => {
    props.setDisplayParticipant(false);
    props.setDisplayChat(!props.displayChat);
  }

  const onClickParticipant = () => {
    props.setDisplayParticipant(!props.displayParticipant);
    props.setDisplayChat(false);
  }

  const onClickShareScreen = async () => {
    const shareScreen = await getDisplayMedia();
  }

  const onClickEnd = () => {
    
    navigate('/', { replace: true });
  }

  return (
    <div className='footer-control'>
      <div className='element-bottom' onClick={onClickMicro} title='Micro'>
        <Micro micro={micro} setMicro={setMicro} />
      </div>
      <div className='element-bottom' onClick={onClickCamera} title='Camera'>
        <Camera camera={camera} setCamera={setCamera} />
      </div>
      <div className='element-bottom' style={{ marginLeft: '35%' }} onClick={onClickShareScreen} title='Share Screen'>
        <ShareScreen />
      </div>
      <div className='element-bottom' onClick={onClickChat} title='Chat'>
        <Chat />
      </div>
      <div className='element-bottom' onClick={onClickParticipant} title='Participant'>
        <Participant />
      </div>
      <div id='end-room' onClick={onClickEnd}>
        <End />
      </div>
    </div>
  );
}

export default FooterControl;