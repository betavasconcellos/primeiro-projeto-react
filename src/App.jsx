import "./styles/global.scss";
import Header from "./components/Header";
import styles from "./App.module.scss";

import { Plus } from "phosphor-react";
import Task from "./components/Task";

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Header />
      <main className={styles.container}>
        <form className={styles.addTaskForm} onSubmit={handleSubmit}>
          <input type="text" placeholder="Insira uma nova atividade" />
          <div>
            <input
              type="text"
              className={styles.inputTwo}
              placeholder="Insira a data limite da atividade"
            />
            <button>
              <Plus />
            </button>
          </div>
        </form>
        <h3 className={styles.status}>
          Tarefas concluídas <span>3 de 6</span>
        </h3>
        <ul className={styles.taskList}>
          <Task content="Limpar a casa" />
          <Task content="Fazer as unhas" />
          <Task
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi minus corporis labore alias dolor tempora quibusdam magnam? Temporibus, soluta iure"
            limiteDate=""
          />
        </ul>
      </main>
    </>
  );
}

export default App;
