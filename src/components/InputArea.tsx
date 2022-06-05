import { PlusCircle } from "phosphor-react";

import styles from "./InputArea.module.css";

export function InputArea() {
  return (
    <form className={styles.form}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button>
        Criar
        <PlusCircle size={18} />
      </button>
    </form>
  );
}
