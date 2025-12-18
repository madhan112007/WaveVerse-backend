const axios = require('axios');

const API_BASE_URL = 'https://waveverse-backend.onrender.com';

const groceryProducts = [
    // Spices & Seasonings
    {
        name: "Turmeric Powder",
        description: "Pure turmeric powder for cooking and health benefits",
        category: "Spices & Seasonings",
        price: 45,
        originalPrice: 50,
        image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400",
        inStock: true,
        featured: true,
        rating: 4.5,
        reviews: 89,
        discount: 10
    },
    {
        name: "Red Chili Powder",
        description: "Hot and spicy red chili powder for authentic Indian taste",
        category: "Spices & Seasonings",
        price: 55,
        originalPrice: 60,
        image: "https://images.unsplash.com/photo-1583327117914-d5ee0db69c2a?w=400",
        inStock: true,
        rating: 4.3,
        reviews: 67,
        discount: 8
    },
    {
        name: "Cumin Seeds",
        description: "Whole cumin seeds for tempering and spice blends",
        category: "Spices & Seasonings",
        price: 85,
        image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400",
        inStock: true,
        rating: 4.4,
        reviews: 45
    },
    {
        name: "Coriander Powder",
        description: "Fresh ground coriander powder for daily cooking",
        category: "Spices & Seasonings",
        price: 40,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
        inStock: true,
        rating: 4.2,
        reviews: 78
    },
    {
        name: "Garam Masala",
        description: "Authentic blend of aromatic spices",
        category: "Spices & Seasonings",
        price: 95,
        originalPrice: 110,
        image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400",
        inStock: true,
        featured: true,
        rating: 4.6,
        reviews: 123,
        discount: 14
    },

    // Pulses & Grains
    {
        name: "Toor Dal",
        description: "Premium quality split pigeon peas",
        category: "Pulses & Grains",
        price: 120,
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400",
        inStock: true,
        rating: 4.3,
        reviews: 156
    },
    {
        name: "Basmati Rice",
        description: "Long grain aromatic basmati rice - 1kg",
        category: "Pulses & Grains",
        price: 180,
        originalPrice: 200,
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400",
        inStock: true,
        featured: true,
        rating: 4.7,
        reviews: 234,
        discount: 10
    },
    {
        name: "Moong Dal",
        description: "Split green gram dal for healthy meals",
        category: "Pulses & Grains",
        price: 110,
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400",
        inStock: true,
        rating: 4.4,
        reviews: 89
    },
    {
        name: "Chana Dal",
        description: "Split chickpeas for traditional Indian dishes",
        category: "Pulses & Grains",
        price: 95,
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400",
        inStock: true,
        rating: 4.2,
        reviews: 67
    },

    // Cooking Oils
    {
        name: "Sunflower Oil",
        description: "Refined sunflower cooking oil - 1L",
        category: "Cooking Oils",
        price: 140,
        originalPrice: 155,
        image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400",
        inStock: true,
        rating: 4.1,
        reviews: 145,
        discount: 10
    },
    {
        name: "Coconut Oil",
        description: "Pure coconut oil for cooking and health - 500ml",
        category: "Cooking Oils",
        price: 185,
        image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400",
        inStock: true,
        featured: true,
        rating: 4.5,
        reviews: 98
    },
    {
        name: "Mustard Oil",
        description: "Cold pressed mustard oil - 1L",
        category: "Cooking Oils",
        price: 165,
        image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400",
        inStock: true,
        rating: 4.3,
        reviews: 76
    },

    // Dairy Products
    {
        name: "Fresh Milk",
        description: "Farm fresh full cream milk - 1L",
        category: "Dairy Products",
        price: 55,
        image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400",
        inStock: true,
        rating: 4.4,
        reviews: 267
    },
    {
        name: "Paneer",
        description: "Fresh cottage cheese - 200g",
        category: "Dairy Products",
        price: 85,
        originalPrice: 95,
        image: "https://images.unsplash.com/photo-1631452180539-96aca7d48617?w=400",
        inStock: true,
        featured: true,
        rating: 4.6,
        reviews: 134,
        discount: 11
    },
    {
        name: "Greek Yogurt",
        description: "Thick and creamy Greek yogurt - 400g",
        category: "Dairy Products",
        price: 75,
        image: "https://images.unsplash.com/photo-1571212515416-fca88c6c4b3c?w=400",
        inStock: true,
        rating: 4.3,
        reviews: 89
    },

    // Snacks & Beverages
    {
        name: "Masala Tea",
        description: "Premium blend masala tea leaves - 250g",
        category: "Snacks & Beverages",
        price: 125,
        image: "https://images.unsplash.com/photo-1597318281675-d05ce2d2ecbd?w=400",
        inStock: true,
        rating: 4.5,
        reviews: 156
    },
    {
        name: "Roasted Almonds",
        description: "Lightly salted roasted almonds - 200g",
        category: "Snacks & Beverages",
        price: 245,
        originalPrice: 275,
        image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=400",
        inStock: true,
        featured: true,
        rating: 4.7,
        reviews: 198,
        discount: 11
    },
    {
        name: "Namkeen Mix",
        description: "Crunchy Indian snack mix - 300g",
        category: "Snacks & Beverages",
        price: 95,
        image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400",
        inStock: true,
        rating: 4.2,
        reviews: 87
    },

    // Household Items
    {
        name: "Dish Soap",
        description: "Lemon scented dishwashing liquid - 500ml",
        category: "Household Items",
        price: 65,
        image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400",
        inStock: true,
        rating: 4.1,
        reviews: 234
    },
    {
        name: "Laundry Detergent",
        description: "Concentrated laundry detergent powder - 1kg",
        category: "Household Items",
        price: 185,
        originalPrice: 210,
        image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400",
        inStock: true,
        rating: 4.3,
        reviews: 167,
        discount: 12
    },

    // Personal Care
    {
        name: "Herbal Shampoo",
        description: "Natural herbal shampoo for all hair types - 200ml",
        category: "Personal Care",
        price: 145,
        image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400",
        inStock: true,
        rating: 4.2,
        reviews: 123
    },
    {
        name: "Ayurvedic Soap",
        description: "Natural ayurvedic bathing soap - 100g",
        category: "Personal Care",
        price: 45,
        originalPrice: 55,
        image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400",
        inStock: true,
        rating: 4.4,
        reviews: 89,
        discount: 18
    }
];

async function addProducts() {
    try {
        console.log('Starting to add grocery products...');
        
        for (let i = 0; i < groceryProducts.length; i++) {
            const product = groceryProducts[i];
            try {
                const response = await axios.post(`${API_BASE_URL}/api/products`, product);
                console.log(`✓ Added: ${product.name}`);
            } catch (error) {
                console.log(`✗ Failed to add: ${product.name} - ${error.response?.data?.message || error.message}`);
            }
            
            // Small delay to avoid overwhelming the server
            await new Promise(resolve => setTimeout(resolve, 100));
        }
        
        console.log(`\nCompleted adding ${groceryProducts.length} grocery products!`);
    } catch (error) {
        console.error('Error adding products:', error.message);
    }
}

if (require.main === module) {
    addProducts();
}

module.exports = { groceryProducts };