import { useState } from "react";
import styles from "./scss/App.module.scss";
import ExpenseForm from "./components/ExpenseForm";
import ExpensList from "./components/ExpenseList";
import Alert from "./components/Alert";
export default function App() {
  const [alert, setAlert] = useState({ show: false });
  const [id, setId] = useState("");
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");
  const [edit, setEdit] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const handleCharge = (e) => {
    setCharge(e.target.value);
  };
  const handleAmount = (e) => {
    if (e.target.value === "") {
      setAmount("");
    } else {
      setAmount(e.target.valueAsNumber);
    }
  };
  const handleDelete = (id) => {
    const newExpenses = expenses.filter((expenses) => expenses.id !== id);
    setExpenses(newExpenses);
    handleAlert({ type: "danger", text: "아이템이 삭제되었습니다." });
  };

  const handleListAllDelete = () => {
    setExpenses([]);
    handleAlert({ type: "danger", text: "아이템이 모두 삭제되었습니다." });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //제출 클릭시 페이지 리플레시 되는것을 막음
    if (charge !== "" && amount > 0) {
      if (edit) {
        const newExpense = { id: id, charge, amount };
        const newExpenses = [
          ...expenses.filter((item) => item.id !== id),
          newExpense,
        ];
        setExpenses(newExpenses);
        handleAlert({
          type: "success",
          text: "아이템이 수정되었습니다.",
        });
      } else {
        const newExpense = { id: crypto.randomUUID(), charge, amount };
        const newExpenses = [...expenses, newExpense]; //불변성을 지켜주기 위한 조치
        setExpenses(newExpenses);
        handleAlert({
          type: "success",
          text: "아이템이 생성되었습니다.",
        });
      }
      setCharge("");
      setAmount("");
      setEdit(false);
    } else {
      handleAlert({
        type: "danger",
        text: "charge는 빈 값일 수 없으며 amount 값은 0보다 커야합니다.",
      });
    }
  };

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 7000);
  };

  const handleEdit = (id) => {
    const expense = expenses.find((item) => item.id === id);
    const { charge, amount } = expense;
    setId(id);
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
  };

  return (
    <main className={styles.container}>
      {alert.show ? <Alert type={alert.type} text={alert.text} /> : null}
      <h1>예산 계산기</h1>

      <div style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}>
        <ExpenseForm
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
          charge={charge}
          amount={amount}
          edit={edit}
        />
      </div>

      <div style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}>
        <ExpensList
          expenses={expenses}
          handleDelete={handleDelete}
          handleListAllDelete={handleListAllDelete}
          handleEdit={handleEdit}
        />
      </div>

      <div style={{ display: "flex", justifyContent: "end", margin: "1rem" }}>
        <p style={{ fontSize: "2rem" }}>
          총 지출 :
          <span>
            {expenses.reduce((accumulator, currentValue) => {
              return accumulator + currentValue.amount;
            }, 0)}
            원
          </span>
        </p>
      </div>
    </main>
  );
}
