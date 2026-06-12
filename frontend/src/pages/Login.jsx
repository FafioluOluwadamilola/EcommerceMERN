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
      <div
        className="fixed h-screen inset-0 bg-black/50 flex justify-center items-center p-10"
        onClick={close}>

        <div
          className="
          w-full max-w-md
          bg-white dark:bg-slate-900
          text-gray-800 dark:text-slate-100
          rounded-2xl
          p-5 md:p-6
          shadow-2xl
          border border-gray-200 dark:border-slate-700
          "
          onClick={(e) => e.stopPropagation()}>

          <div className="flex justify-between items-center mb-2 p-2">
            <h1
              className="font-bold text-2xl">
              Login
            </h1>
            <X
              onClick={close}
              className="cursor-pointer
               text-gray-500
               hover:text-black
               dark:text-slate-400
               dark:hover:text-white
                transition
              "
            />
          </div>

          <form onSubmit={handleLogin}>

            <div className="reg">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='
                  w-full
                  rounded-xl
                  bg-gray-100
                  dark:bg-slate-800
                  dark:text-white
                  dark:placeholder:text-slate-400
                  border border-transparent
                  focus:outline-none
                  focus:ring-2
                  focus:ring-slate-400
                  dark:focus:ring-slate-500
                  transition
                  px-4 py-3
                '
              />
            </div>

            <div className="reg">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='
                  w-full
                  rounded-xl
                  bg-gray-100
                  dark:bg-slate-800
                  dark:text-white
                  dark:placeholder:text-slate-400
                  border border-transparent
                  focus:outline-none
                  focus:ring-2
                  focus:ring-slate-400
                  dark:focus:ring-slate-500
                  transition
                  px-4 py-3
                '
              />
            </div>

            <div className="m-3">
              <button
                type="submit"
                className='
                  w-full
                  rounded-xl
                  bg-black
                  dark:bg-slate-100
                  text-white
                  dark:text-slate-900
                  hover:bg-gray-800
                  dark:hover:bg-white
                  transition
                  font-medium
                  cursor-pointer
                  py-3
                '
              >
                Login
              </button>
            </div>

            <div className="p-5 text-center">
              <p 
                className="text-sm text-gray-600 dark:text-slate-400"
              >
                Don't have an account?
                <span
                  onClick={openSignUp}
                  className='
                    ml-1
                    cursor-pointer
                    hover:underline
                    text-black
                    dark:text-white
                    font-semibold
                  '
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