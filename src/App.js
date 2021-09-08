import React from "react";

function ToDoListElement({ element = "" }) {
  return <li>{element}</li>
}

function ToDoList({ elements = [] }) {
  return (
    <ul>
      {
        elements.map((element, i) => <ToDoListElement element={element} key={i} />)
      }
    </ul>
  )
}

function App() {
  const contents = ["Dishwash", "Groceries", "Feed the cat"]
  return (
    <ToDoList elements={contents} />
  );
}

export default App;
