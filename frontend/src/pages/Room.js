import RoomComponent from '../component/room';
import { SOCKET_URL } from '../URL';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const Room = () => {

  const isLogin = localStorage.getItem('userId') && localStorage.getItem('name');
  const navigate = useNavigate();

  useEffect(() => {
    if(!isLogin) {
      navigate('/login', { replace: true });
    }
  });

  const location = window.location.pathname.split('/');
  const roomId = location[location.length-1];
  const [displayChat, setDisplayChat] = useState(true);
  const [displayParticipant, setDisplayParticipant] = useState(false);
  const userId = localStorage.getItem('userId');
  const name = localStorage.getItem('name') || 'HoangNguyen';
  const [listMsg, setListMsg] = useState([{name: 'hoang', id: '1', content: 'hihadf sghasdif gsadifu sdghfi agfh sdafg asfidsf gaisu dyf sdafig fdsa ii', time: '19h'}, {name: 'hieu', id: '2', content: 'dsdsd', time: '20h'}, {name: 'admin', id: 0, content: {name: 'hichic', id: '4', type: 'left'}, time: '21h'}]);
  const [listParticipant, setListPartcipant] = useState([{name: 'Hoang Nguyen', id: '2'}, {name: 'Nguyen Yen', id: '44'}]);
  const [unReadMsg, setUnReadMsg] = useState(0);

  var stompClient = null;

  const connect = () => {
    var sock = new window.SockJS(SOCKET_URL);
    stompClient = window.Stomp.over(sock);
    stompClient.connect({}, (frame) => {
      stompClient.subscribe('/topic/' + roomId, (message) => handleMessage(JSON.parse(message.body)));
    })
  }
  
  const handleMessage = (message) => {
    setListMsg([...listMsg, message]);
    if(message.id === '0' && message.name === 'admin') {
      if(message.content.type === 'join') {
        setListPartcipant([...listParticipant, {name: message.content.name, id: message.content.id}]);
      }
      if(message.content.type === 'leave') {
        const place = listParticipant.findIndex(participant => participant.id === message.content.id);
        setListPartcipant([
          ...listParticipant.slice(0, place),
          ...listParticipant.slice(place+1),
        ]) ;
      }
    }
  }

  useEffect(() => {
    connect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendMessage = (content) => {
    stompClient.send('/app/' + roomId, {}, JSON.stringify({ id: userId, name, content}));
  }

  return (
    <RoomComponent 
      roomId={roomId} 
      displayChat={displayChat}
      setDisplayChat={setDisplayChat}
      displayParticipant={displayParticipant}
      setDisplayParticipant={setDisplayParticipant}
      listMsg={listMsg}
      unReadMsg={unReadMsg}
      listParticipant={listParticipant}
      sendMessage={sendMessage}
    />
  );
}

export default Room;