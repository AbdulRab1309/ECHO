import express from 'express';
import {
  getProducts,
  getProductBySlug,
  getRelatedProducts,
  getCategories,
} from '../controllers/productController.js';

const router = express.Router();

// Health check endpoint
router.get('/health', (req, res) => {
  res.json({ status: 'success', message: 'Backend is running' });
});

// Product routes
router.get('/products', getProducts);
router.get('/products/related', getRelatedProducts);
router.get('/products/:slug', getProductBySlug);
router.get('/categories', getCategories);

export default router;
