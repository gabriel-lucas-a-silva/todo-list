import { Check, Trash } from "phosphor-react";
import { useState } from "react";

import styles from "./Task.module.css";

export interface Task {
  id: string;
  description: string;
  done: boolean;
  onDeleteTask: (id: string) => void;
  onChangeTaskStatus: (task: Task) => void;
}

export function Task({ id, description, done, ...rest }: Task) {
  const [checkboxWasClicked, setCheckboxWasClicked] = useState(false);

  function handleCheckboxTapping() {
    setCheckboxWasClicked(!checkboxWasClicked);
    done = !checkboxWasClicked;

    handleChangeTaskStatus();
  }

  function handleDeleteTask() {
    rest.onDeleteTask(id);
  }

  function handleChangeTaskStatus() {
    const task: Task = {
      id,
      description,
      done,
      ...rest,
    };

    console.log(task);

    rest.onChangeTaskStatus(task);
  }

  return (
    <div className={styles.container}>
      <div className={styles.task}>
        <div>
          <div
            className={
              checkboxWasClicked ? styles.checkboxClicked : styles.checkbox
            }
            onClick={handleCheckboxTapping}
          >
            {checkboxWasClicked ? <Check size={16} /> : <></>}
          </div>
          <p
            className={
              checkboxWasClicked ? styles.pTaskCompleted : styles.taskName
            }
          >
            {description}
          </p>
        </div>

        <button onClick={handleDeleteTask}>
          <Trash size={22} />
        </button>
      </div>
    </div>
  );
}
