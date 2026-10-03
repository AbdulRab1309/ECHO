import { products, categories } from '../data/catalog.js';

export const getProducts = (req, res) => {
  const { category, q } = req.query;
  let results = products;

  if (category && category !== 'all') {
    results = results.filter((p) => p.category === category);
  }

  if (q) {
    const query = q.trim().toLowerCase();
    if (query) {
      results = results.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.tagline.toLowerCase().includes(query) ||
          p.shortDescription.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
      );
    }
  }

  res.json(results);
};

export const getProductBySlug = (req, res) => {
  const { slug } = req.params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  res.json(product);
};

export const getRelatedProducts = (req, res) => {
  const { slugs } = req.query;
  if (!slugs) {
    return res.json([]);
  }

  const slugArray = slugs.split(',');
  const related = slugArray
    .map((s) => products.find((p) => p.slug === s))
    .filter(Boolean);

  res.json(related);
};

export const getCategories = (req, res) => {
  res.json(categories);
};
