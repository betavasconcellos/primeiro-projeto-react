import styles from './Task.module.scss';

import { Trash, Check } from 'phosphor-react';

export function Task(text) {
  return (
    <li className={styles.task}>
      <label>
        <input type="checkbox" />
        <span>
          <Check />
        </span>
      </label>
      <p>
        {text.content}
      </p>



      <button>
        <Trash />
      </button>
    </li>

  )
}