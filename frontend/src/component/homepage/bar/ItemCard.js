const Bar = (props) => {
  return (
    <div className='card-bar' onClick={props.onClick}>
      {props.name}
    </div>
  );
}

export default Bar;