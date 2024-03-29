import { ChangeEvent, FormEvent, useState } from "react";
import { PlusCircle } from "phosphor-react";

import { v4 as uuid } from "uuid";

import { Task } from "./Task";

import styles from "./TaskBox.module.css";

import clipboard from "../assets/clipboard.svg";

export function TaskBox() {
  const [createdTasksCount, setCreatedTasksCount] = useState(0);
  const [completedTasksCount, setCompletedTasksCount] = useState(0);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskDescription, setTaskDescription] = useState("");

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

    if (taskDescription === "") return;

    const task = {
      id: uuid(),
      description: taskDescription,
      done: false,
      onDeleteTask(id: string) {},
      onChangeTaskStatus(task: Task) {},
    };

    setTasks([...tasks, task]);
    setTaskDescription("");

    updateCreatedTasksCount(false);
  }

  function handleTappingNewTaskName(event: ChangeEvent<HTMLInputElement>) {
    setTaskDescription(event.target.value);
  }

  function handleDeleteTask(id: string) {
    let updatedTasksAfterDeleting = [];
    let task: Task = {
      id: "",
      description: "",
      done: false,
      onChangeTaskStatus(task: Task) {},
      onDeleteTask(id: string) {},
    };

    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id === id) {
        task = tasks[i];
      } else {
        updatedTasksAfterDeleting.push(tasks[i]);
      }
    }

    if (task.done) {
      setCompletedTasksCount((state) => {
        return state - 1;
      });
    }

    setTasks(updatedTasksAfterDeleting);
    updateCreatedTasksCount(true);
  }

  function handleChangeStatus(task: Task) {
    const tasksWithUpdatedStatus = tasks.map((elem) => {
      if (elem.id === task.id) {
        elem.done = task.done;
      }

      return elem;
    });

    setTasks(tasksWithUpdatedStatus);

    if (task.done) {
      setCompletedTasksCount((state) => {
        return state + 1;
      });
    } else {
      setCompletedTasksCount((state) => {
        return state - 1;
      });
    }
  }

  return (
    <div className={styles.taskBox}>
      <form
        className={styles.form}
        onSubmit={handleCreateNewTask}
        autoComplete="off"
      >
        <input
          id="createInput"
          type="text"
          placeholder="Adicione uma nova tarefa"
          onChange={handleTappingNewTaskName}
          value={taskDescription}
          required
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
            <p className={styles.ptaskCount}>
              {completedTasksCount === 0
                ? 0
                : completedTasksCount + " de " + tasks.length}
            </p>
          </div>
        </header>

        {tasks.length > 0 ? (
          <div>
            {tasks.map((task) => {
              return (
                <Task
                  key={task.id}
                  id={task.id}
                  description={task.description}
                  done={task.done}
                  onDeleteTask={handleDeleteTask}
                  onChangeTaskStatus={handleChangeStatus}
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
