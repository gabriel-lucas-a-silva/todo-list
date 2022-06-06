import { Bluetooth, Check, Trash } from "phosphor-react";
import { useState } from "react";
import styles from "./Task.module.css";

export function Task() {
  const [checkboxWasClicked, setCheckboxWasClicked] = useState(false);

  function handleCheckboxTapping() {
    setCheckboxWasClicked(!checkboxWasClicked);
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
            Integer urna interdum massa libero auctor neque turpis turpis
            semper. Duis vel sed fames integer. Integer urna interdum massa
            {/* libero auctor neque turpis turpis semper. Duis vel sed fames
            integer. */}
          </p>
        </div>

        <button>
          <Trash size={22} />
        </button>
      </div>
    </div>
  );
}
