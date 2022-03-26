import { useEffect, useState } from 'react';
import Peer from 'peerjs';
// import { request } from '../../../education/programmingcontestFE/Request';
import Chat from './chat';
import Participant from './participant';
import FooterControl from './footerControl';
import Main from './main';
import './room.css';

// const SOCKET_URL = 'http://localhost:8080/api/chatSocketHandler';

const Room = () => {
    // const location = window.location.pathname.split('/');
    // const roomId = location[location.length - 1];
    const [displayBar, setDisplayBar] = useState('chat');
    // eslint-disable-next-line
    const [listMsg, setListMsg] = useState([]);
    const [listParticipant, setListPartcipant] = useState([]);
    // eslint-disable-next-line
    const [unReadMsg, setUnReadMsg] = useState(0);
    const [micro, setMicro] = useState(false);
    const [camera, setCamera] = useState(false);
    // eslint-disable-next-line
    const [name, setName] = useState();
    // eslint-disable-next-line
    const [peerId, setPeerId] = useState();
    const [mediaStream, setMediaStream] = useState();
    // const [message, setMessage] = useState();

    // get userLoginId, list of participants in this room 
    useEffect(() => {
        // request('get', '/room/name', res => {
        //     setName(res.data);
        // }, err => {
        //     console.log(err);
        // });
        // request('get', '/roomParticipant/getParticipants?roomId=' + roomId, res => {
        //     setListPartcipant(res.data.map(participant => ({ name: participant.participantId, id: participant.participantId, peerId: participant.peerId })));
        // }, err => {
        //     console.log(err)
        // })
        setName('hoang');
        setListPartcipant([
            { name: 'hoang', id: 2, peerId: 2, mediaStream: 3 },
            { name: 'hoang', id: 1, peerId: 2, mediaStream: 3 },
            { name: 'hoang', id: 3, peerId: 2, mediaStream: 3 },
            { name: 'hoang', id: 4, peerId: 2, mediaStream: 3 },
            { name: 'hoang', id: 5, peerId: 2, mediaStream: 3 },
        ])
    }, []);

    // if user open camera, mic or share screen, call to every participant in this room
    useEffect(() => {
        if (mediaStream) {
            listParticipant.forEach(participant => {
                if (participant.peerId !== peerId) {
                    peer.call(participant.peerId, mediaStream);
                }
            });
        }
    // eslint-disable-next-line
    }, [mediaStream]);


    // const sock = new window.SockJS(SOCKET_URL);
    // const stompClient = window.Stomp.over(sock);

    // const connect = () => {
    //     stompClient.connect({
    //         'X-Auth-Token': localStorage.getItem('TOKEN'),
    //     }, () => {
    //         stompClient.subscribe('/topic/chat/' + roomId, (message) => handleMessage(JSON.parse(message.body)));
    //     });
    // }

    // useEffect(() => {
    //     connect();
    // }, []);



    // sock.onclose = () => {
    //     stompClient.send("/app/chat/" + roomId, {}, JSON.stringify({ name, type: 'leave' }));
    // }

    // handle messages received from socket
    // const handleMessage = (message) => {
    //     setMessage(message);
    //     setListMsg(prevList => [...prevList, message]);
    // }

    // useEffect(() => {
    //     if (message) {
    //         if (message.id === '0' && message.name === 'adminMeet') {
    //             const content = JSON.parse(message.content);
    //             // if join, add this participant to list of participants
    //             if (content.type === 'join') {
    //                 setListPartcipant(prevList => [...prevList, { name: content.name, id: content.id, peerId: content.peerId }]);
    //                 if (mediaStream) {
    //                     peer.call(content.peerId, mediaStream);
    //                 }
    //             }

    //             // if leave, delete this participant from list of participants
    //             if (content.type === 'leave') {
    //                 const place = listParticipant.findIndex(participant => participant.id === content.id);
    //                 setListPartcipant(prevList => [
    //                     ...prevList.slice(0, place),
    //                     ...prevList.slice(place + 1),
    //                 ]);
    //             }
    //         }
    //     }
    // }, [mediaStream, message]);

    const [peer] = useState(() =>
        new Peer({
            config: {
                iceServers: [
                    { urls: ["stun:hk-turn1.xirsys.com"] },
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

    // useEffect(() => {
    //     if (name) {
    //         // Peer connect
    //         peer?.on("open", (peerId) => {

    //             setPeerId(peerId);

    //             // send message join room to socket
    //             sendMessage('join', peerId);

    //             // Answer
    //             peer.on("call", (call) => {
    //                 call.answer();
    //                 call?.on("stream", remoteStream => {
    //                     guestVideoRef.current.srcObject = remoteStream;
    //                 });
    //             });
    //         });
    //     }
    // }, [peer, name]);

    const sendMessage = (type, content) => {
        // stompClient.send(
        //     '/app/chat/' + roomId, {
        //     'X-Auth-Token': localStorage.getItem('TOKEN'),
        // }, JSON.stringify({ id: '111', name, type, content })
        // );
    }

    return (
        <div className='room'>
            <Main
                display={displayBar}
                mediaStream={mediaStream}
                listParticipant={listParticipant}
                typeDisplay='all'
            />
            <Chat
                display={displayBar}
                setDisplay={setDisplayBar}
                listMsg={listMsg}
                sendMessage={sendMessage}
            />
            <Participant display={displayBar} setDisplay={setDisplayBar} listParticipant={listParticipant} />
            <FooterControl
                displayBar={displayBar}
                setDisplayBar={setDisplayBar}
                unReadMsg={unReadMsg}
                // stompClient={stompClient}
                sendMessage={sendMessage}
                camera={camera}
                micro={micro}
                setCamera={setCamera}
                setMicro={setMicro}
                mediaStream={mediaStream}
                setMediaStream={setMediaStream}
            />
        </div>
    );
}

export default Room;