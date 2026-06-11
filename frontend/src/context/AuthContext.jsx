import { createContext, useContext, useEffect, useState } from "react";

// 🔹 Create a global container (like a shared storage)
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // 🔹 This holds the current user
  // null = not logged in
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔹 This runs ONCE when app loads
  useEffect(() => {
    const loadUser = async () => {
      // 🔹 Get token saved after login
      const token = localStorage.getItem("token");

      // 🔹 If no token → user is not logged in
      if (!token) {
        setLoading(false);
        return;
      };

      try {
        // 🔹 Ask backend: "who is this user?"
        const res = await fetch("http://localhost:5000/api/auth/profile", {
          headers: {
            Authorization: `Bearer ${token}` // 🔐 send token
          }
        });

        const data = await res.json();

        // 🔹 If token invalid → remove it
        if (!res.ok) throw new Error(data.message);

        // 🔹 Save user globally
        setUser(data);

      } catch (error) {
        console.error("Auth error:", error.message);

        // 🔹 If token is bad → clean it up
        localStorage.removeItem("token");
      }
      finally{
        setLoading(false);
      }
    };

    loadUser(); // 🔁 run function
  }, []);

  return (
    // 🔹 Makes user + setUser available everywhere
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// 🔹 Helper hook (so you don’t write useContext everywhere)
export const useAuth = () => useContext(AuthContext);