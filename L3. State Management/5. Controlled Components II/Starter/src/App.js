import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { ListItems } from "./ListItems";
import { AddItem } from "./AddItem";
import { DeleteItem } from "./DeleteItem";

const App = () => {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);



  const inputIsEmpty = () => value === "";

  const noItemsFound = () => items.length === 0;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <h2>Shopping List</h2>
      <AddItem inputIsEmpty={inputIsEmpty} items={items} value={value} setItems={setItems} setValue={setValue} />

      <DeleteItem noItemsFound={noItemsFound} setItems={setItems} items={items} />

      <p className="items">Items</p>
      <ListItems items={items} />
    </div>
  );
};

export default App;
