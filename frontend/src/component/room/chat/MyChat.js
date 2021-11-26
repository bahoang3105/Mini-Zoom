const MyChat = ({ data }) => {
  return (
    <div>
      <div className='my-chat' title={data.time}>
        <div className='chat-box my-chat-box'>{data.content}</div>
      </div>
      <div className='my-chat' title={data.time}>
        <div className='chat-box my-chat-box-hidden'>{data.content}</div>
      </div>
    </div>
  );
}

export default MyChat;