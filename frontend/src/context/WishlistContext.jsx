import { createContext, useContext, useEffect, useState } from 'react'

const wishlistContext = createContext();

export const WishlistProvider = ({ children }) => {

    const [wishlist, setWishlist] = useState(() => {
        const saved = localStorage.getItem("wishList");
        return saved ? JSON.parse(saved) : [];
    })

    useEffect(() => {
        localStorage.setItem("wishList", JSON.stringify(wishlist));
    }, [wishlist])


    const addToWishlist = (product) => {

        const exists = wishlist.find(item => item.id === product.id);

        if (!exists) {
            setWishlist([...wishlist, product]);
        }

    }

    const removeFromWishlist = (id) => {
        setWishlist(
            wishlist.filter(item => item.id !== id)
        )
    }

    const isInWishlist = (id) => {
        return wishlist.some(item => item.id === id);
    }

    return (
        <wishlistContext.Provider
            value={{
                wishlist,
                addToWishlist,
                removeFromWishlist,
                isInWishlist
            }}
        >
            {children}
        </wishlistContext.Provider>
    )

}


export const useWishlist = () => useContext(wishlistContext);
