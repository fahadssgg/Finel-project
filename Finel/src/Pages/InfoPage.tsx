import React from "react";
import Card from "../Components/Card";
import AddBudget from "../Components/contexts/AddBudget";
import {
  useBudgets,
  UNCATEGORIZED_BUDGET_ID,
} from "../Components/contexts/BudgetCont";
import AddExpense from "../Components/contexts/AddExpense";
import UncategorizedBudgetCard from "../Components/UncategorizedBudgetCard";
import ViewExpense from "../Components/contexts/ViewExpense";
import TotalCard from "../Components/TotalCard";
export default function InfoPage() {
  const [Btn, setBtn] = React.useState(false);
  const [showAddExpenseModal, setShowAddExpenseModal] = React.useState(false);
  const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] =
    React.useState();
  const [viewExpensesModalBudgetId, setViewExpensesModalBudgetId] =
    React.useState();
  const { budgets, getBudgetExpenses }: any = useBudgets();
  const UncategorizedId: any = UNCATEGORIZED_BUDGET_ID;
  function openAddExpenseModal(budgetId: any) {
    setShowAddExpenseModal(true);
    setAddExpenseModalBudgetId(budgetId);
  }
  return (
    <>
      <div className="my-4">
        <div className="flex">
          <h1 className="me-auto text-2xl">Budgets</h1>
          <button
            className="border-2 mr-4"
            onClick={() => {
              setBtn(true);
            }}
          >
            Add Budget
          </button>
          <button className="border-2 mr-4" onClick={openAddExpenseModal}>
            Add Expense
          </button>
        </div>
        <TotalCard />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))",
            gap: "1rem",
            alignItems: "flex-start",
          }}
        >
          {budgets.map((budget: any) => {
            const money = getBudgetExpenses(budget.id).reduce(
              (total: number, expense: any) => total + expense.amount,
              0
            );
            return (
              <Card
                key={budget.id}
                bg=""
                name={budget.name}
                money={money}
                max_money={budget.max}
                AddExOnCard={() => openAddExpenseModal(budget.id)}
                ViewExpense={() => setViewExpensesModalBudgetId(budget.id)}
                hideBtn=""
              />
            );
          })}
          <UncategorizedBudgetCard
            AddExOnCard={openAddExpenseModal}
            ViewExpense={() => setViewExpensesModalBudgetId(UncategorizedId)}
          />
        </div>
      </div>

      <AddBudget show={Btn} handleClose={() => setBtn(false)} />
      <AddExpense
        show={showAddExpenseModal}
        defaultBudgetId={addExpenseModalBudgetId}
        handleClose={() => setShowAddExpenseModal(false)}
      />
      <ViewExpense
        budgetId={viewExpensesModalBudgetId}
        handleClose={() => setViewExpensesModalBudgetId(undefined)}
      />
    </>
  );
}
