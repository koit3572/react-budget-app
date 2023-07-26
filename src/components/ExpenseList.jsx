import styles from "../scss/ExpensList.module.scss";
import ExpenseItem from './ExpenseItem';
import { MdDelete } from 'react-icons/md';
export default function ExpenseList({handleDelete, handleListAllDelete, handleEdit, expenses }) {
  return (
    <>
      <ul className={styles.list}>
        {expenses.map((expense) => (
          <ExpenseItem
            expense={expense}
            key={expense.id}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </ul>
      {
        expenses.length > 0 && (
        <button className="btn" onClick={handleListAllDelete}>
          목록 지우기
          <MdDelete className="btn-icon" />
        </button>
      )}
    </>
  );
};