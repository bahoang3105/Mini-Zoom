import RoomComponent from '../component/room';
import { SOCKET_URL } from '../URL';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import getUserMedia from '../component/room/getUserMedia';
import getDisplayMedia from '../component/room/getDisplayMedia';
import Peer from 'peerjs';

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
  const [listMsg, setListMsg] = useState([]);
  const [listParticipant, setListPartcipant] = useState([{name: 'Hoang Nguyen', id: '2'}, {name: 'Nguyen Yen', id: '44'}]);
  const [unReadMsg, setUnReadMsg] = useState(0);
  const [micro, setMicro] = useState(false);
  const [camera, setCamera] = useState(false);

  const hostVideoRef = useRef();
  const guestVideoRef = useRef();
  const guestAudioRef = useRef();
  const hihi = useRef();

  const sock = new window.SockJS(SOCKET_URL);
  const stompClient = window.Stomp.over(sock);

  const connect = () => {
    stompClient.connect({}, (frame) => {
      stompClient.subscribe('/topic/' + roomId, (message) => handleMessage(JSON.parse(message.body)));
    });
  }

  sock.onclose = () => {
    stompClient.send("/app/" + roomId, {}, JSON.stringify({id: userId, name, type: 'join'}));
  }
  
  const handleMessage = (message) => {
    setListMsg(prevList => [...prevList, message]);
    if(message.id === '0' && message.name === 'admin') {
      const content = JSON.parse(message.content);
      if(content.type === 'join') {
        setListPartcipant(prevList => [...prevList, {name: content.name, id: content.id}]);
      }
      if(content.type === 'leave') {
        const place = listParticipant.findIndex(participant => participant.id === content.id);
        setListPartcipant(prevList => [
          ...prevList.slice(0, place),
          ...prevList.slice(place+1),
        ]) ;
      }
    }
  }

  const onClickMicro = async () => {
    if(micro) {

    } else {

    }
    setMicro(!micro);
  }
  
  const onClickCamera = async () => {
    if(!camera) {
      const srcCamera = await getUserMedia("camera");
      hostVideoRef.current.srcObject = srcCamera;
    } else {

    }
    setCamera(!camera);
  }

  const onClickChat = () => {
    setDisplayParticipant(false);
    setDisplayChat(!displayChat);
  }

  const onClickParticipant = () => {
    setDisplayParticipant(!displayParticipant);
    setDisplayChat(false);
  }

  const onClickShareScreen = async () => {
    const shareScreen = await getDisplayMedia();
  }

  const onClickEnd = () => {
    sendMessage('leave');
    stompClient.disconnect();
    navigate('/', { replace: true });
  }

  useEffect(() => {
    connect();
    const subscribe = setInterval(() => {
      try {
        sendMessage('join');
        clearInterval(subscribe);
      } catch (err) {
        console.log(err);
      }
    }, 500);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendMessage = (type, content) => {
    stompClient.send('/app/' + roomId, {}, JSON.stringify({ id: userId, name, type, content}));
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
      listParticipant={listParticipant}
      sendMessage={sendMessage}
      stompClient={stompClient}
      camera={camera}
      micro={micro}
      onClickCamera={onClickCamera}
      onClickChat={onClickChat}
      onClickEnd={onClickEnd}
      onClickMicro={onClickMicro}
      onClickParticipant={onClickParticipant}
      onClickShareScreen={onClickShareScreen}
      hostVideoRef={hostVideoRef}
      guestVideoRef={guestVideoRef}
      guestAudioRef={guestAudioRef}
    />
    </>
  );
}

export default Room;