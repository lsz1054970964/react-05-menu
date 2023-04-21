import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import Title from "./Title";

const tempCategories = items.map((item) => item.category);
// Set() only allows unique values
const tempSet = new Set(tempCategories);
// used to store the four categories for buttons
const tempItem = ["all", ...tempSet];

// could also be achieved by
//const tempItem = ["all", ...new Set(items.map((item) => item.category;)),];

function App() {
  const [dishes, setDishes] = useState(items);
  const [categories, setCategories] = useState(tempItem);

  const select = (selectCategory) => {
    //console.log(selectCategory);
    if (selectCategory === "all") {
      setDishes(items);
      return;
    }
    const newItems = items.filter((item) => item.category === selectCategory);
    setDishes(newItems);
  };
  
  console.log(setCategory);

  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Categories categories={categories} select={select} />
        <Menu dishes={dishes} />
      </section>
    </main>
  );
}

export default App;
