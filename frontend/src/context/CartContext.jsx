import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

  // 🛒 Cart array
  const [cart, setCart] = useState([]);

  const { user } = useAuth();



  // 💾 Save cart whenever it changes
  useEffect(() => {

    const fetchCart = async () => {

      const token = localStorage.getItem("token");

      // ❌ No logged in user
      if (!token || !user) {
        setCart([]);
        return;
      }

      try {

        const res = await fetch(
          "/api/cart",
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message);
        }

        setCart(data.items);

      } catch (error) {

        console.error(error.message);

      }
    };

    fetchCart();

  }, [user]);



  // ➕ Add item
  const addToCart = async (product) => {

    const token = localStorage.getItem("token");

    // ❌ If not logged in
    if (!token) {
      alert("Please login first");
      return;
    }

    try {

      // 📡 Send product to backend
      const res = await fetch(
        "/api/cart",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },

          body: JSON.stringify({
            productId: product.productId || product.id,
            name: product.name,
            image: product.image,
            price: product.price
          })
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      // 🔥 Update frontend cart using DB response
      setCart(data.items);

    } catch (error) {
      console.error(error.message);
    }
  };



  //Increase quantity
  const increaseQty = async (product) => {
    await addToCart(product);
  };



  //Decrease quantity
  const decreaseQty = async (productId) => {

    const token = localStorage.getItem("token");

    try {

      const res = await fetch(
        `/api/cart/decrease/${productId}`,
        {
          method: "PATCH",

          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      setCart(data.items);

    } catch (error) {

      console.error(error.message);

    }
  };




  // ❌ Remove item
  const removeFromCart = async (productId) => {

    const token = localStorage.getItem("token");

    try {

      const res = await fetch(
        `/api/cart/${productId}`,
        {
          method: "DELETE",

          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      // 🔥 Sync frontend with backend
      setCart(data.items);

    } catch (error) {

      console.error(error.message);

    }
  };




  // 🧹 Clear entire cart
  const clearCart = async () => {

    const token = localStorage.getItem("token");

    try {

      const res = await fetch(
        "/api/cart/clear",
        {
          method: "DELETE",

          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      // 🔥 sync frontend with backend
      setCart(data.items);

    } catch (error) {

      console.error(error.message);

    }
  };



  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQty,
        decreaseQty
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// 🔥 Custom hook
export const useCart = () => useContext(CartContext);