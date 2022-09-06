import {
  CalendarBlank,
  CalendarCheck,
  Check,
  NotePencil,
  Trash,
} from "phosphor-react";
import { useState } from "react";
import styles from "./Task.module.scss";
import { format } from "date-fns";

const result = format(new Date(), "MM/dd/yyyy");

console.log(result);

const Task = ({ content }) => {
  //Hooks utilizados com objetivo de mudar o estado do item ao dar CHECKED na tarefa
  const [todoChecked, setTodoChecked] = useState("");
  const [endTask, setEndTask] = useState("");
  const [limitTask, setLimitTask] = useState("");

  //Evento criado com finalidade de acionar o click da checkbox, onde realiza uma verificação da condição, na qual finaliza ou não a tarefa.
  const handleClick = (e) => {
    if (e.target.checked) {
      setTodoChecked("checkedList");
      setEndTask(result);
      //Coloquei a data limite da tarefa como exemplo da funcionalidade ao checar tarefa. Para funcionar perfeitamente, será necessário criar um arquivo .json simulando uma API e realizar o fecth dela juntamente da useEffect
      setLimitTask(result);
    } else {
      setTodoChecked("");
      setEndTask("");
      setLimitTask("");
    }
  };

  return (
    <div>
      <li className={styles.task}>
        <label>
          <input type="checkbox" onClick={handleClick} value={todoChecked} />
          <span>
            <Check />
          </span>
        </label>
        {/* Classe evidanciando onde precisa ser realizada a alteração do estado refente a condição anterior */}
        <p className={todoChecked ? styles.checkedList : ""}>{content}</p>
        <button className={styles.notepen}>
          <NotePencil />
        </button>
        <button>
          <Trash />
        </button>
        <div className={styles.dateTime}>
          <CalendarCheck />
          <p>Finalizado em: {endTask}</p>
          <CalendarBlank />
          <p>até : {limitTask}</p>
        </div>
      </li>
    </div>
  );
};

export default Task;
