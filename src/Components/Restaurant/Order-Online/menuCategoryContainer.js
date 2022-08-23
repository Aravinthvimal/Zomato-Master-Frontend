import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

// components
import MenuCategory from "./menuCategory";

const MenuListContainer = (props) => {

    const [selected, setSelected] = useState("");
    const onClickHandler = (e) => {
        if(e.target.id) {
            console.log(e.target.id);
            setSelected(e.target.id);
        }
        return;
    };

  return (
    <>
    <script src="/path/to/noframework.waypoints.min.js"></script>
      <div className="foodList w-full flex flex-col gap-3">

        <Link spy={true} smooth={true} offset={-70} duration={500} to="TED">
          <MenuCategory
            name="Today's Exclusive Dishes"
            items={[""]}
            onClickHandler={onClickHandler}
            isActive={selected === "Today's Exclusive Dishes"}
          />
        </Link>

        <Link spy={true} smooth={true} offset={-70} duration={500} to="recommended" >
          <MenuCategory
            name="Recommended"
            items={["","","","","","","","","","","","","","","","","","","","","","","","",]}
            onClickHandler={onClickHandler}
            isActive={selected === "Recommended"}
          />
        </Link>

        <Link spy={true} smooth={true} offset={-70} duration={500} to="weekend-deals" >
        <MenuCategory
          name="Stay Home Specials"
          items={["","","","","",""]}
          onClickHandler={onClickHandler}
          isActive={selected === "Stay Home Specials"}
        />
        </Link>

        <Link spy={true} smooth={true} offset={-70} duration={500} to="BSC">
          <MenuCategory
            name="Big Save Combos"
            items={["","","","","","","","",""]}
            onClickHandler={onClickHandler}
            isActive={selected === "Big Save Combos"}
          />
        </Link>

        <MenuCategory
          name="Burgers"
          items={["","","","","","","","","","",""]}
          onClickHandler={onClickHandler}
          isActive={selected === "Burgers"}
        />
        <MenuCategory
          name="Rice Bowlz"
          items={["","","","","",""]}
          onClickHandler={onClickHandler}
          isActive={selected === "Rice Bowlz"}
        />
        <MenuCategory
          name="Snacks"
          items={["","","","","","","","","","","","","","","","","","",]}
          onClickHandler={onClickHandler}
          isActive={selected === "Snacks"}
        />

        <Link spy={true} smooth={true} offset={-70} duration={500} to="BSC">
          <MenuCategory
            name="Sides & Beverages"
            items={["","","","","","","","","","","",""]}
            onClickHandler={onClickHandler}
            isActive={selected === "Sides & Beverages"}
          />
        </Link>
      </div>
    </>
  );
};

export default MenuListContainer;