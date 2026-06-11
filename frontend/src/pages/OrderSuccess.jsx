import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">

      <div className="bg-white shadow-lg rounded-2xl p-10 max-w-lg w-full text-center">

        {/* Success Icon */}
        <div className="text-6xl mb-4">
          ✅
        </div>

        <h1 className="text-4xl font-bold mb-4">
          Order Placed Successfully!
        </h1>

        <p className="text-gray-600 mb-8">
          Thank you for shopping with us.
          Your order is now being processed.
        </p>

        <div className="flex flex-col gap-4">

          <Link
            to="/"
            className="bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
          >
            Continue Shopping
          </Link>

          <Link
            to="/profile"
            className="border py-3 rounded-xl hover:bg-gray-100 transition"
          >
            View Profile
          </Link>

        </div>

      </div>

    </div>
  );
};

export default OrderSuccess;