import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

import "./Expenses.css";

function Expenses({ items }) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const [filteredItems, setFilteredItems] = useState(items);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    filterItems(items, filteredYear);
    console.log(filteredItems);
  };

  const filterItems = (items, year) => {
    const filteredItems = items.filter(
      (item) => item.date.getFullYear() === +year
    );
    setFilteredItems(() => [...filteredItems]);
  };

  return (
    <div className="expenses">
      <ExpensesFilter
        onChangeFilter={filterChangeHandler}
        selected={filteredYear}
      />
      <Card>
        {filteredItems.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
