import styles from "./TaskBox.module.css";

import clipboard from "../assets/clipboard.svg";

export function TaskBox() {
  return (
    <div className={styles.taskBox}>
      <header className={styles.header}>
        <div className={styles.pTask}>
          <p className={styles.pCreatedTasks}>Tarefas criadas</p>
          <p className={styles.ptaskCount}>0</p>
        </div>

        <div className={styles.pTask}>
          <p className={styles.pCompleted}>Concluídas</p>
          <p className={styles.ptaskCount}>0</p>
        </div>
      </header>

      <main className={styles.container}>
        <div className={styles.noTasksRegistrated}>
          <img src={clipboard} alt="Ícone de prancheta" />
          <div className={styles.message}>
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
      </main>
    </div>
  );
}
