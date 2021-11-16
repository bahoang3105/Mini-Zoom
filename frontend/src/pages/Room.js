import RoomComponent from '../component/room';

const Room = () => {
  const location = window.location.pathname.split('/');
  const roomId = location[location.length-1];
  return (
    <RoomComponent roomId={roomId} />
  );
}

export default Room;