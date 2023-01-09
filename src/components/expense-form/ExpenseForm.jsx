import React, { useState } from "react";
import Button from "../../UI/button/Button";
import FormInput from "../../UI/formInput/FormInput";
import "./ExpensesForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  // const [disabled, setDisabled] = useState(true);

  const saveHandler = (e) => {
    e.preventDefault();
    if (
      title.trim().length === 0 &&
      String(price).trim().length === 0 &&
      date.trim().length === 0
    ) {
      return;
    }

    const expenseDate = {
      title,
      date,
      price,
      id: Math.random(),
    };
    props.onNewExpensesAdd(expenseDate);
  };

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const priseChangeHandler = (e) => {
    setPrice(e.target.value);
  };
  const dateHandler = (e) => {
    setDate(e.target.value);
  };
  return (
    <form className="expensesForm">
      <FormInput
        id="name"
        labelName="Название"
        inputType="text"
        placeholder="Введите название"
        value={title}
        onChange={titleChangeHandler}
      />

      <p className="number">
        <FormInput
          labelName="Количество денег"
          styled="price"
          value={price}
          inputType="number"
          id="money"
          onChange={priseChangeHandler}
        />
      </p>
      <div className="date">
        <FormInput
          styled="datess"
          labelName="Date"
          inputType="date"
          placeholder="дд.мм.гггг"
          id="date"
          onChange={dateHandler}
        />
      </div>
      <Button title="Отмена" class="saved" />
      <Button
        title="Добавить"
        styled="saved"
        onClick={saveHandler}
        // disabled={!disabled}
      />
    </form>
  );
};

export default ExpenseForm;
