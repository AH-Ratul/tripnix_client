import { StatusPageWrapper, SuccessContent } from "./PaymentStatus";
import { useGetPaymentQuery } from "@/redux/features/payment/payment.api";

export const SuccessPage = () => {
  const params = new URLSearchParams(window.location.search);

  const txn = params.get("transactionId");
  const status = params.get("status");

  const { data, isLoading } = useGetPaymentQuery(txn);

  if (isLoading) {
    return <p>Loading..</p>;
  }

  return (
    <StatusPageWrapper status={status}>
      <SuccessContent transactionId={data.transactionId} amount={data.amount} />
    </StatusPageWrapper>
  );
};
