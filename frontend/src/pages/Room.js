import RoomComponent from '../component/room';
// import SockJsClient from 'react-stomp';
import { SOCKET_URL } from '../URL';
import { useEffect, useRef } from 'react';

const Room = () => {
  const location = window.location.pathname.split('/');
  const roomId = location[location.length-1];
  const clientRef = useRef();
  const userId = localStorage.getItem('userId');

  var stompClient = null;

  const connect = () => {
    var sock = new window.SockJS(SOCKET_URL);
    stompClient = window.Stomp.over(sock);
    stompClient.connect({}, (frame) => {
      console.log(frame);
      stompClient.subscribe('/topic/' + roomId, (mess) => {
        console.log(mess);
      })
    })
  }
  
  useEffect(() => {
    connect();
  }, []);

  const onClick = () => {
    stompClient.send('/app/' + roomId, {}, 'dasdas');
  }
  
  console.log(window);

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
      <div onClick={onClick}>dasdasd</div>
    </>
  );
}

export default Room;