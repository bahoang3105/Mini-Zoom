import Camera from '../../icon/Camera';
import Micro from '../../icon/Micro';
import ShareScreen from '../../icon/ShareScreen';
import Chat from '../../icon/Chat';
import Participant from '../../icon/Participant';
import End from '../../icon/End';

const FooterControl = (props) => {
  return (
    <div className='footer-control'>
      <div className='element-bottom' onClick={props.onClickMicro} title='Micro'>
        <Micro micro={props.micro} />
      </div>
      <div className='element-bottom' onClick={props.onClickCamera} title='Camera'>
        <Camera camera={props.camera} />
      </div>
      <div className='element-bottom' style={{ marginLeft: '35%' }} onClick={props.onClickShareScreen} title='Share Screen'>
        <ShareScreen />
      </div>
      <div className='element-bottom' onClick={props.onClickChat} title='Chat'>
        <Chat />
      </div>
      <div className='element-bottom' onClick={props.onClickParticipant} title='Participant'>
        <Participant />
      </div>
      <div id='end-room' onClick={props.onClickEnd}>
        <End />
      </div>
    </div>
  );
}

export default FooterControl;