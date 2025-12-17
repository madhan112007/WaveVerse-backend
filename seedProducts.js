const mongoose = require('mongoose');
require('dotenv').config();

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  originalPrice: Number,
  image: String,
  description: String,
  inStock: Boolean,
  rating: Number,
  reviews: Number,
  discount: Number
});

const Product = mongoose.model('Product', productSchema);

const products = [
  {
    name: 'Organic Red Apples',
    category: 'fruits',
    price: 125,
    originalPrice: 180,
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=400&fit=crop',
    description: 'Fresh, crispy organic red apples from local farms',
    inStock: true,
    rating: 4.8,
    reviews: 124,
    discount: 30
  },
  {
    name: 'Farm Fresh Milk',
    category: 'dairy',
    price: 48,
    originalPrice: 65,
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=400&fit=crop',
    description: 'Pure, fresh milk from grass-fed cows',
    inStock: true,
    rating: 4.9,
    reviews: 89,
    discount: 25
  },
  {
    name: 'Whole Wheat Bread',
    category: 'bakery',
    price: 50,
    originalPrice: 85,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop',
    description: 'Freshly baked whole wheat bread with seeds',
    inStock: true,
    rating: 4.6,
    reviews: 67,
    discount: 40
  },
  {
    name: 'Free Range Eggs',
    category: 'dairy',
    price: 175,
    originalPrice: 220,
    image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=400&fit=crop',
    description: 'Fresh eggs from free-range chickens',
    inStock: true,
    rating: 4.7,
    reviews: 156,
    discount: 20
  },
  {
    name: 'Organic Spinach',
    category: 'vegetables',
    price: 35,
    originalPrice: 35,
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=400&fit=crop',
    description: 'Fresh organic spinach leaves, perfect for salads',
    inStock: true,
    rating: 4.5,
    reviews: 43,
    discount: 0
  },
  {
    name: 'Organic Bananas',
    category: 'fruits',
    price: 60,
    originalPrice: 60,
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=400&fit=crop',
    description: 'Sweet, ripe organic bananas',
    inStock: true,
    rating: 4.4,
    reviews: 78,
    discount: 0
  },
  {
    name: 'Greek Yogurt',
    category: 'dairy',
    price: 120,
    originalPrice: 120,
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=400&fit=crop',
    description: 'Creamy Greek yogurt with probiotics',
    inStock: true,
    rating: 4.8,
    reviews: 92,
    discount: 0
  },
  {
    name: 'Sourdough Bread',
    category: 'bakery',
    price: 150,
    originalPrice: 150,
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=400&fit=crop',
    description: 'Artisan sourdough bread with crispy crust',
    inStock: true,
    rating: 4.9,
    reviews: 134,
    discount: 0
  },
  {
    name: 'Fresh Tomatoes',
    category: 'vegetables',
    price: 40,
    originalPrice: 50,
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&h=400&fit=crop',
    description: 'Juicy, red tomatoes perfect for cooking',
    inStock: true,
    rating: 4.6,
    reviews: 88,
    discount: 20
  },
  {
    name: 'Basmati Rice',
    category: 'grains',
    price: 180,
    originalPrice: 220,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop',
    description: 'Premium quality basmati rice',
    inStock: true,
    rating: 4.7,
    reviews: 156,
    discount: 18
  },
  {
    name: 'Fresh Carrots',
    category: 'vegetables',
    price: 45,
    originalPrice: 60,
    image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=400&fit=crop',
    description: 'Crunchy, sweet carrots rich in vitamins',
    inStock: true,
    rating: 4.5,
    reviews: 72,
    discount: 25
  },
  {
    name: 'Fresh Oranges',
    category: 'fruits',
    price: 90,
    originalPrice: 120,
    image: 'https://images.unsplash.com/photo-1547514701-42782101795e?w=400&h=400&fit=crop',
    description: 'Juicy oranges packed with vitamin C',
    inStock: true,
    rating: 4.7,
    reviews: 95,
    discount: 25
  },
  {
    name: 'Cheddar Cheese',
    category: 'dairy',
    price: 280,
    originalPrice: 350,
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&h=400&fit=crop',
    description: 'Aged cheddar cheese with rich flavor',
    inStock: true,
    rating: 4.8,
    reviews: 112,
    discount: 20
  },
  {
    name: 'Fresh Broccoli',
    category: 'vegetables',
    price: 55,
    originalPrice: 70,
    image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400&h=400&fit=crop',
    description: 'Fresh green broccoli florets',
    inStock: true,
    rating: 4.4,
    reviews: 64,
    discount: 21
  },
  {
    name: 'Strawberries',
    category: 'fruits',
    price: 150,
    originalPrice: 200,
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=400&fit=crop',
    description: 'Sweet, fresh strawberries',
    inStock: true,
    rating: 4.9,
    reviews: 145,
    discount: 25
  },
  {
    name: 'Croissants',
    category: 'bakery',
    price: 120,
    originalPrice: 150,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop',
    description: 'Buttery, flaky French croissants',
    inStock: true,
    rating: 4.8,
    reviews: 98,
    discount: 20
  },
  {
    name: 'Bell Peppers',
    category: 'vegetables',
    price: 65,
    originalPrice: 80,
    image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400&h=400&fit=crop',
    description: 'Colorful bell peppers, mixed pack',
    inStock: true,
    rating: 4.6,
    reviews: 76,
    discount: 19
  },
  {
    name: 'Mango',
    category: 'fruits',
    price: 140,
    originalPrice: 180,
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&h=400&fit=crop',
    description: 'Sweet, ripe mangoes',
    inStock: true,
    rating: 4.9,
    reviews: 187,
    discount: 22
  },
  {
    name: 'Butter',
    category: 'dairy',
    price: 95,
    originalPrice: 120,
    image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400&h=400&fit=crop',
    description: 'Creamy salted butter',
    inStock: true,
    rating: 4.7,
    reviews: 103,
    discount: 21
  },
  {
    name: 'Cucumber',
    category: 'vegetables',
    price: 30,
    originalPrice: 40,
    image: 'https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=400&h=400&fit=crop',
    description: 'Fresh, crisp cucumbers',
    inStock: true,
    rating: 4.5,
    reviews: 58,
    discount: 25
  }
];

mongoose.connect(process.env.MONGO_URL)
  .then(async () => {
    console.log('Connected to MongoDB');
    
    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');
    
    // Insert new products
    await Product.insertMany(products);
    console.log(`Added ${products.length} products to database`);
    
    process.exit(0);
  })
  .catch(err => {
    console.error('Error:', err);
    process.exit(1);
  });