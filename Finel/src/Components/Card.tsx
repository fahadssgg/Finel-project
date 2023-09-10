import { Currency } from "./Intlinfo";
import CustomAlert from "./CustomAlert";
import { useEffect, useState } from "react";
interface budg {
  name: string;
  money: number;
  max_money: number;
  bg: string;
  AddExOnCard: any;
  ViewExpense: any;
  hideBtn: any;
}

export default function Card(prop: budg) {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    // Show a custom alert when money exceeds max_money
    if (prop.money > prop.max_money) {
      setShowAlert(true);
    } else {
      setShowAlert(false); // Close the alert when money is within the limit
    }
  }, [prop.money, prop.max_money, prop.name]);
  const classNames = [];
  if (prop.money > prop.max_money) {
    classNames.push("bg-red-600/60");
  }
  function progressPar(money: number, max_money: number) {
    const progress = money / max_money;
    if (progress < 0.5) return "bg-green-600 ";
    if (progress < 0.75) return "bg-yellow-400 ";
    return "bg-red-600";
  }
  return (
    <div className={`mt-4 border-4 px-2 py-1 ${classNames.join(" ")}`}>
      <div className="flex justify-between items-baseline ">
        <h1 className="me-2">{prop.name}</h1>
        <div className="flex items-baseline">
          {Currency.format(prop.money)}
          {prop.max_money && (
            <span className="text-black/50 text-xs ms-1">
              / {Currency.format(prop.max_money)}
            </span>
          )}
        </div>
      </div>

      {prop.max_money && (
        <div
          className={`w-full bg-gray-200 rounded-full h-2.5 mb-4 overflow-hidden`}
        >
          <div
            className={`h-2.5 rounded-full transition-all duration-300 ease-in-out ${progressPar(
              prop.money,
              prop.max_money
            )}`}
            style={{
              width: `${(prop.money / prop.max_money) * 100}%`,
            }}
          ></div>
        </div>
      )}
      {!prop.hideBtn && (
        <div className="my-3 flex justify-end">
          <button className="border-2 mr-1" onClick={prop.AddExOnCard}>
            Add Expense
          </button>
          <button className="border-2 mr-1" onClick={prop.ViewExpense}>
            View Expense
          </button>
        </div>
      )}
      {showAlert && (
        <div className="mt-2">
          <CustomAlert
            message={`${prop.name} budget has exceeded its limit!`}
          />
        </div>
      )}
    </div>
  );
}
