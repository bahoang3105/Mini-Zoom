const ParticipantItem = (props) => {
  return (
    <div className='participant-item'>
      <div className='avatar' style={{ backgroundColor: `#${Math.floor(Math.random()*100)}${Math.floor(Math.random()*100)}${Math.floor(Math.random()*100)}`}}>
        {props.data.name[0].toUpperCase()}
      </div>
      <div className='participant-name'>
        {props.data.name}
      </div>
    </div>
  );
}

export default ParticipantItem;