import Card from "./Card";
import { useBudgets } from "./contexts/BudgetCont";

export default function TotalCard() {
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
  return (
    <Card
      name="Total"
      money={money}
      max_money={max}
      bg=""
      AddExOnCard=""
      ViewExpense=""
      hideBtn
    />
  );
}
