import React from "react";
import { useContext } from "react";
import { todoItemContext } from "../store/todoItems_store";

export default function ErrorMsg() {
  const todoItems = useContext(todoItemContext).todoItems;
  console.log(todoItems.length, "todoItems");
  return (
    <>
      {" "}
      {todoItems.length === 0 && (
        <h3
          style={{
            fontWeight: 600,
            fontSize: 50,
            marginTop: 50,
            color: "green",
          }}
        >
          Enjoy Your Day
        </h3>
      )}
    </>
  );
}
