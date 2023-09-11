import React from "react";
import Card from "../Components/Card";
import SidePar from "../Components/SidePar";
import AddBudget from "../Components/contexts/AddBudget";
import {
  useBudgets,
  UNCATEGORIZED_BUDGET_ID,
} from "../Components/contexts/BudgetCont";
import AddExpense from "../Components/contexts/AddExpense";
import UncategorizedBudgetCard from "../Components/UncategorizedBudgetCard";
import ViewExpense from "../Components/contexts/ViewExpense";
import TotalCard from "../Components/TotalCard";
export default function InfoPage2() {
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
          <div className="h-[60rem] flex justify-center items-center bg-[url('https://cdn.discordapp.com/attachments/1145734750921838642/1150502190297907361/Group_86.png')] bg-white bg-cover">
      <div className="h-[55rem] w-[90rem] bg-[#d9d9d9] bg-opacity-30 rounded-3xl ">        <div className=" grid grid-cols-5  h-screen">
          <div className="  h-screen ">
            <SidePar />
          </div>
          <div className=" h-screen col-start-2 col-end-6 ml-4">
            <div className="flex">
              <h1 className="me-auto text-5xl my-10 ml-10">Budget</h1>
            </div>

            <div className="flex flex-col justify-evenly w-[70rem]   ">
            <div className="flex flex-col ">
            <TotalCard />
            <div className="flex justify-center ">
              <button
                className=" bg-[#3E68AE] hover:scale-90 hover:bg-[#7399db] lg:w-40 lg:h-10 lg:rounded-3xl lg:text-lg font-light text-white m-10"
                onClick={() => {
                  setBtn(true);
                }}
              >
                Add Budget
              </button>
            </div>
            <div className="ml-4 h-[25rem] w-[67rem] bg-white bg-opacity-80 rounded-3xl flex flex-col overflow-auto">
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

                  <div className="ml-4 w-[18rem] grid-cols-3">
                 
                  <Card
                    key={budget.id}
                    bg=""
                    name={budget.name}
                    money={money}
                    max_money={budget.max}
                    AddExOnCard={() => openAddExpenseModal(budget.id)}
                    ViewExpense={() => setViewExpensesModalBudgetId(budget.id)}
                    hideBtn=""
                  /> </div>
                );
              })}</div>
              <UncategorizedBudgetCard
                AddExOnCard={openAddExpenseModal}
                ViewExpense={() =>
                  setViewExpensesModalBudgetId(UncategorizedId)
                }
              />
            </div>

            </div>


          </div>
          </div>
        </div>
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
