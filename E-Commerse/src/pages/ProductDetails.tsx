import React, { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  StarIcon,
  HeartIcon,
  ShoppingCartIcon,
  MinusIcon,
  PlusIcon,
  TruckIcon,
  ShieldCheckIcon,
  ChevronRightIcon,
  CheckCircleIcon,
  AlertTriangleIcon,
  XCircleIcon,
  ZapIcon,
  UserIcon,
  ThumbsUpIcon } from
'lucide-react';
import { products, formatPrice, Product } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { useCart } from '../data/cartContext';
const fadeUp = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0
  }
};
const dummyReviews = [
{
  id: '1',
  name: 'Ali Hassan',
  rating: 5,
  date: '2 weeks ago',
  title: 'Absolutely amazing product!',
  body: 'Exceeded my expectations. Build quality is top-notch and performance is incredible. Highly recommend for anyone looking to upgrade their setup.',
  helpful: 24
},
{
  id: '2',
  name: 'Sara Khan',
  rating: 4,
  date: '1 month ago',
  title: 'Great value for money',
  body: 'Very satisfied with this purchase. Works exactly as described. Shipping was fast and packaging was secure. Would buy again.',
  helpful: 18
},
{
  id: '3',
  name: 'Usman Ahmed',
  rating: 5,
  date: '1 month ago',
  title: 'Best in its class',
  body: 'I compared this with several alternatives and this one stands out. The specs are genuine and real-world performance matches the benchmarks.',
  helpful: 31
},
{
  id: '4',
  name: 'Fatima Noor',
  rating: 4,
  date: '2 months ago',
  title: 'Solid purchase',
  body: 'Good product overall. Minor packaging issue but the product itself is flawless. Customer support was helpful when I reached out.',
  helpful: 12
}];

