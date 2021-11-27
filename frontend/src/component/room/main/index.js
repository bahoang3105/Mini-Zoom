const Main = (props) => {
  return (
    <div className={`main-room transition${props.display ? ' mini-main' : ' full-main'}`}>
      <video className='main-video' id='host' ref={props.hostVideoRef} autoPlay></video>
      <video className='main-video' id='guest' ref={props.guestVideoRef} autoPlay></video>
      <audio ref={props.guestAudioRef} autoPlay/>
    </div>
  );
}

export default Main;