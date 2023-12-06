import React from "react";
import ToDoItem from "./ToDoItem";
import AppName from "./appName";
import { useContext } from "react";
import { todoItemContext } from "../store/todoItems_store";

export default function ToDoItems() {
  const todoItem = useContext(todoItemContext).todoItems;

  return (
    <>
      <div className="container">
        {todoItem.map((item) => (
          <ToDoItem
            key={item.name}
            deleteItem={() => deleteItem(item.name)}
            itemName={item.name}
            itemDate={item.date}
          ></ToDoItem>
        ))}
      </div>
    </>
  );
}
