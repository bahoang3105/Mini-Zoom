import RoomComponent from '../component/room';
import { SOCKET_URL } from '../URL';
import { useEffect, useState } from 'react';

const Room = () => {
  const location = window.location.pathname.split('/');
  const roomId = location[location.length-1];
  const [displayChat, setDisplayChat] = useState(true);
  const [displayParticipant, setDisplayParticipant] = useState(false);
  const userId = localStorage.getItem('userId');
  const [listMsg, setListMsg] = useState([{name: "hoang", id: '1', content: "hihii", time: "19h"}, {name: "hieu", id: '2', content: "dsdsd", time: "20h"}, {name: "admin", id: 0, content: {name: "hichic", id: '1', type: "join"}, time: "21h"}]);
  const [unReadMsg, setUnReadMsg] = useState(0);

  var stompClient = null;

  const connect = () => {
    var sock = new window.SockJS(SOCKET_URL);
    stompClient = window.Stomp.over(sock);
    stompClient.connect({}, (frame) => {
      stompClient.subscribe('/topic/' + roomId, (mess) => {
        setListMsg([...listMsg, JSON.parse(mess.body)]);
      });
    })
  }
  
  useEffect(() => {
    connect();
  });

  const onClick = () => {
    stompClient.send('/app/' + roomId, {}, JSON.stringify({ id: "333", name: 'hoang', content: 'hihi' }));
  }

  return (
    <>
      <RoomComponent 
        roomId={roomId} 
        displayChat={displayChat}
        setDisplayChat={setDisplayChat}
        displayParticipant={displayParticipant}
        setDisplayParticipant={setDisplayParticipant}
        listMsg={listMsg}
        unReadMsg={unReadMsg}
      />
      <div onClick={onClick} style={{ backgroundColor: "white", position: "fixed"}}>adsdasd</div>
    </>
  );
}

export default Room;