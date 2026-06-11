import { useParams } from "react-router-dom";
import products from "../data/products";
import { ShoppingCart, Star } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useUI } from "../context/UIContext";

const ProductDetails = () => {

  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const { addToCart } = useCart();
  const { user } = useAuth();
  const { setShowLogin } = useUI();

  const handleAddToCart = () => {

    if (!user) {
      setShowLogin(true);
      return;
    }

    addToCart(product);

  };

  // Product not found
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          Product Not Found
        </h1>
      </div>
    );
  }

  return (

    <div className="max-w-7xl mx-auto px-6 py-16 min-h-screen">

      <div className="grid md:grid-cols-2 gap-14">

        {/* LEFT SIDE */}
        <div className="rounded-3xl overflow-hidden bg-gray-100">

          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />

        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col">

          {/* Category */}
          <p className="text-sm uppercase tracking-wide text-gray-500 mb-3">
            {product.category}
          </p>

          {/* Name */}
          <h1 className="text-5xl font-bold mb-5 leading-tight">
            {product.name}
          </h1>

          {/* Ratings */}
          <div className="flex items-center gap-2 mb-6">

            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />

            <span className="font-semibold">
              {product.ratings}
            </span>

            <span className="text-gray-500">
              ({product.reviews} reviews)
            </span>

          </div>

          {/* Price */}
          <p className="text-4xl font-bold mb-8">
            ${product.price.toFixed(2)}
          </p>

          {/* Description */}
          <div className="mb-10">

            <h2 className="text-2xl font-bold mb-4">
              Description
            </h2>

            <p className="text-gray-600 leading-8">
              {product.description}
            </p>

          </div>

          {/* Features */}
          <div className="mb-10">

            <h2 className="text-2xl font-bold mb-4">
              Features
            </h2>

            <ul className="flex flex-col gap-3 text-gray-700">

                {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <span className="text-green-500 mt-1">
                            ✓
                        </span>
                        {feature}
                    </li>
                ))}

            </ul>

          </div>

          {/* Button */}
          <button
            onClick={handleAddToCart}
            className="flex items-center justify-center gap-3 bg-black text-white py-4 rounded-2xl hover:bg-gray-800 transition-colors text-lg font-medium"
          >

            <ShoppingCart />
            Add to Cart

          </button>

        </div>

      </div>

    </div>

  );
};

export default ProductDetails;