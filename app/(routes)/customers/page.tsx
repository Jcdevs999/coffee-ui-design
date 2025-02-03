"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, UserPlus, Users as UsersIcon } from "lucide-react";

export default function CustomersPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const customers = [
    {
      id: "1",
      name: "Jinro Santos",
      email: "jinrocutie@example.com",
      phone: "+63 234 567 890",
      status: "active",
      orders: 12,
      totalSpent: 1250.0,
    },
    {
      id: "2",
      name: "Mickel Santiago",
      email: "hev.babi@example.com",
      phone: "+63 234 567 891",
      status: "inactive",
      orders: 8,
      totalSpent: 850.0,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center my-10">
        <h1 className="text-3xl font-bold">Customer Management</h1>
        <Button className="gap-2">
          <UserPlus className="h-4 w-4" />
          Add Customer
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6 space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Total Customers</h3>
            <UsersIcon className="h-4 w-4 text-muted-foreground" />
          </div>
          <p className="text-3xl font-bold">256</p>
        </Card>
        <Card className="p-6 space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Active Customers</h3>
            <UsersIcon className="h-4 w-4 text-muted-foreground" />
          </div>
          <p className="text-3xl font-bold">180</p>
        </Card>
        <Card className="p-6 space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">New This Month</h3>
            <UsersIcon className="h-4 w-4 text-muted-foreground" />
          </div>
          <p className="text-3xl font-bold">24</p>
        </Card>
      </div>

      <div className="flex justify-between items-center">
        <div className="relative w-72">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search customers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Name</TableHead>
              <TableHead className="text-center">Email</TableHead>
              <TableHead className="text-center">Phone</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-center">Orders</TableHead>
              <TableHead className="text-center">Total Spent</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customer) => (
              <TableRow className="text-center" key={customer.id}>
                <TableCell className="font-medium">{customer.name}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.phone}</TableCell>
                <TableCell>
                  <Badge
                    className={
                      customer.status === "active"
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                    }
                  >
                    {customer.status}
                  </Badge>
                </TableCell>
                <TableCell>{customer.orders}</TableCell>
                <TableCell>${customer.totalSpent.toFixed(2)}</TableCell>
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
