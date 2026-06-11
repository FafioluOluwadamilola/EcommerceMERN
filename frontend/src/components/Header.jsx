import { Link } from 'react-router-dom'
import { ShoppingCart, User, Menu, X, Heart, Moon, Sun } from 'lucide-react'
import { useState } from 'react'

import SignUp from '../pages/SignUp'
import Login from '../pages/Login'

import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'
import { useUI } from '../context/UIContext'
import { useWishlist } from '../context/WishlistContext'
import { useTheme } from '../context/ThemeContext'


const Header = () => {

    const [mobileMenu, setMobileMenu] = useState(false)

    const { theme, toggleTheme } = useTheme()

    const { wishlist } = useWishlist();

    const {
        showLogin,
        setShowLogin,
        showSignUp,
        setShowSignUp
    } = useUI()

    const { user, setUser } = useAuth()

    const { cart, setCart } = useCart()

    const totalItems = cart.reduce(
        (total, item) => total + item.qty,
        0
    )

    const handleLogout = () => {
        localStorage.removeItem("token")
        setUser(null)
        setCart([])
    }

    return (

        <header className='sticky top-0 z-50 bg-white/40 dark:bg-slate-950 text-gray-800 dark:text-slate-100 backdrop-blur-lg border-b border-white/20 shadow-sm'>

            <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>

                {/* Logo */}
                <Link
                    to="/"
                    className='flex items-center gap-2'
                >

                    <div className='bg-linear-to-r from-blue-500 to-purple-500 rounded-lg p-1 bg-linear-to-r dark:from-pink-500 dark:to-yellow-500 '>

                        <ShoppingCart className='text-white size-5' />

                    </div>

                    <h1 className='text-[20px] font-bold '>
                        TechStore
                    </h1>

                </Link>


                {/* Desktop Navigation */}
                <div className='hidden md:flex items-center gap-80'>

                    {/* Nav Links */}
                    <nav className='flex gap-6'>

                        <Link
                            to="/"
                            className=' hover:text-slate-500 transition'
                        >
                            Home
                        </Link>

                        <Link
                            to="/products"
                            className=' hover:text-slate-500 transition'
                        >
                            Products
                        </Link>

                        <Link
                            to="/contact"
                            className=' hover:text-slate-500 transition'
                        >
                            Contact
                        </Link>

                    </nav>


                    {/* Right Section */}
                    <div className='flex items-center gap-4'>

                        {user ? (

                            <div className='flex items-center gap-3'>

                                <span className='hidden lg:block text-gray-800 dark:text-slate-100 font-medium'>
                                    Welcome, {user.name}
                                </span>

                                <Link
                                    to="/orders"
                                    className='px-3 py-1.5 bg-gray-200 rounded-lg hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition cursor-pointer'
                                >
                                    My Orders

                                </Link>

                                <button
                                    onClick={handleLogout}
                                    className='px-3 py-1.5 bg-gray-200 rounded-lg hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition cursor-pointer'
                                >
                                    Logout
                                </button>

                            </div>

                        ) : (

                            <>

                                <button
                                    onClick={() => setShowLogin(true)}
                                    className='flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition cursor-pointer'
                                >

                                    <User size={18} />
                                    Login

                                </button>

                                <button
                                    onClick={() => setShowSignUp(true)}
                                    className='bg-slate-950 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition cursor-pointer'
                                >
                                    Sign Up
                                </button>

                            </>

                        )}

                        {/* Desktop Cart */}
                        <Link to="/cart" className='relative'>

                            <ShoppingCart
                                size={26}
                                className='text-gray-800 dark:text-slate-100'
                            />

                            {totalItems > 0 && (

                                <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>

                                    {totalItems}

                                </span>

                            )}

                        </Link>


                        {/* WishList */}
                        <Link to="/wishlist" className='relative'>
                            <Heart size={26} className='text-gray-800 dark:text-slate-100' />

                            {wishlist.length > 0 && (

                                <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>
                                    {wishlist.length}
                                </span>
                            )}

                        </Link>


                        {/* Theme Toggle */}
                        <button onClick={toggleTheme} className='p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition'>
                            {theme === "light" ? (
                                <Moon size={26} className='text-gray-800 dark:text-slate-100' />
                            ) : (
                                <Sun size={26} className='text-gray-800 dark:text-slate-100' />
                            )}
                        </button>

                    </div>

                    
                </div>





                {/* Mobile Right Section */}
                <div className='flex items-center gap-4 md:hidden'>

                    {/* Mobile Cart */}
                    <Link to="/cart" className='relative'>

                        <ShoppingCart size={26}
                            className='text-gray-800 dark:text-slate-100'
                        />

                        {totalItems > 0 && (

                            <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>

                                {totalItems}

                            </span>

                        )}

                    </Link>

                    {/* Toggle Theme */}
                    <button onClick={toggleTheme} className='p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition'>
                        {theme === "light" ? (
                            <Sun size={26} className='text-gray-800 dark:text-slate-100' /> 
                        ) : (
                            <Moon size={26} className='text-gray-800 dark:text-slate-100' />
                        )}
                    </button>


                    <Link to="/wishlist" className='relative'>
                        <Heart size={26} className='text-gray-800 dark:text-slate-100' />

                        {wishlist.length > 0 && (
                            <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>
                                {wishlist.length}
                            </span>
                        )}
                    </Link>


                    {/* Menu Button */}
                    <button
                        onClick={() => setMobileMenu(!mobileMenu)}
                    >

                        {mobileMenu ? (
                            <X size={28} />
                        ) : (
                            <Menu size={28} />
                        )}

                    </button>

                </div>

            </div>





            {/* Mobile Dropdown */}
            {mobileMenu && (

                <div className='md:hidden bg-white dark:bg-slate-950 border-t border-gray-200 dark:border-slate-600 px-6 py-6 flex flex-col gap-5 shadow-lg'>

                    {/* Links */}
                    <Link
                        to="/"
                        onClick={() => setMobileMenu(false)}
                        className='text-gray-800 dark:text-slate-100'
                    >
                        Home
                    </Link>

                    <Link
                        to="/products"
                        onClick={() => setMobileMenu(false)}
                        className='text-gray-800 dark:text-slate-100'
                    >
                        Products
                    </Link>

                    <Link
                        to="/contact"
                        onClick={() => setMobileMenu(false)}
                        className='text-gray-800 dark:text-slate-100'
                    >
                        Contact
                    </Link>





                    {/* Auth */}
                    {user ? (

                        <>

                            <p className='font-medium dark:text-slate-100'>
                                Welcome, {user.name}
                            </p>

                            <button
                                onClick={handleLogout}
                                className='bg-gray-200 py-2 rounded-lg dark:bg-gray-700 transition'
                            >
                                Logout
                            </button>

                        </>

                    ) : (

                        <>

                            <button
                                onClick={() => {
                                    setShowLogin(true)
                                    setMobileMenu(false)
                                }}
                                className='border py-2 rounded-lg'
                            >
                                Login
                            </button>

                            <button
                                onClick={() => {
                                    setShowSignUp(true)
                                    setMobileMenu(false)
                                }}
                                className='bg-black text-white py-2 rounded-lg'
                            >
                                Sign Up
                            </button>

                        </>

                    )}

                </div>

            )}






            {/* Modals */}
            {showSignUp && (
                <SignUp
                    close={() => setShowSignUp(false)}
                    openLogin={() => {
                        setShowSignUp(false)
                        setShowLogin(true)
                    }}
                />
            )}

            {showLogin && (
                <Login
                    close={() => setShowLogin(false)}
                    openSignUp={() => {
                        setShowLogin(false)
                        setShowSignUp(true)
                    }}
                />
            )}

        </header>

    )
}

export default Header