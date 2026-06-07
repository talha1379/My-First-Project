import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  HeartIcon,
  ShoppingCartIcon,
  TrashIcon,
  ArrowRightIcon,
  StarIcon } from
'lucide-react';
import { products, formatPrice, Product } from '../data/products';
import { useCart } from '../data/cartContext';
export function Wishlist() {
  const { addToCart } = useCart();
  const [wishlistItems, setWishlistItems] = useState<Product[]>(() =>
  products.filter((p) => p.isFeatured).slice(0, 4)
  );
  const removeItem = (id: string) => {
    setWishlistItems((prev) => prev.filter((p) => p.id !== id));
  };
  const moveToCart = (product: Product) => {
    addToCart(product);
    removeItem(product.id);
  };
  return (
    <motion.main
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      className="min-h-screen pt-24 pb-16 bg-bg">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-text-muted mb-3">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-text-secondary">Wishlist</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white">
            My Wishlist
          </h1>
          {wishlistItems.length > 0 &&
          <p className="text-text-secondary text-sm mt-2">
              {wishlistItems.length} items saved
            </p>
          }
        </div>

        {wishlistItems.length === 0 ?
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          className="flex flex-col items-center justify-center py-20 text-center">
          
            <div className="w-24 h-24 rounded-full bg-surface-2 flex items-center justify-center mb-6">
              <HeartIcon className="w-10 h-10 text-text-muted" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-white mb-2">
              Your wishlist is empty
            </h2>
            <p className="text-text-secondary text-sm mb-8 max-w-sm">
              Save items you love to your wishlist and come back to them
              anytime.
            </p>
            <Link
            to="/products"
            className="flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary-light transition-colors"
            style={{
              boxShadow: '0 0 30px rgba(37, 99, 235, 0.3)'
            }}>
            
              Browse Products
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </motion.div> :

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <AnimatePresence mode="popLayout">
              {wishlistItems.map((product, i) =>
            <motion.div
              key={product.id}
              layout
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              exit={{
                opacity: 0,
                scale: 0.9
              }}
              transition={{
                delay: i * 0.05
              }}
              className="group rounded-card overflow-hidden"
              style={{
                background: 'rgba(13, 21, 38, 0.7)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.08)'
              }}>
              
                  <Link
                to={`/products/${product.slug}`}
                className="block relative h-48 overflow-hidden bg-surface-2">
                
                    <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                
                    {product.discountPercent && product.discountPercent > 0 &&
                <span className="absolute top-3 left-3 px-2 py-0.5 bg-danger/90 text-white text-xs font-semibold rounded-full">
                        -{product.discountPercent}%
                      </span>
                }
                  </Link>

                  <div className="p-4">
                    <span className="text-xs font-medium text-primary/80 uppercase tracking-wider">
                      {product.category}
                    </span>
                    <Link to={`/products/${product.slug}`}>
                      <h3 className="mt-1 font-heading text-sm font-semibold text-white line-clamp-2 leading-tight hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                    </Link>

                    <div className="mt-2 flex items-center gap-1.5">
                      <div className="flex">
                        {Array.from({
                      length: 5
                    }).map((_, i) =>
                    <StarIcon
                      key={i}
                      className={`w-3.5 h-3.5 ${i < Math.floor(product.averageRating) ? 'text-warning fill-warning' : 'text-text-muted'}`} />

                    )}
                      </div>
                      <span className="text-xs text-text-secondary">
                        ({product.reviewCount})
                      </span>
                    </div>

                    <div className="mt-3 flex items-baseline gap-2">
                      <span className="font-display text-lg font-bold text-white">
                        {formatPrice(product.price)}
                      </span>
                      {product.originalPrice &&
                  <span className="text-xs text-text-muted line-through">
                          {formatPrice(product.originalPrice)}
                        </span>
                  }
                    </div>

                    <div className="mt-3 flex gap-2">
                      <motion.button
                    whileTap={{
                      scale: 0.95
                    }}
                    onClick={() => moveToCart(product)}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-button bg-primary text-white text-sm font-medium hover:bg-primary-light transition-colors">
                    
                        <ShoppingCartIcon className="w-4 h-4" />
                        Move to Cart
                      </motion.button>
                      <button
                    onClick={() => removeItem(product.id)}
                    className="px-3 py-2.5 rounded-button border border-border text-text-muted hover:text-danger hover:border-danger/30 transition-colors">
                    
                        <TrashIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
            )}
            </AnimatePresence>
          </div>
        }
      </div>
    </motion.main>);

}