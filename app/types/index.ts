export interface CoffeeProduct {
  id: string;
  name: string;
  type: 'beans' | 'grounds';
  origin: string;
  roastLevel: 'light' | 'medium' | 'dark';
  quantity: number;
  threshold: number;
  expirationDate: Date;
  location: string;
  price: number;
  description: string;
}

export interface Supplier {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  rating: number;
}

export interface Order {
  id: string;
  supplierId: string;
  products: Array<{
    productId: string;
    quantity: number;
    price: number;
  }>;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  orderDate: Date;
  deliveryDate?: Date;
  totalAmount: number;
  paymentStatus: 'pending' | 'paid' | 'overdue';
}

export interface InventoryTransaction {
  id: string;
  productId: string;
  type: 'in' | 'out';
  quantity: number;
  date: Date;
}