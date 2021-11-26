import AdminChat from "./AdminChat";
import MyChat from "./MyChat";
import OthersChat from "./OthersChat";

const Chat = (props) => {  
  const renderListMsg = () => {
    const userId = localStorage.getItem('userId');
    return props.listMsg.map((msg, index) => (msg.id === 0 && msg.name === 'admin') ? <AdminChat key={index} data={msg} /> 
      : (msg.id === userId ? <MyChat key={index} data={msg} /> : <OthersChat key={index} data={msg} />));
  }

  return (
    <div className={`room-bar transition${props.display ? ' display-bar' : ' hidden-bar'}`}>
      <div className="title-bar">
        Group Chat
      </div>
      <div className='content-bar chat-bar-content'>
        {renderListMsg()}
      </div>
    </div>
  );
}

export default Chat;