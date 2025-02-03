"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CoffeeProduct } from "@/app/types";

export default function NewOrderPage() {
  const [selectedProducts, setSelectedProducts] = useState<CoffeeProduct[]>([]);

  const products = [
    {
      id: "1",
      name: "Ethiopian Yirgacheffe",
      type: "beans",
      price: 24.99,
      quantity: 50,
    },
    {
      id: "2",
      name: "Colombian Supremo",
      type: "grounds",
      price: 19.99,
      quantity: 30,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Create New Order</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 space-y-4">
          <h2 className="text-xl font-semibold">Order Details</h2>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Supplier</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select supplier" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sup1">Coffee Beans Co.</SelectItem>
                  <SelectItem value="sup2">Global Coffee Supplies</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium">Product</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select product" />
                </SelectTrigger>
                <SelectContent>
                  {products.map((product) => (
                    <SelectItem key={product.id} value={product.id}>
                      {product.name} - ${product.price}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium">Quantity</label>
              <Input type="number" min="1" placeholder="Enter quantity" />
            </div>

            <Button className="w-full">Add to Order</Button>
          </div>
        </Card>

        <Card className="p-6 space-y-4">
          <h2 className="text-xl font-semibold">Order Summary</h2>
          <div className="space-y-4">
            {selectedProducts.length === 0 ? (
              <p className="text-muted-foreground">No products added yet</p>
            ) : (
              <div className="space-y-2">
                {/* Product list would go here */}
              </div>
            )}
            <div className="border-t pt-4">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>$0.00</span>
              </div>
            </div>
            <Button className="w-full" disabled={selectedProducts.length === 0}>
              Place Order
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
