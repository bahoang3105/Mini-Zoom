import RoomComponent from '../component/room';
// import SockJsClient from 'react-stomp';
import { SOCKET_URL } from '../URL';
import { useRef } from 'react';
import SockJS from 'sockjs-client';

const Room = () => {
  const location = window.location.pathname.split('/');
  const roomId = location[location.length-1];
  const clientRef = useRef();
  const userId = localStorage.getItem('userId');

  var sock = new SockJS(SOCKET_URL);
  sock.onopen = function() {
      console.log('open');
      sock.send('test');
  };
 
  sock.onmessage = function(e) {
      console.log('message', e.data);
      sock.close();
  };
 
  sock.onclose = function() {
      console.log('close');
  };

  const onClick = () => {
    sock.send('test');
  }

  // const sendMessage = (msg) => {
  //   try {
  //     clientRef.current.sendMessage('room/all', JSON.stringify(msg));
  //     return true;
  //   } catch(err) {
  //     return false;
  //   }
  // }

  // const onClick = () => {
  //   sendMessage({ a: 'hihi'})
  // }

  // const onConnect = () => {
  //   sendMessage({
  //     userId,
  //     message: 'join'
  //   }); 
  //   console.log('join');
  // }

  // const onMessage = (message, topic) => {
  //   console.log(message, topic);
  // }

  // const onDisconnect = () => {
  //   console.log('disconnected');
  // }

  return (
    <>
      {/* <SockJsClient 
        url={ SOCKET_URL }
        topics={['/topic/all']}
        onMessage={onMessage}
        ref={clientRef}
        onConnect={onConnect}
        onDisconnect={onDisconnect}
        debug={false}
      /> */}
      <RoomComponent roomId={roomId} />
      <div onClick={onClick}>dsadsad</div>
    </>
  );
}

export default Room;