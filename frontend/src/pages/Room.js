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
  const [listParticipant, setListPartcipant] = useState([]);
  const [unReadMsg, setUnReadMsg] = useState(0);
  const [micro, setMicro] = useState(false);
  const [camera, setCamera] = useState(false);

  const hostVideoRef = useRef();
  const guestVideoRef = useRef();
  const guestAudioRef = useRef();

  const sock = new window.SockJS(SOCKET_URL);
  const stompClient = window.Stomp.over(sock);

  const connect = () => {
    stompClient.connect({}, () => {
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
        setListPartcipant(prevList => [...prevList, {name: content.name, id: content.id, peerId: content.peerId}]);
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

  const [peerId, setPeerId] = useState();
  const [peer] = useState(() =>
    new Peer({
      config: {
        iceServers: [
          { urls: [ "stun:hk-turn1.xirsys.com" ] },
          { 
            username: "ClmL5p96khHczNgr_ywdWfq_VlIuyMIqleZCjYznVGg0EXUj16fcSXf1Ek9hoM_0AAAAAGGjGJxob2FuZzMxMDU=", 
            credential: "122b3e5a-500f-11ec-99d8-0242ac120004", 
            urls: [ 
              "turn:hk-turn1.xirsys.com:80?transport=udp", 
              "turn:hk-turn1.xirsys.com:3478?transport=udp", 
              "turn:hk-turn1.xirsys.com:80?transport=tcp", 
              "turn:hk-turn1.xirsys.com:3478?transport=tcp", 
              "turns:hk-turn1.xirsys.com:443?transport=tcp", 
              "turns:hk-turn1.xirsys.com:5349?transport=tcp"   
            ],
          },
        ],
      },
    })
  );
  
  useEffect(() => {
    // Peer connect
    peer?.on("open", (peerId) => {
      setPeerId(peerId);

      // send message join room to socket
      sendMessage('join', peerId);

      // Answer
      peer.on("call", (call) => {
        console.error(2);
        call.answer();
        call?.on("stream", remoteStream => {
          guestVideoRef.current.srcObject = remoteStream;
        })
      });
    });
  }, [peer]);

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
      listParticipant.forEach((participant) => {
        if(participant.id !== userId) {
          console.log(participant.peerId)
          const call = peer.call(participant.peerId, srcCamera);
          console.error(1);
        }
      });
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