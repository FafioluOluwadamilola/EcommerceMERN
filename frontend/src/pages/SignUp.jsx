import { X } from 'lucide-react'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext';

const SignUp = ({ close, openLogin }) => {

  // Access Global Auth State
  const { setUser } = useAuth();


  //Store input values
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Handle Sign Up
  const handleSignUp = async (e) => {
    e.preventDefault();


    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password })
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

      close(); // close modal

    } catch (error) {
      console.error("Sign Up error:", error.message);
      alert(error.message);
    }
  };

  return (
    <div 
      className='h-screen fixed inset-0 z-50 bg-black/60 flex justify-center items-center p-10' 
      onClick={close}>

      <div 
        className='
          w-full max-w-md
          bg-white dark:bg-slate-900
          text-gray-800 dark:text-slate-100
          rounded-2xl
          p-5 md:p-6
          shadow-2xl
          border border-gray-200 dark:border-slate-700
        ' 
        onClick={(e) => e.stopPropagation()}>

        <h1 
          className='flex justify-between items-center text-2xl font-bold text-left'
        >
          Create Account 
          <X 
            onClick={close} 
            className='
              cursor-pointer
              text-gray-500
              hover:text-black
              dark:text-slate-400
              dark:hover:text-white
              transition
            ' 
          />
        </h1>

        <div className='mt-3'>
          <form onSubmit={handleSignUp}>
            <div className='reg'>
              <label className='block text-sm font-medium'>Full Name</label>
              <input 
                placeholder='Enter your Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                required
              />

            </div>

            <div className='reg'>
              <label className='block text-sm font-medium'>Email Address</label>
              <input 
                type='email' 
                placeholder='Enter your Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='
                w-full
                px-4 py-3
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
                ' 
                required
              />
            </div>

            <div className='reg'>
              <label className='block text-sm font-medium'>Password</label>
              <input 
                type='password' 
                placeholder='Create a Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='
                w-full
                px-4 py-3
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
                ' 
                required
              />
            </div>

            <div className='text-center m-3'>
              <button 
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
                Sign Up
              </button>
            </div>

            <div className='p-5 text-center'>
              <p 
                className='text-sm text-gray-600 dark:text-slate-400'
              >
                Already have an account? 
                <span 
                  onClick={() => openLogin()} 
                  className='
                    ml-1
                    cursor-pointer
                    hover:underline
                    text-black
                    dark:text-white
                    font-semibold
                  '
                >
                  Log in
                </span>
              </p>
            </div>

          </form>
        </div>

      </div>

    </div>
  )
}

export default SignUp