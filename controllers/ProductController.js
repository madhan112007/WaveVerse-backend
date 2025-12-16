const Product = require('../models/ProductModel');

// Get all products
const getAllProducts = async (req, res) => {
    try {
        const { category, search, sort } = req.query;
        let query = {};
        
        if (category && category !== 'all') {
            query.category = category;
        }
        
        if (search) {
            query.$or = [
                { name: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } }
            ];
        }
        
        let sortOption = {};
        switch (sort) {
            case 'price-low': sortOption = { price: 1 }; break;
            case 'price-high': sortOption = { price: -1 }; break;
            case 'rating': sortOption = { rating: -1 }; break;
            default: sortOption = { name: 1 };
        }
        
        const products = await Product.find(query).sort(sortOption);
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get single product
const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create product (Admin only)
const createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update product (Admin only)
const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            { ...req.body, updatedAt: Date.now() },
            { new: true }
        );
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete product (Admin only)
const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
};