import React, { useState } from "react";
import TasksContext from "../context/tasksContext";
import ToDoForm from "./ToDoForm";
import ToDoItems from "./ToDoItems";
import DeleteAll from "./DeleteAll";

function ToDo() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");
  const [explanation, setExplanation] = useState("");

  const refInput = React.createRef();

  const value = {
    refInput,
    items,
    setItems,
    text,
    setText,
    explanation,
    setExplanation,
  };

  return (
    <TasksContext.Provider value={value}>
      <div className="row mx-0 mt-2 mb-4 d-block">
        <ToDoForm />
      </div>
      <div
        className="row mx-0 mb-1 d-block"
      >
        <ToDoItems />
      </div>
      <div
        className="row mx-0 mb-2 mt-5 justify-content-center"
      >
        <DeleteAll />
      </div>
    </TasksContext.Provider>
  );
}

export default ToDo;
