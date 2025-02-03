"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Truck, Package, MapPin } from "lucide-react";

export default function DeliveryPage() {
  const deliveries = [
    {
      id: "DEL001",
      orderId: "ORD123",
      status: "delivered",
      address: "123 Coffee St, Caloocan City",
      estimatedDelivery: "2024-03-20",
      driver: "John Delacruz",
    },
    // Add more deliveries as needed
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center my-10">
        <h1 className="text-3xl font-bold">Delivery</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6 space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Active Deliveries</h3>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </div>
          <p className="text-3xl font-bold">8</p>
        </Card>
        <Card className="p-6 space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Completed Today</h3>
            <Package className="h-4 w-4 text-muted-foreground" />
          </div>
          <p className="text-3xl font-bold">12</p>
        </Card>
        <Card className="p-6 space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Average Delivery Time</h3>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </div>
          <p className="text-3xl font-bold">45m</p>
        </Card>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Delivery ID</TableHead>
              <TableHead className="text-center">Order ID</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-center">Address</TableHead>
              <TableHead className="text-center">Est. Delivery</TableHead>
              <TableHead className="text-center">Driver</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {deliveries.map((delivery) => (
              <TableRow className="text-center" key={delivery.id}>
                <TableCell className="font-medium">{delivery.id}</TableCell>
                <TableCell>{delivery.orderId}</TableCell>
                <TableCell>
                  <Badge
                    className={
                      delivery.status === "delivered"
                        ? "bg-green-500 text-white" // Green background for delivered
                        : delivery.status === "in-transit"
                        ? "bg-yellow-500 text-white" // Yellow background for pending
                        : delivery.status === "failed"
                        ? "bg-red-500 text-white" // Red background for failed
                        : "bg-blue-500 text-white" // Blue background for processing
                    }
                  >
                    {delivery.status}
                  </Badge>
                </TableCell>
                <TableCell>{delivery.address}</TableCell>
                <TableCell>{delivery.estimatedDelivery}</TableCell>
                <TableCell>{delivery.driver}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    Track
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
