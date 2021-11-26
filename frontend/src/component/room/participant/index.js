import ParticipantItem from './ParticipantItem';
import { AiOutlineDoubleRight } from 'react-icons/ai';

const Participant = (props) => {
  const renderListParticipant = () => {
    return props.listParticipant.map((participant, index) => <ParticipantItem key={index} data={participant} />);
  }

  const closeBar = () => {
    props.setDisplay(false);
  }

  return (    
    <div className={`room-bar transition${props.display ? ' display-bar' : ' hidden-bar'}`}>
      <div className='close-bar' onClick={closeBar}>
        <AiOutlineDoubleRight />
      </div>
      <div className="title-bar" onClick={closeBar}>
        Participants
      </div>
      <div className='content-bar'>
        {renderListParticipant()}
      </div>
    </div>
  );
}

export default Participant;