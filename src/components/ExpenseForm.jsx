import styles from "../scss/ExpenseForm.module.scss";
import { MdSend } from 'react-icons/md';
export default function ExpenseForm({handleCharge, handleAmount, handleSubmit, charge, amount, edit}) {
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.center}>
        <div className={styles.group}>
          <label htmlFor="charge">지출 항목</label>
          <input
            type="text"
            className={styles.control}
            id="charge"
            name="charge"
            placeholder="예) 렌트비"
            value={charge}
            onChange={handleCharge}
          />
        </div>
        <div className={styles.group}>
          <label htmlFor="amount">비용</label>
          <input
            type="number"
            className={styles.control}
            id="amount"
            name="amount"
            placeholder="예) 100"
            value={amount}
            onChange={handleAmount}
          />
        </div>
      </div>
      <button
        type="submit"
        className="btn"
      >
        {edit===true ? '수정' : '제출'}
        <MdSend className="btn-icon" />
      </button>
    </form>
  );
};