const MyChat = ({ data }) => {
  return (
    <div className='my-chat' title={data.time}>
      <div className='chat-box my-chat-box'>{data.content}</div>
    </div>
  );
}

export default MyChat;