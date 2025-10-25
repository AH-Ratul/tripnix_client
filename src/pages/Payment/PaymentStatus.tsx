import { CheckCircle, XCircle, Home, Send } from "lucide-react";

/**
 * Global component wrapper for both success and failure states.
 * @param {string} status - 'success' or 'failure'
 * @param {object} children - Content of the status block
 */
export const StatusPageWrapper = ({ status, children }: any) => {
  const isSuccess = status === "success";
  const bgColor = isSuccess ? "bg-coquelicot-50" : "bg-red-50";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div
        className={`w-full max-w-xl p-8 md:p-12 rounded-2xl shadow-2xl ${bgColor} border border-gray-200`}
      >
        <div className="text-center">{children}</div>
      </div>

      {/* Footer Links */}
      <div className="flex gap-4 mt-8">
        <Button
          variant="outline"
          className="flex items-center gap-2 text-gray-700 hover:bg-gray-200"
          onClick={() => (window.location.href = "/")} // Navigate to home
        >
          <Home className="h-5 w-5" />
          Back to Home
        </Button>
        <Button
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
          //onClick={() => (window.location.href = "/contact")}
        >
          <Send className="h-5 w-5" />
          Contact Support
        </Button>
      </div>
    </div>
  );
};

const Button = ({
  children,
  className = "",
  variant = "default",
  onClick = () => {},
}: any) => {
  let baseStyles =
    "px-4 py-2 font-semibold rounded-lg transition-all duration-200 ease-in-out shadow-md";

  if (variant === "outline") {
    baseStyles = `border border-gray-300 text-gray-800 bg-white hover:bg-gray-100 ${baseStyles}`;
  } else {
    baseStyles = `bg-primary text-white hover:bg-primary/90 ${baseStyles}`;
  }

  return (
    <button className={`${baseStyles} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

// --- SUCCESS PAGE CONTENT ---

export const SuccessContent = ({ transactionId, amount }: any) => {
  return (
    <>
      <CheckCircle className="h-20 w-20 mx-auto mb-6 text-green-500" />
      <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
        Booking Confirmed!
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Your payment was successful. We've sent the confirmation details to your
        email.
      </p>

      {/* Detailed Transaction Summary */}
      <div className="bg-white p-6 rounded-xl border border-gray-100 space-y-3 mb-8 text-left shadow-inner">
        <DetailRow label="Transaction ID" value={transactionId} />

        <DetailRow
          label="Amount Paid"
          value={`${amount?.toFixed(2)}`}
          valueClassName="text-green-600 font-extrabold"
        />
      </div>

      <p className="text-sm text-gray-500">
        Need help? Your booking details and next steps are in your confirmation
        email.
      </p>
    </>
  );
};

// --- FAILURE PAGE CONTENT ---

export const FailureContent = ({ transactionId }: any) => {
  return (
    <>
      <XCircle className="h-20 w-20 mx-auto mb-6 text-red-500" />
      <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
        Payment Failed
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        We couldn't process your payment. Don't worry, no charges have been
        applied to your account.
      </p>

      {/* Action Steps */}
      <div className="bg-white p-6 rounded-xl border border-gray-100 space-y-4 mb-8 text-left shadow-inner">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Next Steps:
        </h3>
        <ActionListItem
          number={1}
          text="Check your payment details (card number, expiry, CVV)."
        />
        <ActionListItem
          number={2}
          text="Verify sufficient funds or check with your bank."
        />
        <ActionListItem
          number={3}
          text={`Try again or contact support at: tripnix.support@email.com`}
        />
      </div>

      <p className="text-sm text-gray-500">
        Reference ID: **{transactionId}**. Please quote this if you contact
        support.
      </p>
    </>
  );
};

// --- Helper Components ---

const DetailRow = ({
  label,
  value,
  valueClassName = "font-semibold text-gray-800",
}: any) => (
  <div className="flex justify-between border-b border-gray-100 last:border-b-0 py-1">
    <span className="text-gray-500">{label}:</span>
    <span className={valueClassName}>{value}</span>
  </div>
);

const ActionListItem = ({ number, text }: any) => (
  <div className="flex items-start gap-3">
    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-gray-200 text-gray-700 font-bold text-sm rounded-full">
      {number}
    </span>
    <p className="text-gray-700">{text}</p>
  </div>
);

