import { useState } from 'react';

import './assets/global.scss';
import styles from './App.module.scss';

import { Header } from './assets/components/Header';
import { Task } from './assets/components/Task';
import { Plus } from 'phosphor-react';

export function App() {
  const [taskText, setTaskText] = useState('');
  const[tasks,setTasks] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    setTasks([...tasks, taskText]);
    setTaskText('');
  }

  function handleChangeInput(event){
    setTaskText(event.currentTarget.value);
  }


  return (
    <>
      <Header />
      <main className={styles.container}>
        <form className={styles.addTaskForm} onSubmit={handleSubmit}>
          <input type="text" placeholder="Insira uma nova atividade" value={taskText} onChange={handleChangeInput}/>
          <button><Plus /></button>
        </form>

        <h3 className={styles.status}>Tarefas Concluídas <span>3 de 6</span></h3>
        <ul className={styles.taskList}>
          {tasks.map(task => {
            return <Task content={task}/>
          })}
        </ul>
      </main>


    </>
  )
}
