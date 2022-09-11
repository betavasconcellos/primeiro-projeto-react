import './assets/global.scss';
import styles from './App.module.scss'

import { Header } from './assets/components/Header';
import { Plus, Trash, Check } from 'phosphor-react'

function App() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <form className={styles.addTaskForm}>
          <input type="text" placeholder="Insira uma nova atividade" />
          <button><Plus /></button>
        </form>

        <h3 className={styles.status}>Tarefas Concluídas <span>3 de 6</span></h3>

        <ul className={styles.taskList}>
          <li>
            <label>
              <input type="checkbox" />
              <span>
                <Check />
              </span>
            </label>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aspernatur. Eaque debitis quo tempore deserunt natus dolorum eligendi, nam recusandae soluta veritatis aut illum, sit doloribus sunt temporibus, dolor repellat.</p>

            <button>
              <Trash />
            </button>
          </li>
        </ul>
      </main>


    </>
  )
}

export default App
