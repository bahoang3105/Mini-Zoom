const AdminChat = ({ data }) => {
  const userId = localStorage.getItem('userId');
  const { content } = data;
  console.log('hihi');
  return (
    <div className='admin-chat' title={data.time}>
      {content.id === userId ? 
        (content.type === 'join' ? `Welcome ${content.name} to the chat room` : '') :
        (content.type === 'join' ? `${content.name} has joined the room` : `${content.name} has left the room`)}
    </div>
  );
}

export default AdminChat;