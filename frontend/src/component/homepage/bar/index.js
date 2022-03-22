import CardBar from "./ItemCard";

const ListCardBar = (props) => {
  return (
    <div className='homepage-bar'>
      {props.categories.map((category, index) => <CardBar key={index} name={category.name} onClick={() => category.innerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })} />)}
    </div>
  );
}

export default ListCardBar;