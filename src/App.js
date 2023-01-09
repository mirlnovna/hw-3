import "./App.css";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/new-expenses/NewExpense";
import { useState } from "react";

// const expenses = [
//   {
//     title: "Toilet paper",
//     price: "300сом",
//     date: new Date(),
//   },

//   {
//     title: "Food",
//     price: "400сом",
//     date: new Date(),
//   },
// ];
function App() {
  const [expenses, setExpenses] = useState([]);
  const addNewHandler = (data) => {
    const upExpenses = [...expenses];
    upExpenses.push(data);
    setExpenses(upExpenses);
  };

  const removeHandler = (id) => {
    setExpenses((previtem) => previtem.filter((item) => item.id !== id));
  };
  return (
    <div className="App">
      <NewExpense onNewExpensesAdd={addNewHandler} />
      <Expenses expenses={expenses} removeHandler={removeHandler} />
    </div>
  );
}

export default App;
