import './App.css';
import { Alert } from './components/Alert';
import { ExpenseForm } from './components/ExpenseForm';
import { ExpenseList } from './components/ExpenseList';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
const initialExpenses = [
  { id: uuidv4(), charge: "rent", amount: 1600 },
  { id: uuidv4(), charge: "car payment", amount: 1200 },
  { id: uuidv4(), charge: "bills", amount: 600 }
]


function App() {
  const [expenses, setExpense] = useState(initialExpenses)


  return (
    <div>
      <Alert />
      <h1>Budget Calculator</h1>
      <main className='App'>
      <ExpenseForm />
      <ExpenseList />
      </main>
      
    </div>
  );
}

export default App;
