import React from "react";
import { v4 as uuidv4 } from "uuid";
import UseLocalSrorage from "./UseLocalSrorage";
const BudgetCont = React.createContext({});
export function useBudgets() {
  return React.useContext(BudgetCont);
}
interface Budget {
  id: string;
  name: string;
  max: number;
}

interface Expense {
  id: string;
  description: string;
  amount: number;
  budgetId: string;
}
export const UNCATEGORIZED_BUDGET_ID = "Uncategorized";

// {
//     id:
//     name:
//     max:
// }
// {
//     id:
//     budgetId:
//     amount:
//     description:
// }

export const BudgetProv = ({ children }: { children: React.ReactNode }) => {
  const [budgets, setBudgets] = UseLocalSrorage("budgets", []);
  const [expenses, setExpenses] = UseLocalSrorage("expenses", []);
  function getBudgetExpenses(budgetId: any) {
    return expenses.filter(
      (expense: { budgetId: any }) => expense.budgetId === budgetId
    );
  }
  function addExpenses(description: any, amount: any, budgetId: any) {
    setExpenses((prevExpenses: any) => {
      return [...prevExpenses, { id: uuidv4(), description, amount, budgetId }];
    });
  }
  function addBudget(name: any, max: any) {
    setBudgets((prevBudgets: any[]) => {
      if (prevBudgets.find((budget: { name: any }) => budget.name === name)) {
        return prevBudgets;
      }
      return [...prevBudgets, { id: uuidv4(), name, max }];
    });
  }
  function deleteBudget(id: string) {
    setBudgets((prevBudgets: any[]) => {
      return prevBudgets.filter((budget: { id: string }) => budget.id !== id);
    });
  }
  function deleteExpense(id: string) {
    setBudgets((prevExpenses: any[]) => {
      return prevExpenses.filter(
        (expenses: { id: string }) => expenses.id !== id
      );
    });
  }

  return (
    <BudgetCont.Provider
      value={{
        budgets,
        expenses,
        getBudgetExpenses,
        addExpenses,
        addBudget,
        deleteBudget,
        deleteExpense,
      }}
    >
      {children}
    </BudgetCont.Provider>
  );
};
