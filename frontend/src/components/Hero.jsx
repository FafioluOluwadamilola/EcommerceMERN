import React from 'react'
import { ArrowRight, Shield, Truck, Zap, Sparkles, TrendingUp, Star } from "lucide-react"
import ProductCard from './ProductCard'
import products, { categories } from '../data/products'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950'>

      {/* Section 1 - Hero Section */}
      <div className='relative overflow-hidden'>
        {/* Animated background glows - hidden in light mode, visible in dark */}
        <div className='absolute top-0 -left-48 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-0 dark:opacity-20 animate-pulse'></div>
        <div className='absolute top-0 -right-48 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-0 dark:opacity-20 animate-pulse animation-delay-2000'></div>

        <div className='relative text-center flex flex-col justify-center items-center h-auto md:h-screen min-h-[600px] px-6'>
          {/* Badge */}
          <div className='inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-500/10 backdrop-blur-sm border border-purple-300 dark:border-purple-500/30 rounded-full px-4 py-1.5 mb-6'>
            <Sparkles className='w-4 h-4 text-purple-600 dark:text-purple-400' />
            <span className='text-sm text-purple-700 dark:text-purple-300 font-medium'>Summer Sale Live — Up to 40% Off</span>
          </div>

          <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-purple-600 to-cyan-600 dark:from-white dark:via-purple-200 dark:to-cyan-200 bg-clip-text text-transparent'>
            Welcome to TechStore
          </h1>

          <p className='text-lg md:text-xl text-slate-600 dark:text-slate-300 text-center max-w-2xl mb-8'>
            Discover the latest smartphones, tablets, audio devices, and accessories.
            Premium quality, unbeatable prices.
          </p>

          <div className='mt-4 flex flex-col gap-4 sm:flex-row'>
            <Link
              to='/products'
              className='group flex gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white py-3 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 font-medium'
            >
              Shop Now
              <ArrowRight className='group-hover:translate-x-1 transition-transform' />
            </Link>
            <Link
              to='/products'
              className='bg-slate-200 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-300 dark:border-slate-700 hover:bg-slate-300 dark:hover:bg-slate-800 hover:border-purple-400 dark:hover:border-purple-500/50 text-slate-800 dark:text-white py-3 px-8 rounded-xl transition-all duration-300 font-medium'
            >
              View Phones
            </Link>
          </div>

          {/* Trust indicators */}
          <div className='mt-12 flex flex-wrap justify-center gap-6 text-sm text-slate-500 dark:text-slate-400'>
            <span className='flex items-center gap-1'>✨ 50,000+ Happy Customers</span>
            <span className='flex items-center gap-1'>⭐ 4.9/5 Rating</span>
            <span className='flex items-center gap-1'>🚚 Free Shipping Over $50</span>
          </div>
        </div>
      </div>

      {/* Section 2 - Features */}
      <div className='max-w-7xl mx-auto px-6 py-20'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>

          <div className='group relative bg-white dark:bg-gradient-to-br dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 rounded-2xl p-6 hover:border-purple-400 dark:hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg'>
            <div className='relative'>
              <div className='bg-purple-50 dark:bg-gradient-to-br dark:from-purple-500/20 dark:to-cyan-500/20 p-4 rounded-xl w-fit mb-4'>
                <Zap className='text-purple-600 dark:text-purple-400' size={28} />
              </div>
              <h3 className='text-xl font-bold text-slate-800 dark:text-white mb-2'>Fast Delivery</h3>
              <p className='text-slate-500 dark:text-slate-400'>Get your products delivered in 2-3 business days</p>
            </div>
          </div>

          <div className='group relative bg-white dark:bg-gradient-to-br dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 rounded-2xl p-6 hover:border-purple-400 dark:hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg'>
            <div className='relative'>
              <div className='bg-emerald-50 dark:bg-gradient-to-br dark:from-emerald-500/20 dark:to-teal-500/20 p-4 rounded-xl w-fit mb-4'>
                <Shield className='text-emerald-600 dark:text-emerald-400' size={28} />
              </div>
              <h3 className='text-xl font-bold text-slate-800 dark:text-white mb-2'>Secure Shopping</h3>
              <p className='text-slate-500 dark:text-slate-400'>Your data is protected with industry-standard encryption</p>
            </div>
          </div>

          <div className='group relative bg-white dark:bg-gradient-to-br dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 rounded-2xl p-6 hover:border-purple-400 dark:hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg'>
            <div className='relative'>
              <div className='bg-amber-50 dark:bg-gradient-to-br dark:from-amber-500/20 dark:to-orange-500/20 p-4 rounded-xl w-fit mb-4'>
                <Truck className='text-amber-600 dark:text-amber-400' size={28} />
              </div>
              <h3 className='text-xl font-bold text-slate-800 dark:text-white mb-2'>Free Returns</h3>
              <p className='text-slate-500 dark:text-slate-400'>30-day return policy on all products</p>
            </div>
          </div>

        </div>
      </div>

      {/* Category Section */}
      <div className='max-w-7xl mx-auto px-6 py-20'>
        <div className='text-center mb-12'>
          <div className='inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-500/10 rounded-full px-4 py-1.5 mb-4'>
            <TrendingUp className='w-4 h-4 text-purple-600 dark:text-purple-400' />
            <span className='text-sm text-purple-700 dark:text-purple-300 font-medium'>Shop by Category</span>
          </div>
          <h2 className='text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4'>
            Browse Our Collections
          </h2>
          <p className='text-slate-500 dark:text-slate-400 max-w-2xl mx-auto'>
            Find exactly what you're looking for in our curated categories
          </p>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5'>

          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/products?category=${category.id}`}
              className='group relative bg-white dark:bg-gradient-to-br dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 rounded-2xl p-6 hover:border-purple-400 dark:hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1 text-center shadow-sm hover:shadow-lg'
            >
              <div className='flex flex-col items-center gap-3'>
                <span className='text-5xl filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300'>
                  {category.icon}
                </span>
                <span className='text-slate-700 dark:text-slate-300 font-medium group-hover:text-purple-600 dark:group-hover:text-white transition-colors'>
                  {category.name}
                </span>
              </div>
            </Link>
          ))}

        </div>
      </div>

      {/* Products Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className='flex flex-col md:flex-row justify-between items-center mb-12 gap-4'>
          <div>
            <div className='inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-500/10 rounded-full px-4 py-1.5 mb-3'>
              <Star className='w-4 h-4 text-purple-600 dark:text-purple-400' />
              <span className='text-sm text-purple-700 dark:text-purple-300 font-medium'>Best Sellers</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">
              Featured Products
            </h2>
          </div>

          <Link
            to="/products"
            className='group flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-purple-600 dark:hover:text-white transition-colors'
          >
            View All
            <ArrowRight className='group-hover:translate-x-1 transition-transform' size={18} />
          </Link>
        </div>

        <ProductCard products={products.slice(0, 8)} />
      </section>

    </div>
  )
}

export default Hero