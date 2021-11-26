const Main = (props) => {
  return (
    <div className={`main-room trainsition${props.display ? ' mini-main' : ' full-main'}`}></div>
  );
}

export default Main;