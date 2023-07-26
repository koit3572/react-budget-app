import styles from "../scss/ExpenseItem.module.scss";
import { MdDelete, MdEdit } from "react-icons/md";
export default function ExpenseItem({expense,handleDelete,handleEdit}) {
  return (
    <li className={styles.item}>
      <div className={styles.info}>
        <span className={styles.expense}>{expense.charge}</span>
        <span className={styles.amount}>{expense.amount}</span>
      </div>
      <div>
        <button
          className={styles.editBtn}
          onClick={()=>handleEdit(expense.id)}
        >
          <MdEdit />
        </button>
        <button
          className={styles.clearBtn}
          onClick={() => {
            handleDelete(expense.id);
          }}
        >
          <MdDelete />
        </button>
      </div>
    </li>
  );
};