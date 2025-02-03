"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  DollarSign,
  TrendingUp,
  CreditCard as CreditCardIcon,
  AlertCircle,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function PaymentManagement() {
  const [payments] = useState([
    {
      id: "1",
      orderId: "ORD001",
      amount: 2499,
      status: "completed",
      date: new Date(),
      method: "credit_card",
    },
    // Add more sample payments
  ]);

  const totalBudget = 10000;
  const spentBudget = 6500;
  const budgetProgress = (spentBudget / totalBudget) * 100;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6 space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Monthly Spending</h3>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </div>
          <p className="text-3xl font-bold">${spentBudget.toLocaleString()}</p>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Budget</span>
              <span>${totalBudget.toLocaleString()}</span>
            </div>
            <Progress value={budgetProgress} />
          </div>
        </Card>

        <Card className="p-6 space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Outstanding Payments</h3>
            <AlertCircle className="h-4 w-4 text-destructive" />
          </div>
          <p className="text-3xl font-bold">$1,250</p>
          <p className="text-sm text-muted-foreground">3 payments pending</p>
        </Card>

        <Card className="p-6 space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Payment Success Rate</h3>
            <TrendingUp className="h-4 w-4 text-primary" />
          </div>
          <p className="text-3xl font-bold">98.5%</p>
          <p className="text-sm text-muted-foreground">Last 30 days</p>
        </Card>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Payment ID</TableHead>
              <TableHead className="text-center">Order ID</TableHead>
              <TableHead className="text-center">Amount</TableHead>
              <TableHead className="text-center">Method</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-center">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payments.map((payment) => (
              <TableRow className="text-center" key={payment.id}>
                <TableCell className="font-medium">#{payment.id}</TableCell>
                <TableCell>{payment.orderId}</TableCell>
                <TableCell>${payment.amount.toFixed(2)}</TableCell>
                <TableCell>
                  <div className="flex items-center justify-center gap-2">
                    <CreditCardIcon className="h-4 w-4" />
                    {payment.method === "credit_card"
                      ? "Credit Card"
                      : payment.method}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    className={
                      payment.status === "completed"
                        ? "bg-green-500 text-white"
                        : payment.status === "failed"
                        ? "bg-red-500 text-white"
                        : "bg-gray-500 text-white"
                    }
                  >
                    {payment.status}
                  </Badge>
                </TableCell>
                <TableCell>{payment.date.toLocaleDateString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
