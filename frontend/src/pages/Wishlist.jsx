import ProductCard from "../components/ProductCard";
import { useWishlist } from "../context/WishlistContext";

const Wishlist = () => {

  const { wishlist } = useWishlist();

  return (

    <div className="max-w-7xl mx-auto px-6 py-12">

      <h1 className="text-4xl font-bold mb-8">
        Wishlist
      </h1>

      {wishlist.length === 0 ? (

        <p>
          No products saved yet.
        </p>

      ) : (

        <ProductCard
          products={wishlist}
        />

      )}

    </div>

  );
};

export default Wishlist;