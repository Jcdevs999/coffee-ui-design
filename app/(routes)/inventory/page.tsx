import InventoryManagement from "@/components/inventory/InventoryManagement";

export default function InventoryPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center my-10">
        <h1 className="text-3xl font-bold">Inventory Management</h1>
      </div>
      <InventoryManagement />
    </div>
  );
}
