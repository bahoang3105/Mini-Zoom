import FooterControl from "./footerControl";
import '../../css/room.css';
import { useEffect } from "react";
import Chat from "./chat";
import Main from "./main";
import Participant from "./participant";

const Room = (props) => {

  const displayMain = props.displayChat || props.displayParticipant;

  useEffect(() => {
    
  });
  return (
    <div className='room'>
      <Main
        display={displayMain} 
        hostVideoRef={props.hostVideoRef}
        guestVideoRef={props.guestVideoRef}
        guestAudioRef={props.guestAudioRef}
      />
      <Chat 
        display={props.displayChat} 
        setDisplay={props.setDisplayChat} 
        listMsg={props.listMsg} 
        sendMessage={props.sendMessage}
      />
      <Participant display={props.displayParticipant} setDisplay={props.setDisplayParticipant} listParticipant={props.listParticipant} />
      <FooterControl 
        displayChat={props.displayChat}
        setDisplayChat={props.setDisplayChat} 
        displayParticipant={props.displayParticipant}
        setDisplayParticipant={props.setDisplayParticipant}
        unreadMsg={props.unreadMsg}
        stompClient={props.stompClient}
        sendMessage={props.sendMessage}
        camera={props.camera}
        micro={props.micro}
        onClickCamera={props.onClickCamera}
        onClickChat={props.onClickChat}
        onClickEnd={props.onClickEnd}
        onClickMicro={props.onClickMicro}
        onClickParticipant={props.onClickParticipant}
        onClickShareScreen={props.onClickShareScreen}
      />
    </div>
  );
}

export default Room;