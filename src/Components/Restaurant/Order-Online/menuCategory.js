import React from "react";
import classnames from "classnames";

const MenuCategory = (props) => {
  return (
    <>
      <div
        className={classnames("text-gray-600",{"text-navcolor-400 font-semibold bg-navcolor-50 border-r-4 border-navcolor-400 py-0.5 px-1": props.isActive,})}
      >
        <h3 id={props.name} onClick={props.onClickHandler}>
          {props.name} ({props.items.length})
        </h3>
      </div>
    </>
  );
};

export default MenuCategory;

