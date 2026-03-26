import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  function addExpense() {
    if (!title || !amount) return; // prevent empty input

    const newExpense = {
      title: title,
      amount: amount,
    };

    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);

    setTitle("");
    setAmount("");
  }

  function deleteExpense(indexToDelete) {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((_, index) => index !== indexToDelete)
    );
  }

  const total = expenses.reduce((acc, item) => {
    return acc + Number(item.amount);
  }, 0);

  return (
    <div className="app">

      {/* HEADER (TOP - CLEAN) */}
      <h1>Expense Tracker</h1>

      {/* INPUT BOX */}
      <div className="input-box">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />

        <button onClick={addExpense}>Add</button>
      </div>

      {/* EXPENSE BOX */}
      <div className="container">
        <h2>Expenses</h2>

        <div className="list">
          <ul>
            {expenses.length === 0 ? (
              <p>No expenses yet</p>
            ) : (
              expenses.map((item, index) => (
                <li key={index}>
                  {item.title} - ₹{item.amount}
                  <button onClick={() => deleteExpense(index)}>del</button>
                </li>
              ))
            )}
          </ul>
        </div>

        <h2>Total: ₹{total}</h2>
      </div>
    </div>
  );
}

export default App;