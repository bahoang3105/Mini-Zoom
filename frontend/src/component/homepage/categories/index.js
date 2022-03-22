import { useRef } from "react";
import Category from "./Category";

const Categories = (props) => {
  return (
    <div>
      {props.categories.map((category, index) => <Category key={index} name={category.name} listDecks={category.listDecks} innerRef={category.innerRef} />)}
    </div>
  );
}

export default Categories;