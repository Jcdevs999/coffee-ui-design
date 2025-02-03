"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Coffee,
  Package,
  CreditCard,
  Truck,
  Users,
  Settings,
  BarChart3,
  ShoppingCart,
} from "lucide-react";

const sidebarItems = [
  { name: "Dashboard", href: "/", icon: BarChart3 },
  { name: "New Order", href: "/orders/new", icon: ShoppingCart },
  { name: "Orders", href: "/orders", icon: Package },
  { name: "Delivery", href: "/delivery", icon: Truck },
  { name: "Inventory", href: "/inventory", icon: Coffee },
  { name: "Payments", href: "/payments", icon: CreditCard },
  { name: "Customers", href: "/customers", icon: Users },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 fixed left-0 top-16 h-[calc(100vh-4rem)] border-r bg-background">
      <nav className="space-y-2 p-4">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent",
                pathname === item.href ? "bg-accent" : "transparent"
              )}
            >
              <Icon className="h-4 w-4" />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
