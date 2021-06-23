import React, { useContext } from "react";
import TasksContext from "../context/tasksContext";
import withDraggable from "../hoc/withDraggable";

function ToDoCard({ item }) {
  const { items, setItems } = useContext(TasksContext);

  const handleDelete = (targetItem) => {
    const newItems = items.filter((item) => item.id !== targetItem.id);
    setItems(newItems);
  };

  const handleDone = (targetItem) => {
    const newItems = items.map((item) => {
      if (item.id === targetItem.id) {
        let doneDate = "";
        if (!item.done) doneDate = new Date().toLocaleString();
        return { ...item, done: !item.done, doneDate: doneDate };
      } else {
        return item;
      }
    });

    setItems(newItems);
  };

  return (
    <div
      className="card shadow-lg bg-transparent border rounded"
    >
      <div className="card-body">
        <h5
          className="card-title"
          style={item.done ? { textDecorationLine: "line-through" } : null}
        >
          {item.text}
        </h5>
        <p
          className="card-text"
          style={item.done ? { textDecorationLine: "line-through" } : null}
        >
          {item.explanation}
        </p>
        <p className="card-text">{`Creation date: ${item.creationDate}`}</p>
        <p>{item.done && (`Completion date: ${item.doneDate}`) || <br/>}</p>
        <div
          className="row mx-0"
          style={{
            justifyContent: "space-evenly",
          }}
        >
          <button
            className={`btn btn-sm ${
              item.done ? "btn-outline-warning" : "btn-outline-success"
            }`}
            onClick={() => handleDone(item)}
          >
            {item.done ? "Should Be Done" : "Done"}
          </button>
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => handleDelete(item)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default withDraggable(ToDoCard);
