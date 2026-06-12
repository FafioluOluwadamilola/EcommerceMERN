import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyOrders = () => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {

    const fetchOrders = async () => {

      const token = localStorage.getItem("token");

      try {

        const res = await fetch(
          "/api/orders/my-orders",
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        const data = await res.json();

        setOrders(data);

      } catch (error) {

        console.error(error);

      }

    };

    fetchOrders();

  }, []);

  return (
    <div className="max-w-6xl mx-auto p-10 min-h-screen">

      <h1 className="text-4xl font-bold mb-8">
        My Orders
      </h1>

      {orders.length === 0 ? (

        <p>You have not placed any orders yet.</p>

      ) : (

        <div className="flex flex-col gap-6">

          {orders.map((order) => (

            <Link
              to={`/orders/${order._id}`}
              key={order._id}
              className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition-block" 
            >

              <div className="flex justify-between mb-4">

                <div>
                  <h2 className="font-bold">
                    Order #{order._id.slice(-6)}
                  </h2>

                  <p className="text-gray-500">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                </div>

                <div>
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                    {order.status}
                  </span>
                </div>

              </div>

              <div className="space-y-2">

                {order.items.map((item) => (

                  <div
                    key={item._id}
                    className="flex justify-between"
                  >

                    <span>
                      {item.name} × {item.qty}
                    </span>

                    <span>
                      ${(item.price * item.qty).toFixed(2)}
                    </span>

                  </div>

                ))}

              </div>

              <div className="border-t mt-4 pt-4 flex justify-between font-bold text-lg">

                <span>Total</span>

                <span>
                  ${order.totalPrice.toFixed(2)}
                </span>

              </div>

            </Link>

          ))}

        </div>

      )}

    </div>
  );
};

export default MyOrders;