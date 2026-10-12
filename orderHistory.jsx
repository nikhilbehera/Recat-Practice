import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const OrderHistory = () => {
  const [orders, setOrders] = useState(() => {
    return JSON.parse(localStorage.getItem("orders") || "[]");
  });
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-3xl font-bold">My Orders</h1>

      {orders.length === 0 ? (
        <div className="mt-10 flex flex-col items-center rounded-xl border border-gray-200 bg-white px-6 py-12 text-center shadow-sm">
          <div className="rounded-full bg-gray-100 p-5">
            <span className="text-4xl">🛍️</span>
          </div>

          <h2 className="mt-5 text-xl font-bold text-gray-800">
            No Orders Yet
          </h2>

          <p className="mt-2 max-w-md text-gray-500">
            You haven't placed any orders yet. Start shopping and your orders
            will appear here.
          </p>

          <Link
            to="/products"
            className="mt-6 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            Explore Products
          </Link>
        </div>
      ) : (
        <div className="mt-6 space-y-4">
          <p className="text-green-600">You have {orders.length} order(s).</p>

          {orders.map((order) => (
            <div
              key={order.id}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h2 className="font-bold text-lg text-gray-800">
                Order ID: {order.id}
              </h2>
              <div className="mt-4">
                {order.items.map((item) => (
                  <div className="mb-3 rounded-lg bg-gray-50 p-4" key={item.id}>
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>

                    <div className="mt-2 flex justify-between">
                      <span className="text-sm text-gray-600">Price</span>
                      <span className="font-medium">₹{item.price}</span>
                    </div>

                    <div className="mt-1 flex justify-between">
                      <span className="text-sm text-gray-600">Quantity</span>
                      <span className="font-medium">{item.quantity}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between rounded-lg bg-gray-100 px-4 py-3">
                <span className="font-semibold text-gray-700">
                  Total Amount
                </span>

                <span className="text-lg font-bold text-gray-900">
                  ₹{order.total}
                </span>
              </div>
              <div className="mt-4">
                <span className="text-sm font-medium text-gray-600">
                  Order Status:
                </span>

                <span className="ml-2 inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                  {order.status}
                </span>
              </div>
              <p className="mt-3 text-sm text-gray-500">
                order Date:{" "}
                {new Date(order.createdAt).toLocaleDateString("en-IN")}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
