import { useRef } from "react";
import { useBudgets, UNCATEGORIZED_BUDGET_ID } from "./BudgetCont";
export default function AddExpense({
  show,
  handleClose,
  defaultBudgetId,
}: any) {
  const descriptionRef = useRef<HTMLInputElement | null>(null);
  const moneyRef = useRef<HTMLInputElement | null>(null);
  const budgetIdRef = useRef<HTMLSelectElement | null>(null);
  const { addExpenses, budgets }: any = useBudgets();
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (descriptionRef.current && moneyRef.current && budgetIdRef.current) {
      const description = descriptionRef.current.value;
      const money = parseFloat(moneyRef.current.value);
      const budgetId = budgetIdRef.current.value;

      addExpenses(description, money, budgetId);

      // Clear the input fields
      descriptionRef.current.value = "";
      moneyRef.current.value = "";
      budgetIdRef.current.value = "";
    }
    handleClose();
  }
  return (
    <>
      {show && (
        <div
          id="defaultModal"
          aria-hidden="true"
          className="flex justify-center fixed bg-black/25 top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen max-h-full"
        >
          <div className=" relative w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-slate-300">
              <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  New Expense
                </h3>
                <button
                  onClick={handleClose}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="defaultModal"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <form
                className="flex flex-col justify-center items-center"
                onSubmit={handleSubmit}
              >
                <div className="p-6 " id="discription">
                  <label>Discription: </label>
                  <br />
                  <input
                    ref={descriptionRef}
                    type="text"
                    placeholder="Discription"
                    required
                  />
                </div>
                <div className="p-6 " id="money">
                  <label>money: </label>
                  <br />
                  <input
                    ref={moneyRef}
                    type="number"
                    placeholder="money"
                    min={0}
                    step={1}
                    required
                  />
                </div>

                <div className="p-6 hidden" id="budgetId">
                  <label>Budget: </label>
                  <br />
                  <select ref={budgetIdRef} defaultValue={defaultBudgetId}>
                    {budgets.map((budget: any) => (
                      <option key={budget.id} value={budget.id}>
                        {budget.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button
                    data-modal-hide="defaultModal"
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
