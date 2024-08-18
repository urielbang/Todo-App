import React, { useRef, useState } from "react";
import Modal from "./Modal";

export default function NewTask({ onAddTask }) {
  const modal = useRef();
  const [enteredTask, setEnteredTask] = useState("");

  const handleChange = (e) => {
    setEnteredTask(e.target.value);
  };

  const handleClick = () => {
    if (enteredTask.trim() !== "") {
      onAddTask(enteredTask);
      setEnteredTask("");
    } else {
      modal.current.open();
    }
  };

  return (
    <div className="flex items-center gap-4">
      <Modal ref={modal} textButton="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid input</h2>
        <p className="text-stone-600 mb-4">
          oops looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <input
        onChange={handleChange}
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        type="text"
        value={enteredTask}
      />
      <button
        onClick={handleClick}
        className="text-stone-700 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
}
