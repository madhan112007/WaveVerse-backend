const mongoose = require('mongoose');
require('dotenv').config();

const recipeSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  prepTime: String,
  cookTime: String,
  servings: Number,
  difficulty: String,
  ingredients: [String],
  instructions: [String],
  category: String,
  rating: Number,
  reviews: Number
});

const Recipe = mongoose.model('Recipe', recipeSchema);

const recipes = [
  {
    title: 'Classic Margherita Pizza',
    description: 'Traditional Italian pizza with fresh mozzarella, tomatoes, and basil',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&h=400&fit=crop',
    prepTime: '20 mins',
    cookTime: '15 mins',
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      '2 cups all-purpose flour',
      '1 cup warm water',
      '2 tsp active dry yeast',
      '1 tsp sugar',
      '2 tbsp olive oil',
      '1 tsp salt',
      '1 cup tomato sauce',
      '200g fresh mozzarella',
      'Fresh basil leaves',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Mix yeast, sugar, and warm water. Let sit for 5 minutes',
      'Add flour, salt, and olive oil. Knead for 10 minutes',
      'Let dough rise for 1 hour',
      'Roll out dough and spread tomato sauce',
      'Add mozzarella and bake at 220°C for 15 minutes',
      'Top with fresh basil before serving'
    ],
    category: 'Main Course',
    rating: 4.8,
    reviews: 156
  },
  {
    title: 'Vegetable Biryani',
    description: 'Aromatic Indian rice dish with mixed vegetables and spices',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&h=400&fit=crop',
    prepTime: '30 mins',
    cookTime: '40 mins',
    servings: 6,
    difficulty: 'Medium',
    ingredients: [
      '2 cups basmati rice',
      '2 cups mixed vegetables',
      '2 onions, sliced',
      '2 tomatoes, chopped',
      '1 cup yogurt',
      '4 tbsp ghee',
      '2 tsp biryani masala',
      '1 tsp turmeric',
      'Fresh mint and coriander',
      'Salt to taste'
    ],
    instructions: [
      'Soak rice for 30 minutes',
      'Fry onions until golden brown',
      'Add vegetables and spices, cook for 10 minutes',
      'Layer rice and vegetable mixture',
      'Cook on low heat for 20 minutes',
      'Garnish with fried onions and herbs'
    ],
    category: 'Main Course',
    rating: 4.9,
    reviews: 203
  },
  {
    title: 'Greek Salad',
    description: 'Fresh Mediterranean salad with feta cheese and olives',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=400&fit=crop',
    prepTime: '15 mins',
    cookTime: '0 mins',
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
      '4 tomatoes, chopped',
      '1 cucumber, sliced',
      '1 red onion, sliced',
      '1 bell pepper, chopped',
      '200g feta cheese',
      '1 cup black olives',
      '3 tbsp olive oil',
      '1 tbsp lemon juice',
      'Oregano',
      'Salt and pepper'
    ],
    instructions: [
      'Chop all vegetables into bite-sized pieces',
      'Combine vegetables in a large bowl',
      'Add olives and crumbled feta cheese',
      'Drizzle with olive oil and lemon juice',
      'Season with oregano, salt, and pepper',
      'Toss gently and serve immediately'
    ],
    category: 'Salad',
    rating: 4.7,
    reviews: 142
  },
  {
    title: 'Chocolate Chip Cookies',
    description: 'Classic homemade cookies with chocolate chips',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&h=400&fit=crop',
    prepTime: '15 mins',
    cookTime: '12 mins',
    servings: 24,
    difficulty: 'Easy',
    ingredients: [
      '2 cups all-purpose flour',
      '1 cup butter, softened',
      '3/4 cup brown sugar',
      '1/2 cup white sugar',
      '2 eggs',
      '2 tsp vanilla extract',
      '1 tsp baking soda',
      '1/2 tsp salt',
      '2 cups chocolate chips'
    ],
    instructions: [
      'Preheat oven to 180°C',
      'Cream butter and sugars together',
      'Beat in eggs and vanilla',
      'Mix in flour, baking soda, and salt',
      'Fold in chocolate chips',
      'Bake for 10-12 minutes until golden'
    ],
    category: 'Dessert',
    rating: 4.9,
    reviews: 287
  },
  {
    title: 'Paneer Butter Masala',
    description: 'Creamy Indian curry with cottage cheese',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&h=400&fit=crop',
    prepTime: '20 mins',
    cookTime: '25 mins',
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      '400g paneer, cubed',
      '3 tomatoes, pureed',
      '1 onion, chopped',
      '1 cup cream',
      '2 tbsp butter',
      '2 tsp garam masala',
      '1 tsp red chili powder',
      '1 tsp kasuri methi',
      'Fresh coriander',
      'Salt to taste'
    ],
    instructions: [
      'Fry paneer cubes until golden',
      'Sauté onions in butter until soft',
      'Add tomato puree and spices',
      'Cook for 10 minutes',
      'Add cream and paneer',
      'Garnish with kasuri methi and coriander'
    ],
    category: 'Main Course',
    rating: 4.8,
    reviews: 198
  },
  {
    title: 'Avocado Toast',
    description: 'Healthy breakfast with mashed avocado on toasted bread',
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=600&h=400&fit=crop',
    prepTime: '5 mins',
    cookTime: '5 mins',
    servings: 2,
    difficulty: 'Easy',
    ingredients: [
      '2 slices whole wheat bread',
      '1 ripe avocado',
      '1 tbsp lemon juice',
      '2 eggs (optional)',
      'Cherry tomatoes',
      'Red pepper flakes',
      'Salt and pepper',
      'Olive oil'
    ],
    instructions: [
      'Toast bread until golden',
      'Mash avocado with lemon juice, salt, and pepper',
      'Spread avocado on toast',
      'Top with sliced tomatoes',
      'Add fried egg if desired',
      'Sprinkle with red pepper flakes'
    ],
    category: 'Breakfast',
    rating: 4.6,
    reviews: 124
  },
  {
    title: 'Chicken Tikka Masala',
    description: 'Popular Indian curry with marinated chicken in creamy tomato sauce',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&h=400&fit=crop',
    prepTime: '30 mins',
    cookTime: '30 mins',
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      '500g chicken breast, cubed',
      '1 cup yogurt',
      '3 tomatoes, pureed',
      '1 cup cream',
      '2 onions, chopped',
      '3 tbsp tikka masala',
      '2 tsp garam masala',
      '1 tsp turmeric',
      'Fresh coriander',
      'Salt to taste'
    ],
    instructions: [
      'Marinate chicken in yogurt and spices for 2 hours',
      'Grill or pan-fry chicken until cooked',
      'Sauté onions until golden',
      'Add tomato puree and spices',
      'Add cream and cooked chicken',
      'Simmer for 10 minutes and garnish'
    ],
    category: 'Main Course',
    rating: 4.9,
    reviews: 245
  },
  {
    title: 'Caesar Salad',
    description: 'Classic salad with romaine lettuce, croutons, and Caesar dressing',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=600&h=400&fit=crop',
    prepTime: '15 mins',
    cookTime: '0 mins',
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
      '1 head romaine lettuce',
      '1 cup croutons',
      '1/2 cup parmesan cheese',
      '2 cloves garlic',
      '2 anchovy fillets',
      '1 egg yolk',
      '2 tbsp lemon juice',
      '1/2 cup olive oil',
      'Salt and pepper'
    ],
    instructions: [
      'Wash and chop romaine lettuce',
      'Blend garlic, anchovies, egg yolk, and lemon juice',
      'Slowly add olive oil while blending',
      'Toss lettuce with dressing',
      'Add croutons and parmesan',
      'Serve immediately'
    ],
    category: 'Salad',
    rating: 4.7,
    reviews: 167
  },
  {
    title: 'Banana Bread',
    description: 'Moist and delicious homemade banana bread',
    image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&h=400&fit=crop',
    prepTime: '15 mins',
    cookTime: '60 mins',
    servings: 8,
    difficulty: 'Easy',
    ingredients: [
      '3 ripe bananas, mashed',
      '2 cups all-purpose flour',
      '1 cup sugar',
      '1/2 cup butter, melted',
      '2 eggs',
      '1 tsp baking soda',
      '1 tsp vanilla extract',
      '1/2 tsp salt',
      '1/2 cup walnuts (optional)'
    ],
    instructions: [
      'Preheat oven to 175°C',
      'Mix mashed bananas with melted butter',
      'Beat in eggs, sugar, and vanilla',
      'Add flour, baking soda, and salt',
      'Fold in walnuts if using',
      'Bake for 60 minutes until golden'
    ],
    category: 'Dessert',
    rating: 4.8,
    reviews: 213
  },
  {
    title: 'Pad Thai',
    description: 'Thai stir-fried noodles with vegetables and peanuts',
    image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=600&h=400&fit=crop',
    prepTime: '20 mins',
    cookTime: '15 mins',
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      '200g rice noodles',
      '2 eggs',
      '1 cup bean sprouts',
      '2 spring onions',
      '1/4 cup peanuts, crushed',
      '3 tbsp fish sauce',
      '2 tbsp tamarind paste',
      '2 tbsp sugar',
      'Lime wedges',
      'Chili flakes'
    ],
    instructions: [
      'Soak rice noodles in warm water',
      'Beat eggs and scramble in wok',
      'Add drained noodles to wok',
      'Mix fish sauce, tamarind, and sugar',
      'Add sauce and vegetables',
      'Top with peanuts and serve with lime'
    ],
    category: 'Main Course',
    rating: 4.8,
    reviews: 189
  },
  {
    title: 'Smoothie Bowl',
    description: 'Healthy breakfast bowl with blended fruits and toppings',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600&h=400&fit=crop',
    prepTime: '10 mins',
    cookTime: '0 mins',
    servings: 2,
    difficulty: 'Easy',
    ingredients: [
      '2 frozen bananas',
      '1 cup frozen berries',
      '1/2 cup yogurt',
      '1/4 cup milk',
      'Granola',
      'Fresh fruits',
      'Chia seeds',
      'Honey',
      'Coconut flakes'
    ],
    instructions: [
      'Blend frozen fruits with yogurt and milk',
      'Pour into bowls',
      'Top with granola and fresh fruits',
      'Add chia seeds and coconut flakes',
      'Drizzle with honey',
      'Serve immediately'
    ],
    category: 'Breakfast',
    rating: 4.7,
    reviews: 156
  },
  {
    title: 'Spaghetti Carbonara',
    description: 'Classic Italian pasta with creamy egg sauce and bacon',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600&h=400&fit=crop',
    prepTime: '10 mins',
    cookTime: '20 mins',
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      '400g spaghetti',
      '200g bacon, diced',
      '4 egg yolks',
      '1 cup parmesan cheese',
      '2 cloves garlic',
      'Black pepper',
      'Salt',
      'Fresh parsley'
    ],
    instructions: [
      'Cook spaghetti according to package',
      'Fry bacon until crispy',
      'Mix egg yolks with parmesan',
      'Drain pasta, reserve 1 cup water',
      'Toss hot pasta with egg mixture',
      'Add bacon and serve with pepper'
    ],
    category: 'Main Course',
    rating: 4.9,
    reviews: 234
  },
  {
    title: 'Mango Lassi',
    description: 'Refreshing Indian yogurt drink with mango',
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=600&h=400&fit=crop',
    prepTime: '5 mins',
    cookTime: '0 mins',
    servings: 2,
    difficulty: 'Easy',
    ingredients: [
      '2 ripe mangoes',
      '1 cup yogurt',
      '1/2 cup milk',
      '2 tbsp sugar',
      '1/4 tsp cardamom',
      'Ice cubes',
      'Saffron strands (optional)'
    ],
    instructions: [
      'Peel and chop mangoes',
      'Blend mango, yogurt, milk, and sugar',
      'Add cardamom powder',
      'Blend until smooth',
      'Add ice cubes and blend again',
      'Garnish with saffron and serve chilled'
    ],
    category: 'Beverage',
    rating: 4.8,
    reviews: 178
  },
  {
    title: 'Vegetable Stir Fry',
    description: 'Quick and healthy mixed vegetable stir fry',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&h=400&fit=crop',
    prepTime: '15 mins',
    cookTime: '10 mins',
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
      '2 cups mixed vegetables',
      '2 tbsp soy sauce',
      '1 tbsp sesame oil',
      '2 cloves garlic',
      '1 inch ginger',
      '1 tbsp cornstarch',
      '2 tbsp vegetable oil',
      'Salt and pepper',
      'Sesame seeds'
    ],
    instructions: [
      'Chop all vegetables uniformly',
      'Heat oil in wok on high heat',
      'Add garlic and ginger, stir for 30 seconds',
      'Add vegetables and stir fry for 5 minutes',
      'Mix soy sauce with cornstarch',
      'Add sauce, toss, and garnish with sesame seeds'
    ],
    category: 'Main Course',
    rating: 4.6,
    reviews: 143
  },
  {
    title: 'Tiramisu',
    description: 'Classic Italian coffee-flavored dessert',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&h=400&fit=crop',
    prepTime: '30 mins',
    cookTime: '0 mins',
    servings: 8,
    difficulty: 'Medium',
    ingredients: [
      '6 egg yolks',
      '3/4 cup sugar',
      '500g mascarpone cheese',
      '2 cups strong coffee',
      '3 tbsp coffee liqueur',
      '24 ladyfinger biscuits',
      'Cocoa powder',
      '1 cup heavy cream'
    ],
    instructions: [
      'Whisk egg yolks and sugar until thick',
      'Fold in mascarpone and whipped cream',
      'Mix coffee with liqueur',
      'Dip ladyfingers in coffee mixture',
      'Layer biscuits and cream mixture',
      'Dust with cocoa and refrigerate 4 hours'
    ],
    category: 'Dessert',
    rating: 4.9,
    reviews: 267
  }
];

mongoose.connect(process.env.MONGO_URL)
  .then(async () => {
    console.log('Connected to MongoDB');
    
    // Clear existing recipes
    await Recipe.deleteMany({});
    console.log('Cleared existing recipes');
    
    // Insert new recipes
    await Recipe.insertMany(recipes);
    console.log(`Added ${recipes.length} recipes to database`);
    
    process.exit(0);
  })
  .catch(err => {
    console.error('Error:', err);
    process.exit(1);
  });
