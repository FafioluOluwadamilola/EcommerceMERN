import React from 'react'
import { Heart, ShoppingCart, Star } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'
import { useUI } from '../context/UIContext'
import { Link } from 'react-router-dom'
import { useWishlist } from '../context/WishlistContext'

const ProductCard = ({ products }) => {

  const { addToCart } = useCart();
  const { user } = useAuth();
  const { setShowLogin } = useUI();
  const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlist();

  const handleAddToCart = (product) => {

    // If user is not logged in
    if (!user) {
      setShowLogin(true);
      return;
    }

    // Add to cart
    addToCart(product);

    console.log("Added to Cart", product.name);

  };

  return (

    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 w-full'>

      {products.map((product) => (

        <div
          key={product.id}
          className='group overflow-hidden rounded-3xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
        >

          {/* Image */}
          <div className='aspect-square overflow-hidden bg-gray-100 dark:bg-slate-700 relative'>

            <Link to={`/products/${product.id}`} >
              <img
                src={product.image}
                alt={product.name}
                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer'
              />
            </Link>

            <button
              onClick={() =>
                isInWishlist(product.id) ? removeFromWishlist(product.id) : addToWishlist(product)
              }
              className='absolute top-3 right-3 bg-white dark:bg-slate-800 p-2 rounded-full shadow dark:shadow-slate-900/50'

            >

              <Heart
                size={18}
                className={
                  isInWishlist(product.id)
                    ? "fill-red-500 text-red-500"
                    : "text-gray-500 dark:text-gray-400"
                }
              />

            </button>

          </div>


          {/* Content */}
          <div className='p-4'>

            {/* Name + Category */}
            <Link to={`/products/${product.id}`} className='cursor-pointer'>
              <div className='flex items-start justify-between gap-2 mb-2'>

                <h1 className='font-semibold text-lg line-clamp-1 text-gray-800 dark:text-white'>
                  {product.name}
                </h1>

                <p className='text-xs bg-gray-100 dark:bg-slate-700 px-2 py-1 rounded-full shrink-0 text-gray-600 dark:text-gray-300'>
                  {product.category}
                </p>

              </div>

              {/* Description */}
              <p className='text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-3'>
                {product.description}
              </p>

            </Link>


            {/* Ratings */}
            <div className='flex items-center gap-1 mb-4'>

              <Star className='w-4 h-4 fill-yellow-400 text-yellow-400' />

              <span className='text-sm font-medium text-gray-700 dark:text-gray-200'>
                {product.ratings}
              </span>

              <span className='text-sm text-gray-500 dark:text-gray-400'>
                ({product.reviews})
              </span>

            </div>

            {/* Footer */}
            <div className='flex items-center justify-between'>

              <p className='text-2xl font-bold text-gray-800 dark:text-white'>
                ${product.price.toFixed(2)}
              </p>

              <button
                onClick={() => handleAddToCart(product)}
                className='flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors'
              >

                <ShoppingCart size={16} />
                Add

              </button>

            </div>

          </div>

        </div>

      ))}

    </div>

  )
}

export default ProductCard