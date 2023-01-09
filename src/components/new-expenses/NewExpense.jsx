import React, { useState } from "react";
import Button from "../../UI/button/Button";
import ExpenseForm from "../expense-form/ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onNewExpensesAdd }) => {
  const [state, setState] = useState(false);

  const showButtonClickHadler = () => {
    setState(() => true);
  };
  return (
    <div className="container">
      {state ? (
        <ExpenseForm
          onShowForm={showButtonClickHadler}
          onNewExpensesAdd={onNewExpensesAdd}
        />
      ) : (
        <Button
          title="Добавить новый расход"
          styled="btns"
          onClick={showButtonClickHadler}
        />
      )}
    </div>
  );
};

export default NewExpense;
