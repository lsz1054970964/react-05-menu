import React from "react";

const MenuDish = ({ title, category, price, img, desc }) => {
  return (
    <article className="menu-item">
      <img className="photo" src={img} alt={title} />
      <div className="item-info">
        <header>
          <h4>{title}</h4>
          <span className="price">${price}</span>
        </header>
        <p className="item-text">{desc}</p>
      </div>
    </article>
  );
};

export default MenuDish;
