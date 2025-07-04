import ExpenseDate from "../Expenses/ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import { useState } from "react";

const ExpenseItem = (props) => {
  return (
    <>
      <li>
        <Card className="expense-item">
          <ExpenseDate date={props.date} />
          <div className="expense-item__description">
            <h2> {props.title} </h2>
            <div className="expense-item__price">${props.amount}</div>
          </div>
        </Card>
      </li>
    </>
  );
};

export default ExpenseItem;
