import { ChangeEvent, FormEvent, useState } from "react";
import { PlusCircle } from "phosphor-react";
import { Task } from "./Task";

import styles from "./TaskBox.module.css";

import clipboard from "../assets/clipboard.svg";

export function TaskBox() {
  const [createdTasksCount, setCreatedTasksCount] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function updateCreatedTasksCount(taskIsBeingDeleted: boolean) {
    if (taskIsBeingDeleted) {
      setCreatedTasksCount((state) => {
        return state - 1;
      });

      return;
    }

    setCreatedTasksCount((state) => {
      return state + 1;
    });
  }

  function handleCreateNewTask(event: FormEvent) {
    event?.preventDefault();
    setTasks([...tasks, newTask]);
    setNewTask("");

    updateCreatedTasksCount(false);
  }

  function handleTappingNewTaskName(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleDeleteTask(task) {
    const updatedTasksAfterDeleting = tasks.filter((elem) => {
      return elem !== task;
    });

    setTasks(updatedTasksAfterDeleting);
    updateCreatedTasksCount(true);
  }

  return (
    <div className={styles.taskBox}>
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

      <main className={styles.container}>
        <header className={styles.header}>
          <div className={styles.pTask}>
            <p className={styles.pCreatedTasks}>Tarefas criadas</p>
            <p className={styles.ptaskCount}>{createdTasksCount}</p>
          </div>

          <div className={styles.pTask}>
            <p className={styles.pCompleted}>Concluídas</p>
            <p className={styles.ptaskCount}>0</p>
          </div>
        </header>

        {tasks.length > 0 ? (
          <div>
            {tasks.map((task) => {
              return (
                <Task
                  key={task}
                  description={task}
                  onDeleteTask={handleDeleteTask}
                />
              );
            })}
          </div>
        ) : (
          <div className={styles.noTasksRegistrated}>
            <img src={clipboard} alt="Ícone de prancheta" />
            <div className={styles.message}>
              <p>Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
