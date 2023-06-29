export interface ExpensesByCategory {
  saleries: number;
  supplies: number;
  services: number;
}
export interface Month {
  id: string;
  month: string;
  revenue: number;
  expenses: number;
  nonOperationalExpenses: number;
  operationalExpenses: number;
}
export interface Day {
  id: string;
  date: string;
  revenue: number;
  expenses: number;
}
export interface GetKpisResponse {
  id: string;
  _id: string;
  __V: number;
  totalProfit: number;
  totalRevenue: number;
  totalExpenses: number;
  expensesByCategory: ExpensesByCategory;
  monthlyData: Array<Month>;
  dailyData: Array<Day>;
  createdAt: string;
  updatedAt: string;
}

export interface GetProductsResponse {
  id: string;
  _id: string;
  __V: number;
  price: number;
  expense: number;
  transaction: Array<string>;
  createdAt: string;
  updatedAt: string;
}

export interface GetTransactionsResponse {
  id: string;
  _id: string;
  __V: number;
  buyer: number;
  amount: number;
  productIds: Array<string>;
  createdAt: string;
  updatedAt: string;
}
