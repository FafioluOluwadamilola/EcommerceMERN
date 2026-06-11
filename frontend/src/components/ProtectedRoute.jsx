import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useUI } from "../context/UIContext";

const ProtectedRoute = ({ children }) => {

  const { user } = useAuth();

  const { setShowLogin } = useUI();

  // ❌ Not logged in
  if (!user) {

    // 🔥 Open login modal
    setShowLogin(true);

    // 🔥 Redirect home
    return <Navigate to="/" replace />;
  }

  // ✅ Logged in
  return children;
};

export default ProtectedRoute;