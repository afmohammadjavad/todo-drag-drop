import React from "react";
import { useContext } from "react";
import TasksContext from "../context/tasksContext";

function DeleteAll() {
  const { items, setItems, refInput } = useContext(TasksContext);

  const handleClick = () => {
    setItems([]);
    refInput.current.focus();
  }

  return (
    <>
      {items.length !== 0 && (
        <button className="btn btn-danger" onClick={handleClick}>
          Delete All
        </button>
      )}
    </>
  );
}

export default DeleteAll;
