import React from "react";
import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { todoItemContext } from "../store/todoItems_store";

export default function ToDoItem(props) {
  const deleteItem = useContext(todoItemContext).deleteItem;

  return (
    <div className="container">
      <div className="row todo-row">
        <div className="col-6">{props.itemName}</div>
        <div className="col-4">{props.itemDate}</div>
        <div style={{paddingLeft:'65px'}} className="col-2">
          <button
            onClick={() => deleteItem(props.itemName)}
            type="button"
            className="btn btn-danger"
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
