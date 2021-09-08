import React from "react";
import ToDoList from "./components/ToDoList"

function App() {
  const contents = ["Dishwash", "Groceries", "Feed the cat"]
  return (
    <ToDoList elements={contents} />
  );
}

export default App;
