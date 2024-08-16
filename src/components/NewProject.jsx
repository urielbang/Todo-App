import React, { useRef } from "react";
import Input from "./Input";

export default function NewProject({ save }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    save({
      description: enteredDescription,
      title: enteredTitle,
      dueDate: enteredDueDate,
    });
  };
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <button className="text-stone-800 hover:text-stone-950">Cancel</button>
        <button
          onClick={handleSave}
          className="bg-stone-800 text-stone-50 px-6 py-2 hover:text-stone-950 rounded-md"
        >
          Save
        </button>
      </menu>
      <div>
        <Input type="text" ref={title} label="Title" />
        <Input ref={description} label="Description" isTextarea />
        <Input type="date" ref={dueDate} label="Due Date" />
      </div>
    </div>
  );
}
