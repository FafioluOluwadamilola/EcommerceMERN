import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";
import products, { categories } from "../data/products";

const Products = () => {

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default")  

  const [searchParams] = useSearchParams();
  const categoryFromURL = searchParams.get("category") || "all";
  const [selectedCategory, setSelectedCategory] = useState(categoryFromURL);

  
  // Filter products
  const filteredProducts = products.filter((product) => {

    const matchesCategory =
      selectedCategory === "all" ||
      product.category.toLocaleLowerCase() === selectedCategory.toLocaleLowerCase();

    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  })
  .sort((a, b) => {

    switch(sortBy) {
      
      case "low-high":
        return a.price - b.price;

      case "high-low":
        return b.price - a.price;

      case "ratings":
        return b.ratings - a.ratings;
      
      case "name":
        return a.name.localeCompare(b.name);

      default:
        return 0;


    }
  })

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 min-h-screen">

      {/* Heading */}
      <div className="mb-10">

        <h1 className="text-4xl font-bold mb-3">
          Products
        </h1>

        <p className="text-gray-500">
          Explore our premium tech collection.
        </p>

      </div>

      {/* Search */}
      <div className="mb-8">

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
        />

      </div>


      <div className="mb-8 flex justify-end">

        <select 
          value={setSortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border rounded-xl px-4 py-3 outline-none"
        >

          <option value="default">
            Sort By
          </option>

          <option value="low-high">
            Price: Low to High
          </option>

          <option value="high-low">
            Price: High to Low
          </option>

          <option value="ratings">
            Ratings
          </option>

          <option value="name">
            Name
          </option> 

        </select>


      </div>

      {/* Categories */}
      <div className="flex gap-4 overflow-x-auto pb-4 mb-10">

        {categories.map((category) => (

          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-5 py-3 rounded-xl border whitespace-nowrap transition
              
              ${
                selectedCategory === category.id
                  ? "bg-black text-white"
                  : "bg-white hover:bg-gray-100"
              }
            `}
          >
            {category.icon} {category.name}
          </button>

        ))}

      </div>

      {/* Products Grid */}
      <ProductCard products={filteredProducts} />

    </div>
  );
};

export default Products;