import PaymentManagement from "@/components/payment/PaymentManagement";

export default function PaymentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center my-10">
        <h1 className="text-3xl font-bold">Payments</h1>
      </div>
      <PaymentManagement />
    </div>
  );
}