import FooterControl from "./footerControl";
import '../../css/room.css';
import { useEffect } from "react";
import Chat from "./chat";
import Main from "./main";
import Participant from "./participant";

const Room = (props) => {

  const displayMain = props.displayChat && props.displayParticipant;

  useEffect(() => {
    
  });
  return (
    <div className='room'>
      <Main  display={displayMain} />
      <Chat display={props.displayChat} setDisplay={props.setDisplayChat} listMsg={props.listMsg} />
      <Participant display={props.displayParticipant} setDisplay={props.setDisplayParticipant} />
      <FooterControl 
        displayChat={props.displayChat}
        setDisplayChat={props.setDisplayChat} 
        displayParticipant={props.displayParticipant}
        setDisplayParticipant={props.setDisplayParticipant}
        unreadMsg={props.unreadMsg}
      />
    </div>
  );
}

export default Room;