const OthersChat = ({ data }) => {
  return (
    <div className='other-chat' title={data.time}>
      <div className='chat-title'>{data.name}</div>
      <div className='chat-box others-chat-box'>{data.content}</div>
    </div>
  );
}

export default OthersChat;