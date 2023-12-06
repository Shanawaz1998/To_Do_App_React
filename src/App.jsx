import { useState } from "react";
import AppName from "./components/appName";
import AddToDo from "./components/AddToDo";
import ToDoItems from "./components/ToDoItems";
import "./App.css";
import ErrorMsg from "./components/ErrorMsg";
import { todoItemContext } from "./store/todoItems_store";

function App() {
  const [todoItems, setTodoItems] = useState([
    {
      name: "Buy Milk",
      date: "04/10/2023",
    },
    {
      name: "Complete React Course",
      date: "01/12/2023",
    },
  ]);

  const handleOnClick = (taskItem, taskDate) => {
    setTodoItems([
      ...todoItems,
      {
        name: taskItem,
        date: taskDate,
      },
    ]);
  };

  const deleteItem = (todoItemName) => {
    let newList = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newList);
  };

  return (
    <todoItemContext.Provider
      value={{
        todoItems,
        handleOnClick: handleOnClick,
        deleteItem: deleteItem,
      }}
    >
      <center className="todo-container">
        <AppName />
        <AddToDo />
        <ErrorMsg />
        <div className="item-container">
          <ToDoItems />
        </div>
      </center>
    </todoItemContext.Provider>
  );
}

export default App;
