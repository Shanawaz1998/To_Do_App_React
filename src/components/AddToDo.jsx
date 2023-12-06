import React from "react";
import { useContext } from "react";
import { useRef } from "react";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { todoItemContext } from "../store/todoItems_store";

export default function AddToDo() {
  const todoTask = useRef();
  const todoDate = useRef();

  const { handleOnClick } = useContext(todoItemContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = todoTask.current.value;
    const date = todoDate.current.value;
    todoTask.current.value = "";
    todoDate.current.value = "";
    handleOnClick(name, date);
  };

  return (
    <div className="container">
      <form className="row todo-row" onSubmit={handleSubmit}>
        <div className="col-6">
          <input
            // onChange={(event) => setTaskItem(event.target.value)}
            // value={taskItem}
            ref={todoTask}
            type="text"
            placeholder="Enter your task"
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            // value={taskDate}
            ref={todoDate}
            // onChange={(event) => {
            //   setTaskDate(event.target.value);
            // }}
          />
        </div>
        <div className="col-2">
          <button
            // onClick={() => handleOnClick(taskItem, taskDate)}
            className="btn btn-success"
            type="submit"
          >
            <IoMdAdd />
          </button>
        </div>
      </form>
    </div>
  );
}
