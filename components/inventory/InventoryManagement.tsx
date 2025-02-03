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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus, Search, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CoffeeProduct } from "@/app/types";

export default function InventoryManagement() {
  const [products, setProducts] = useState<CoffeeProduct[]>([
    {
      id: "1",
      name: "Ethiopian Yirgacheffe",
      type: "beans",
      origin: "Ethiopia",
      roastLevel: "medium",
      quantity: 50,
      threshold: 20,
      expirationDate: new Date("2024-12-31"),
      location: "Warehouse A",
      price: 24.99,
      description:
        "A light roast coffee with a floral aroma and fruity flavor notes.",
    },
    // Add more sample products here
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [expirationDate, setExpirationDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newProduct: CoffeeProduct = {
      id: (products.length + 1).toString(),
      name: productName,
      type: "beans",
      origin: "Ethiopia",
      roastLevel: "medium",
      quantity: parseInt(quantity),
      threshold: 5,
      expirationDate: new Date(expirationDate),
      location: "Warehouse A",
      price: parseFloat(price),
      description,
    };

    setProducts((prevProducts) => [...prevProducts, newProduct]);

    // Reset the form fields
    setProductName("");
    setPrice("");
    setDescription("");
    setQuantity("");
    setExpirationDate("");

    console.log("Product added:", newProduct);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="relative w-72">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Add Product
            </Button>
          </DialogTrigger>
          <DialogContent aria-describedby="dialog-description">
            <DialogHeader>
              <DialogTitle>Add New Product</DialogTitle>
            </DialogHeader>
            <p id="dialog-description" className="text-sm text-gray-600 mb-4">
              Please fill out the details below to add a new product to your
              inventory.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="productName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  id="productName"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-700"
                >
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="quantity"
                  className="block text-sm font-medium text-gray-700"
                >
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="expirationDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  Expiration Date
                </label>
                <input
                  type="date"
                  id="expirationDate"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  value={expirationDate}
                  onChange={(e) => setExpirationDate(e.target.value)}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Add Product
                </button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Product</TableHead>
              <TableHead className="text-center">Type</TableHead>
              <TableHead className="text-center">Origin</TableHead>
              <TableHead className="text-center">Quantity</TableHead>
              <TableHead className="text-center">Location</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProducts.map((product) => (
              <TableRow className="text-center" key={product.id}>
                <TableCell>
                  <div>
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {product.roastLevel} roast
                    </p>
                  </div>
                </TableCell>
                <TableCell>{product.type}</TableCell>
                <TableCell>{product.origin}</TableCell>
                <TableCell>
                  <div className="flex items-center justify-center gap-2">
                    {product.quantity}
                    {product.quantity <= product.threshold && (
                      <AlertTriangle className="h-4 w-4 text-destructive" />
                    )}
                  </div>
                </TableCell>
                <TableCell>{product.location}</TableCell>
                <TableCell>
                  <Badge
                    className={
                      product.quantity <= product.threshold
                        ? "bg-red-500 text-white"
                        : "bg-green-500 text-white"
                    }
                  >
                    {product.quantity <= product.threshold
                      ? "Low Stock"
                      : "In Stock"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    Edit
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
