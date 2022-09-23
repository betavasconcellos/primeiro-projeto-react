import { useState } from 'react';

import './assets/global.scss';
import styles from './App.module.scss';

import { Header } from './assets/components/Header';
import { Task } from './assets/components/Task';
import { Plus } from 'phosphor-react';

function App() {
  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState([]);

  const [taskDate, setTaskDate] = useState('');
  const [dates, setDates] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

const newTask = {
  id: Date.now(),
  content: taskText,
  done: false,
}

    setTasks([...tasks, taskText]);
    setTaskText('');

    setDates([...dates, taskDate]);
    setTaskDate('');
  }

  function handleChangeInputText(text) {
    setTaskText(text.currentTarget.value);
  }

  function handleChangeInputDate(date) {
    setTaskDate(date.currentTarget.value);
  }


  return (
    <>
      <Header />
      <main className={styles.container}>
        <form className={styles.addTaskForm} onSubmit={handleSubmit}>
          <input type="text" placeholder="Insira uma nova atividade" value={taskText} onChange={handleChangeInputText} />
          <input type="date" className={styles.inputDate} placeholder="Insira a data limite" value={taskDate} onChange={handleChangeInputDate} />
          <button><Plus /></button>
        </form>

        <h3 className={styles.status}>Tarefas Concluídas <span>3 de 6</span></h3>
        <ul className={styles.taskList}>


        {tasks.map((task) => {
              return <Task content={task} />
          })}
            {dates.map((date) => {
              return <Task content={date} />
          })}
          
           
        </ul>
      </main>


    </>
  )
}

export default App;
