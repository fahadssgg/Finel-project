import { useBudgets } from "./contexts/BudgetCont";
import { Currency } from "./Intlinfo";

export default function TotalCard() {
  function progressPar(money: number, max_money: number) {
    const progress = money / max_money;
    if (progress < 0.5) return "bg-green-600 ";
    if (progress < 0.75) return "bg-yellow-400 ";
    return "bg-red-600";
  }

  ////////////////////////////////////////////////////////
  const { expenses, budgets }: any = useBudgets();
  const money = expenses.reduce(
    (total: number, expense: any) => total + expense.amount,
    0
  );
  const max = budgets.reduce(
    (total: number, budgets: any) => total + budgets.max,
    0
  );
  if (max == 0) return null;
  ////////////////////////////////////////////////
  const classNames = [];
  if (money > max) {
    classNames.push("bg-red-600/60");
  }
  return (
    <div
      className={`mt-4 mx-10 pb-10 border-4 px-2 py-1 ${classNames.join(" ")}`}
    >
      <div className="flex justify-between items-baseline ">
        <h1 className="me-2">Total</h1>
        <div className="flex items-baseline">
          {Currency.format(money)}
          {max && (
            <span className="text-black/50 text-xs ms-1">
              / {Currency.format(max)}
            </span>
          )}
        </div>
      </div>

      {max && (
        <div
          className={`w-full bg-gray-200 rounded-full h-2.5  overflow-hidden mt-5`}
        >
          <div
            className={`h-2.5 rounded-full transition-all duration-300 ease-in-out ${progressPar(
              money,
              max
            )}`}
            style={{
              width: `${(money / max) * 100}%`,
            }}
          ></div>
        </div>
      )}
    </div>
  );
}
