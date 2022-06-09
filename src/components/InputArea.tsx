import { PlusCircle } from "phosphor-react";
import { ChangeEvent, useState } from "react";

import styles from "./InputArea.module.css";

export function InputArea() {
  const [tasks, setTasks] = useState([""]);
  const [newTask, setNewTask] = useState("");

  console.log(tasks);

  function handleCreateNewTask() {
    console.log("creating");
    setTasks([...tasks, newTask]);
    setNewTask("");
    console.log(tasks);
  }

  function handleTappingNewTaskName(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  return (
    <form onSubmit={handleCreateNewTask} className={styles.form}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        required
        onChange={handleTappingNewTaskName}
      />
      <button type="submit">
        Criar
        <PlusCircle size={18} />
      </button>
    </form>
  );
}
