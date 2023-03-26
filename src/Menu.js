import React from "react";
import MenuDish from "./MenuDish";

const Menu = ({ dishes }) => {
  return (
    <div className="section-center">
      {dishes.map((dish) => {
        return <MenuDish key={dish.id} {...dish} />;
      })}
    </div>
  );
};

export default Menu;
