const products = [

    // =========================
    // 📱 PHONES
    // =========================

    {
        id: 1,
        name: "Samsung Galaxy Z Fold 5",
        image: "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?q=80&w=1000&auto=format&fit=crop",
        description: "Experience the ultimate productivity tool with a massive folding screen and powerful multitasking capabilities.",
        price: 1799.99,
        category: "Phones",
        ratings: 4.8,
        reviews: Math.floor(Math.random() * 100),

        features: [
            "7.6-inch Dynamic AMOLED display",
            "Snapdragon 8 Gen 2 processor",
            "Multi-window multitasking",
            "S Pen support",
            "4400mAh battery"
        ]
    },

    {
        id: 2,
        name: "iPhone 15 Pro Max",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1000&auto=format&fit=crop",
        description: "Apple’s most advanced iPhone with titanium build, A17 Pro chip, and incredible cameras.",
        price: 1499.99,
        category: "Phones",
        ratings: 4.9,
        reviews: Math.floor(Math.random() * 100),

        features: [
            "Titanium design",
            "A17 Pro chip",
            "48MP Pro camera system",
            "USB-C charging",
            "120Hz ProMotion display"
        ]
    },

    {
        id: 3,
        name: "Google Pixel 8 Pro",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1000&auto=format&fit=crop",
        description: "AI-powered smartphone with exceptional photography and a clean Android experience.",
        price: 999.99,
        category: "Phones",
        ratings: 4.7,
        reviews: Math.floor(Math.random() * 100),

        features: [
            "Google Tensor G3 chip",
            "AI photo editing tools",
            "120Hz OLED display",
            "Advanced Night Sight camera",
            "Pure Android experience"
        ]
    },



    // =========================
    // 💻 TABLETS
    // =========================

    {
        id: 4,
        name: "iPad Pro 12.9-inch (M2)",
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1000&auto=format&fit=crop",
        description: "Astonishing performance and a brilliant Liquid Retina XDR display. The ultimate iPad experience.",
        price: 1099.00,
        category: "Tablets",
        ratings: 4.9,
        reviews: Math.floor(Math.random() * 100),

        features: [
            "Apple M2 chip",
            "12.9-inch Liquid Retina XDR display",
            "Apple Pencil support",
            "Thunderbolt connectivity",
            "Face ID security"
        ]
    },

    {
        id: 5,
        name: "Samsung Galaxy Tab S9 Ultra",
        image: "https://images.unsplash.com/photo-1661595677106-fcc3f6ed7531?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2Ftc3VuZyUyMGdhbGF4eSUyMHRhYiUyMHM5fGVufDB8fDB8fHww",
        description: "Large AMOLED display tablet built for entertainment and productivity.",
        price: 1199.99,
        category: "Tablets",
        ratings: 4.8,
        reviews: Math.floor(Math.random() * 100),

        features: [
            "14.6-inch AMOLED display",
            "Snapdragon 8 Gen 2",
            "Included S Pen",
            "Water and dust resistance",
            "Massive 11200mAh battery"
        ]
    },

    {
        id: 6,
        name: "Microsoft Surface Pro 9",
        image: "https://images.unsplash.com/photo-1596347909615-401e4242b3b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWljcm9zb2Z0JTIwc3VyZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
        description: "2-in-1 tablet and laptop with premium design and powerful Windows experience.",
        price: 1399.99,
        category: "Tablets",
        ratings: 4.7,
        reviews: Math.floor(Math.random() * 100),

        features: [
            "Intel Core i7 processor",
            "13-inch PixelSense touchscreen",
            "Detachable keyboard support",
            "Windows 11",
            "Built-in kickstand"
        ]
    },



    // =========================
    // 🎧 EARBUDS
    // =========================

    {
        id: 7,
        name: "AirPods Pro 2",
        image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=1000&auto=format&fit=crop",
        description: "Premium wireless earbuds with active noise cancellation and spatial audio.",
        price: 249.99,
        category: "Earbuds",
        ratings: 4.8,
        reviews: Math.floor(Math.random() * 100),

        features: [
            "Active Noise Cancellation",
            "Spatial Audio support",
            "MagSafe charging case",
            "Sweat and water resistant",
            "H2 chip performance"
        ]
    },

    {
        id: 8,
        name: "Samsung Galaxy Buds 2 Pro",
        image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=1000&auto=format&fit=crop",
        description: "Immersive Hi-Fi sound earbuds with intelligent ANC technology.",
        price: 229.99,
        category: "Earbuds",
        ratings: 4.7,
        reviews: Math.floor(Math.random() * 100),

        features: [
            "24-bit Hi-Fi audio",
            "Intelligent Active Noise Cancellation",
            "360 Audio support",
            "Comfortable lightweight design",
            "IPX7 water resistance"
        ]
    },

    {
        id: 9,
        name: "Sony WF-1000XM5",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1000&auto=format&fit=crop",
        description: "Compact premium earbuds with industry-leading noise cancellation.",
        price: 299.99,
        category: "Earbuds",
        ratings: 4.9,
        reviews: Math.floor(Math.random() * 100),

        features: [
            "Industry-leading ANC",
            "8-hour battery life",
            "High-resolution audio",
            "Crystal clear call quality",
            "Multipoint Bluetooth pairing"
        ]
    },



    // =========================
    // 🎮 HEADSETS
    // =========================

    {
        id: 10,
        name: "Sony WH-1000XM5",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
        description: "Industry-leading noise cancellation headphones with premium sound quality.",
        price: 399.99,
        category: "Headsets",
        ratings: 4.8,
        reviews: Math.floor(Math.random() * 100),

        features: [
            "30-hour battery life",
            "Adaptive noise cancellation",
            "Premium comfort design",
            "Touch sensor controls",
            "LDAC high-resolution audio"
        ]
    },

    {
        id: 11,
        name: "Bose QuietComfort Ultra",
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1000&auto=format&fit=crop",
        description: "Breakthrough spatialized audio for more immersive listening and world-class noise cancellation.",
        price: 429.00,
        category: "Headsets",
        ratings: 4.7,
        reviews: Math.floor(Math.random() * 100),

        features: [
            "Immersive spatial audio",
            "World-class ANC",
            "Bluetooth multipoint",
            "Luxury comfort padding",
            "24-hour battery life"
        ]
    },

    {
        id: 12,
        name: "Razer BlackShark V2",
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=1000&auto=format&fit=crop",
        description: "Esports gaming headset with crystal-clear microphone and immersive surround sound.",
        price: 179.99,
        category: "Headsets",
        ratings: 4.6,
        reviews: Math.floor(Math.random() * 100),

        features: [
            "THX Spatial Audio",
            "Detachable cardioid mic",
            "Memory foam ear cushions",
            "Lightweight esports design",
            "Advanced passive noise isolation"
        ]
    },



    // =========================
    // 🔋 POWER BANKS
    // =========================

    {
        id: 13,
        name: "Belkin MagSafe Charger",
        image: "https://images.unsplash.com/photo-1615526675045-07531f986a9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFnc2FmZXxlbnwwfHwwfHx8MA%3D%3D",
        description: "Reliable magnetic wireless charger with fast charging support for modern smartphones.",
        price: 89.99,
        category: "Powerbanks",
        ratings: 4.4,
        reviews: Math.floor(Math.random() * 100),

        features: [
            "MagSafe magnetic alignment",
            "Fast wireless charging",
            "Compact portable design",
            "USB-C connectivity",
            "LED charging indicator"
        ]
    },

    {
        id: 14,
        name: "Anker PowerCore 26800",
        image: "https://images.unsplash.com/photo-1632156752398-2b2cb4e6c907?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5rZXIlMjBwb3dlcmNvcmV8ZW58MHx8MHx8fDA%3D",
        description: "High-capacity portable power bank with fast charging support and multiple USB ports.",
        price: 119.99,
        category: "Powerbanks",
        ratings: 4.8,
        reviews: Math.floor(Math.random() * 100),

        features: [
            "26800mAh battery capacity",
            "Triple USB output ports",
            "PowerIQ fast charging",
            "Travel-friendly design",
            "Universal device compatibility"
        ]
    },

    {
        id: 15,
        name: "Baseus Blade Laptop Power Bank",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?q=80&w=1000&auto=format&fit=crop",
        description: "Ultra-slim 100W power bank capable of charging laptops, tablets, and smartphones.",
        price: 149.99,
        category: "Powerbanks",
        ratings: 4.7,
        reviews: Math.floor(Math.random() * 100),

        features: [
            "100W USB-C fast charging",
            "20000mAh battery capacity",
            "Laptop charging support",
            "Ultra-slim design",
            "Digital battery display"
        ]
    }

]

export default products



export const categories = [
    { id: 'all', name: 'All Products', icon: '🛍️' },
    { id: 'phones', name: 'Phones', icon: '📱' },
    { id: 'tablets', name: 'Tablets', icon: '💻' },
    { id: 'earbuds', name: 'Earbuds', icon: '🎧' },
    { id: 'headsets', name: 'Headsets', icon: '🎮' },
    { id: 'powerbanks', name: 'Power Banks', icon: '🔋' },
]