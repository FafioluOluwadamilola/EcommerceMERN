import { X } from "lucide-react"
import { useAuth } from "../context/AuthContext"
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";

const Login = ({ close, openSignUp }) => {
  
  const { setUser } = useAuth();

  // 🔹 Store input values
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 🔹 Handle login
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      // 🔐 Save token
      localStorage.setItem("token", data.token);

      // 🔥 Update global state
      setUser({
        _id: data._id,
        name: data.name,
        email: data.email
      });

      const from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
      close();

    } catch (error) {
      console.error("Login error:", error.message);
      alert(error.message);
    }
  };

  return (
    <div>
      <div className="fixed h-screen inset-0 bg-black/40 flex justify-center items-center" onClick={close}>

        <div className="bg-white w-[24%] rounded-2xl p-5" onClick={(e) => e.stopPropagation()}>

          <div className="flex justify-between items-center mb-2 p-2">
            <h1 className="font-bold text-2xl">Login</h1>
            <X onClick={close} className="cursor-pointer" />
          </div>

          <form onSubmit={handleLogin}>

            <div className="reg">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='bg-black/5 p-2 rounded-xl w-full'
              />
            </div>

            <div className="reg">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='bg-black/5 p-2 rounded-xl w-full'
              />
            </div>

            <div className="m-3">
              <button
                type="submit"
                className='bg-black text-white py-2 px-4 rounded-xl w-full'
              >
                Login
              </button>
            </div>

            <div className="p-5 text-center">
              <p>
                Don't have an account?
                <span
                  onClick={openSignUp}
                  className='font-bold hover:underline cursor-pointer'
                >
                  Sign Up
                </span>
              </p>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Login