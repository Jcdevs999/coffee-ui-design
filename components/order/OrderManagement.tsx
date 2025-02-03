"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus, Filter } from "lucide-react";
import { Order } from "@/app/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function OrderManagement() {
  const [orders, setOrders] = useState<Order[]>([
    {
      id: "1",
      supplierId: "sup1",
      products: [{ productId: "1", quantity: 100, price: 24.99 }],
      status: "pending",
      orderDate: new Date(),
      totalAmount: 2499,
      paymentStatus: "pending",
    },
    // Add more sample orders
  ]);

  const [statusFilter, setStatusFilter] = useState<string>("all");

  const filteredOrders = orders.filter((order) =>
    statusFilter === "all" ? true : order.status === statusFilter
  );

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-48">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Orders</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="processing">Processing</SelectItem>
              <SelectItem value="shipped">Shipped</SelectItem>
              <SelectItem value="delivered">Delivered</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          New Order
        </Button>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Order ID</TableHead>
              <TableHead className="text-center">Date</TableHead>
              <TableHead className="text-center">Total Amount</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-center">Payment</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.map((order) => (
              <TableRow className="text-center" key={order.id}>
                <TableCell className="font-medium">#{order.id}</TableCell>
                <TableCell>{order.orderDate.toLocaleDateString()}</TableCell>
                <TableCell>${order.totalAmount.toFixed(2)}</TableCell>
                <TableCell>
                  <Badge
                    className={
                      order.status === "delivered"
                        ? "bg-green-500 text-white" // Green background for delivered orders
                        : order.status === "pending"
                        ? "bg-yellow-500 text-white" // Yellow background for pending orders
                        : "bg-blue-500 text-white" // Blue background for processing orders
                    }
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    className={
                      order.paymentStatus === "paid"
                        ? "bg-green-500 text-white"
                        : order.paymentStatus === "overdue"
                        ? "destructive"
                        : "secondary"
                    }
                  >
                    {order.paymentStatus}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
