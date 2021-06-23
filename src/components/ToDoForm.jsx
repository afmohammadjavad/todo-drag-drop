import React, { useContext } from "react";
import TasksContext from "../context/tasksContext";

function ToDoForm() {
  const {
    text,
    setText,
    explanation,
    setExplanation,
    items,
    setItems,
    refInput,
  } = useContext(TasksContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length === 0 || explanation.length === 0) return;
    const newItem = {
      text: text || `topic #${items.length + 1}`,
      explanation: explanation || `explanation #${items.length + 1}`,
      done: false,
      id: `${Date.now()}`,
      creationDate: new Date().toLocaleString(),
      doneDate: "",
    };
    const allNewItems = [...items];
    allNewItems.push(newItem);
    setItems(allNewItems);
    setText("");
    setExplanation("");
    refInput.current.focus();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" border rounded p-3 shadow-lg"
    >
      <div className="form-group">
        <label htmlFor="FormControlInput1">Topic</label>
        <input
          type="text"
          className="form-control bg-transparent border rounded shadow"
          style={{opacity: '1', color: 'black'}}
          id="FormControlInput1"
          placeholder="what should be done?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoFocus
          ref={refInput}
        />
      </div>
      <div className="form-group">
        <label htmlFor="FormControlTextarea1">Explanation</label>
        <textarea
          className="form-control bg-transparent border rounded shadow"
          style={{opacity: '1', color: 'black'}}
          id="FormControlTextarea1"
          rows="2"
          placeholder="some explanation..."
          value={explanation}
          onChange={(e) => setExplanation(e.target.value)}
        />
      </div>
      <button type="submit" style={{opacity: '0.6'}} className="btn btn-light shadow">
        Add #{items.length + 1}
      </button>
    </form>
  );
}

export default ToDoForm;
