import { Bluetooth, Check, Trash } from "phosphor-react";
import { useState } from "react";

import styles from "./Task.module.css";

import { v4 as uuid } from "uuid";

export interface Task {
  description: string;
  onDeleteTask: () => void;
}

export function Task({ description, onDeleteTask }: Task) {
  const [checkboxWasClicked, setCheckboxWasClicked] = useState(false);

  function handleCheckboxTapping() {
    setCheckboxWasClicked(!checkboxWasClicked);
  }

  function handleDeleteTask() {
    onDeleteTask(description);
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
