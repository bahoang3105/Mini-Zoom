import { useRef } from "react";
import './main.css';

const Main = (props) => {
  const hostRef = useRef();
  const otherPeopleRef = useRef();
  const listParticipantMedia = props.listParticipant.filter(participant => !!participant.mediaStream && participant.id !== 2);
  const displayParticipantMedia = (listParticipantMedia) => {
    return listParticipantMedia.map(() => (
      <video key={listParticipantMedia.id} autoPlay className={`other-video`} />
    ));
  }

  const displayHostMedia = (listParticipantMedia) => {
    const numberOfMedia = listParticipantMedia.length;
    switch(numberOfMedia) {
      case 0: return 'full';
      case 1: return 'part';
      default: return 'small'
    }
  }

  return (
    <div className={`main-room transition${props.display !== '' ? ' mini-main' : ' full-main'}`}>
      <video className={`host-video-${displayHostMedia(listParticipantMedia)}`} ref={hostRef} autoPlay muted></video>
      <div className={`other-videos other-videos-${listParticipantMedia.length}`} ref={otherPeopleRef}>
        {displayParticipantMedia(listParticipantMedia)}
      </div>
    </div>
  );
}

export default Main;