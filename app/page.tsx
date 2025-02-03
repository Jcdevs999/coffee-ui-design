"use client";

import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Coffee, Package, CreditCard, BarChart3 } from "lucide-react";
import InventoryManagement from "@/components/inventory/InventoryManagement";
import OrderManagement from "@/components/order/OrderManagement";
import PaymentManagement from "@/components/payment/PaymentManagement";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("inventory");
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    const data = Array.from({ length: 7 }, (_, i) => ({
      date: new Date(
        Date.now() - (6 - i) * 24 * 60 * 60 * 1000
      ).toLocaleDateString(),
      sales: Math.floor(Math.random() * 1000) + 500,
      inventory: Math.floor(Math.random() * 200) + 100,
    }));
    setSalesData(data);
  }, []);

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-8 my-4">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold">Dashboard</h1>
          <Button variant="outline" className="gap-2">
            <BarChart3 className="h-4 w-4" />
            Generate Report
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-6 space-y-2">
            <h3 className="text-lg font-medium">Total Products</h3>
            <p className="text-3xl font-bold">24</p>
          </Card>
          <Card className="p-6 space-y-2">
            <h3 className="text-lg font-medium">Pending Orders</h3>
            <p className="text-3xl font-bold">8</p>
          </Card>
          <Card className="p-6 space-y-2">
            <h3 className="text-lg font-medium">Low Stock Items</h3>
            <p className="text-3xl font-bold text-destructive">3</p>
          </Card>
        </div>

        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">
            Sales & Inventory Overview
          </h2>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="sales"
                  stroke="hsl(var(--primary))"
                  name="Sales ($)"
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="inventory"
                  stroke="hsl(var(--destructive))"
                  name="Inventory Level"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-4"
        >
          <TabsList className="grid grid-cols-3 w-full max-w-2xl mx-auto">
            <TabsTrigger value="inventory" className="gap-2">
              <Coffee className="h-4 w-4" />
              Inventory
            </TabsTrigger>
            <TabsTrigger value="orders" className="gap-2">
              <Package className="h-4 w-4" />
              Orders
            </TabsTrigger>
            <TabsTrigger value="payments" className="gap-2">
              <CreditCard className="h-4 w-4" />
              Payments
            </TabsTrigger>
          </TabsList>

          <TabsContent value="inventory">
            <InventoryManagement />
          </TabsContent>
          <TabsContent value="orders">
            <OrderManagement />
          </TabsContent>
          <TabsContent value="payments">
            <PaymentManagement />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