export function ProductDetails() {
  const { slug } = useParams<{
    slug: string;
  }>();
  const { addToCart, isInCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);
  const product = useMemo(() => products.find((p) => p.slug === slug), [slug]);
  if (!product) {
    return (
      <main className="min-h-screen pt-24 pb-16 bg-bg flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-6xl font-bold text-white mb-4">
            404
          </h1>
          <p className="text-text-secondary mb-6">Product not found</p>
          <Link
            to="/products"
            className="px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary-light transition-colors">
            
            Browse Products
          </Link>
        </div>
      </main>);

  }
  const imageVariants = [
  product.image,
  product.image.replace('w=400', 'w=500').replace('h=400', 'h=500'),
  product.image.replace('fit=crop', 'fit=crop&q=80'),
  product.image.replace('w=400', 'w=600').replace('h=400', 'h=600')];

  const relatedProducts = products.
  filter((p) => p.category === product.category && p.id !== product.id).
  slice(0, 6);
  const stockStatus =
  product.stock === 0 ?
  {
    label: 'Out of Stock',
    color: 'text-danger',
    icon: XCircleIcon
  } :
  product.stock <= 5 ?
  {
    label: `Only ${product.stock} left`,
    color: 'text-warning',
    icon: AlertTriangleIcon
  } :
  {
    label: 'In Stock',
    color: 'text-success',
    icon: CheckCircleIcon
  };
  const ratingDistribution = [
  {
    stars: 5,
    percent: 65
  },
  {
    stars: 4,
    percent: 22
  },
  {
    stars: 3,
    percent: 8
  },
  {
    stars: 2,
    percent: 3
  },
  {
    stars: 1,
    percent: 2
  }];

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };
  return (
    <motion.main
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      transition={{
        duration: 0.4
      }}
      className="min-h-screen pt-24 pb-16 bg-bg">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.nav
          {...fadeUp}
          transition={{
            delay: 0.1
          }}
          className="flex items-center gap-2 text-sm text-text-muted mb-8">
          
          <Link to="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRightIcon className="w-3.5 h-3.5" />
          <Link to="/products" className="hover:text-primary transition-colors">
            Products
          </Link>
          <ChevronRightIcon className="w-3.5 h-3.5" />
          <Link
            to={`/products?category=${product.category}`}
            className="hover:text-primary transition-colors">
            
            {product.category}
          </Link>
          <ChevronRightIcon className="w-3.5 h-3.5" />
          <span className="text-text-secondary truncate max-w-[200px]">
            {product.name}
          </span>
        </motion.nav>

        {/* Product Main */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 mb-16">
          {/* Image Gallery */}
          <motion.div
            {...fadeUp}
            transition={{
              delay: 0.15
            }}>
            
            <div
              className="relative rounded-card overflow-hidden aspect-square mb-4"
              style={{
                background: 'rgba(13, 21, 38, 0.7)',
                border: '1px solid rgba(255,255,255,0.08)'
              }}>
              
              <img
                src={imageVariants[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover" />
              
              {product.discountPercent && product.discountPercent > 0 &&
              <span className="absolute top-4 left-4 px-3 py-1 bg-danger text-white text-sm font-bold rounded-full">
                  -{product.discountPercent}%
                </span>
              }
            </div>
            <div className="grid grid-cols-4 gap-3">
              {imageVariants.map((img, i) =>
              <button
                key={i}
                onClick={() => setSelectedImage(i)}
                className={`rounded-lg overflow-hidden aspect-square border-2 transition-colors ${selectedImage === i ? 'border-primary' : 'border-transparent hover:border-white/20'}`}
                style={{
                  background: 'rgba(13, 21, 38, 0.7)'
                }}>
                
                  <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover" />
                
                </button>
              )}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            {...fadeUp}
            transition={{
              delay: 0.2
            }}
            className="flex flex-col">
            
            {/* Brand + Category */}
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-1 rounded-full bg-primary/15 text-primary text-xs font-medium">
                {product.category}
              </span>
              <span className="px-2.5 py-1 rounded-full bg-white/5 text-text-secondary text-xs font-medium border border-border">
                {product.brand}
              </span>
            </div>

            {/* Name */}
            <h1 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({
                  length: 5
                }).map((_, i) =>
                <StarIcon
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(product.averageRating) ? 'text-warning fill-warning' : 'text-text-muted'}`} />

                )}
              </div>
              <span className="text-sm text-text-secondary">
                {product.averageRating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-4">
              <span className="font-display text-3xl font-bold text-white">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice &&
              <>
                  <span className="text-lg text-text-muted line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                  <span className="px-2 py-0.5 bg-danger/20 text-danger text-sm font-semibold rounded-full">
                    Save {formatPrice(product.originalPrice - product.price)}
                  </span>
                </>
              }
            </div>

            {/* Stock Status */}
            <div
              className={`flex items-center gap-2 mb-5 ${stockStatus.color}`}>
              
              <stockStatus.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{stockStatus.label}</span>
            </div>

            {/* Description */}
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              {product.shortDescription}
            </p>

            {/* Quantity + Actions */}
            <div className="flex flex-col gap-4 mb-6">
              {/* Quantity */}
              <div className="flex items-center gap-3">
                <span className="text-sm text-text-secondary">Quantity:</span>
                <div className="flex items-center rounded-lg border border-border overflow-hidden">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-3 py-2 text-text-secondary hover:text-white hover:bg-white/5 transition-colors"
                    disabled={quantity <= 1}>
                    
                    <MinusIcon className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 text-white font-medium text-sm min-w-[48px] text-center bg-surface-2">
                    {quantity}
                  </span>
                  <button
                    onClick={() =>
                    setQuantity((q) => Math.min(product.stock, q + 1))
                    }
                    className="px-3 py-2 text-text-secondary hover:text-white hover:bg-white/5 transition-colors"
                    disabled={quantity >= product.stock}>
                    
                    <PlusIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.button
                  whileTap={{
                    scale: 0.97
                  }}
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    boxShadow: '0 0 30px rgba(37, 99, 235, 0.3)'
                  }}>
                  
                  {addedToCart ?
                  <>
                      <CheckCircleIcon className="w-5 h-5" />
                      Added to Cart!
                    </> :

                  <>
                      <ShoppingCartIcon className="w-5 h-5" />
                      Add to Cart
                    </>
                  }
                </motion.button>
                <button
                  onClick={() => setWishlisted(!wishlisted)}
                  className={`flex items-center justify-center gap-2 px-6 py-3 rounded-full border transition-colors ${wishlisted ? 'border-danger/50 bg-danger/10 text-danger' : 'border-border text-text-secondary hover:text-white hover:border-white/20'}`}>
                  
                  <HeartIcon
                    className={`w-5 h-5 ${wishlisted ? 'fill-danger' : ''}`} />
                  
                  {wishlisted ? 'Wishlisted' : 'Wishlist'}
                </button>
              </div>

              {/* Buy Now */}
              <Link
                to="/cart"
                onClick={() => addToCart(product, quantity)}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-bg font-medium hover:bg-white/90 transition-colors">
                
                <ZapIcon className="w-5 h-5" />
                Buy Now
              </Link>
            </div>

            {/* Delivery Info */}
            <div
              className="rounded-card p-4 space-y-3"
              style={{
                background: 'rgba(13, 21, 38, 0.5)',
                border: '1px solid rgba(255,255,255,0.06)'
              }}>
              
              <div className="flex items-center gap-3">
                <TruckIcon className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-white font-medium">
                    Ships to KPK in 1–3 days
                  </p>
                  <p className="text-xs text-text-muted">
                    Free shipping on orders over PKR 5,000
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheckIcon className="w-5 h-5 text-success" />
                <div>
                  <p className="text-sm text-white font-medium">
                    Cash on Delivery Available
                  </p>
                  <p className="text-xs text-text-muted">
                    100% genuine products guaranteed
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Specs Table */}
        <motion.section
          {...fadeUp}
          transition={{
            delay: 0.25
          }}
          viewport={{
            once: true
          }}
          whileInView="animate"
          initial="initial"
          className="mb-16">
          
          <h2 className="font-heading text-xl font-bold text-white mb-6">
            Specifications
          </h2>
          <div
            className="rounded-card overflow-hidden"
            style={{
              background: 'rgba(13, 21, 38, 0.7)',
              border: '1px solid rgba(255,255,255,0.08)'
            }}>
            
            {Object.entries(product.specs).map(([key, value], i) =>
            <div
              key={key}
              className={`flex items-center px-5 py-3.5 ${i % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.02]'} ${i < Object.entries(product.specs).length - 1 ? 'border-b border-border' : ''}`}>
              
                <span className="w-1/3 text-sm text-text-muted font-medium">
                  {key}
                </span>
                <span className="text-sm text-white">{value}</span>
              </div>
            )}
          </div>
        </motion.section>

        {/* Reviews Section */}
        <motion.section
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          className="mb-16">
          
          <h2 className="font-heading text-xl font-bold text-white mb-6">
            Customer Reviews ({product.reviewCount})
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Rating Summary */}
            <div
              className="rounded-card p-6"
              style={{
                background: 'rgba(13, 21, 38, 0.7)',
                border: '1px solid rgba(255,255,255,0.08)'
              }}>
              
              <div className="text-center mb-5">
                <span className="font-display text-4xl font-bold text-white">
                  {product.averageRating}
                </span>
                <div className="flex items-center justify-center gap-0.5 mt-2">
                  {Array.from({
                    length: 5
                  }).map((_, i) =>
                  <StarIcon
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(product.averageRating) ? 'text-warning fill-warning' : 'text-text-muted'}`} />

                  )}
                </div>
                <p className="text-sm text-text-secondary mt-1">
                  Based on {product.reviewCount} reviews
                </p>
              </div>

              <div className="space-y-2.5">
                {ratingDistribution.map(({ stars, percent }) =>
                <div key={stars} className="flex items-center gap-2.5">
                    <span className="text-xs text-text-muted w-3">{stars}</span>
                    <StarIcon className="w-3.5 h-3.5 text-warning fill-warning" />
                    <div className="flex-1 h-2 rounded-full bg-surface-2 overflow-hidden">
                      <motion.div
                      initial={{
                        width: 0
                      }}
                      whileInView={{
                        width: `${percent}%`
                      }}
                      viewport={{
                        once: true
                      }}
                      transition={{
                        duration: 0.8,
                        delay: 0.2
                      }}
                      className="h-full rounded-full bg-warning" />
                    
                    </div>
                    <span className="text-xs text-text-muted w-8 text-right">
                      {percent}%
                    </span>
                  </div>
                )}
              </div>

              <button className="w-full mt-6 py-2.5 rounded-full border border-primary/30 text-primary text-sm font-medium hover:bg-primary/10 transition-colors">
                Write a Review
              </button>
            </div>

            {/* Review Cards */}
            <div className="lg:col-span-2 space-y-4">
              {dummyReviews.map((review, i) =>
              <motion.div
                key={review.id}
                initial={{
                  opacity: 0,
                  y: 15
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  delay: i * 0.1
                }}
                className="rounded-card p-5"
                style={{
                  background: 'rgba(13, 21, 38, 0.5)',
                  border: '1px solid rgba(255,255,255,0.06)'
                }}>
                
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center">
                        <UserIcon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">
                          {review.name}
                        </p>
                        <p className="text-xs text-text-muted">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-0.5">
                      {Array.from({
                      length: 5
                    }).map((_, i) =>
                    <StarIcon
                      key={i}
                      className={`w-3.5 h-3.5 ${i < review.rating ? 'text-warning fill-warning' : 'text-text-muted'}`} />

                    )}
                    </div>
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1.5">
                    {review.title}
                  </h4>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {review.body}
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <button className="flex items-center gap-1.5 text-xs text-text-muted hover:text-primary transition-colors">
                      <ThumbsUpIcon className="w-3.5 h-3.5" />
                      Helpful ({review.helpful})
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.section>

        {/* Related Products */}
        {relatedProducts.length > 0 &&
        <motion.section
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}>
          
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading text-xl font-bold text-white">
                Related Products
              </h2>
              <Link
              to="/products"
              className="text-sm text-primary hover:text-primary-light transition-colors">
              
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {relatedProducts.slice(0, 4).map((p, i) =>
            <ProductCard key={p.id} product={p} index={i} />
            )}
            </div>
          </motion.section>
        }
      </div>
    </motion.main>);

}