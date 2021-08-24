import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  const [isAddNewExpenseBtnClicked, setIsAddNewExpenseBtnClicked] = useState(
    false
  );
  const saveExpenseDateHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);
    AddNewExpenseHandler()
  };

  const AddNewExpenseHandler = () => {
    setIsAddNewExpenseBtnClicked((prevState => !prevState))
  };

  if (!isAddNewExpenseBtnClicked) {
    return (
      <div className="new-expense">
        <button type="button" onClick={AddNewExpenseHandler}>Add New Expense</button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDateHandler}  OnAddNewExpense={AddNewExpenseHandler}/>
    </div>
  );
};

export default NewExpense;
