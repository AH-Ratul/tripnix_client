import { FailureContent, StatusPageWrapper } from "./PaymentStatus";

export const FailurePage = () => {
  const params = new URLSearchParams(window.location.search);

  const transactionId = params.get("transactionId");
  const status = params.get("status");
  return (
    <StatusPageWrapper status={status}>
      <FailureContent transactionId={transactionId} />
    </StatusPageWrapper>
  );
};
