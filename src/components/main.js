import { useState } from "react";
const Main = () => {
  const [input, setInput] = useState([""]);
  const [tasks, setTasks] = useState([""]);
  return (
    <>
      <section className="input-task">
        <input
          type="search"
          name="new-task"
          id="new-task"
          onChange={(event) => {
            setInput(event.target.value);
            console.log(input);
          }}
          value={input}
        />
        <button
          className="add-bt"
          onClick={(event) => {
            setInput(input);
            console.log(input);
            tasks.push(input);
            setTasks(tasks);
          }}
        >
          Add Task
        </button>
      </section>
      <section className="tasks-list"></section>
    </>
  );
};
export default Main;
