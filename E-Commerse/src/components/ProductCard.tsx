import React, { useState, lazy } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  StarIcon,
  HeartIcon,
  ShoppingCartIcon,
  AlertTriangleIcon,
  CheckCircleIcon } from
'lucide-react';
import { Product, formatPrice } from '../data/products';
import { useCart } from '../data/cartContext';
interface ProductCardProps {
  product: Product;
  index?: number;
}
export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [wishlisted, setWishlisted] = useState(false);
  const [justAdded, setJustAdded] = useState(false);
  const { addToCart } = useCart();
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        margin: '-50px'
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.05
      }}
      whileHover={{
        y: -8
      }}
      className="group relative rounded-card overflow-hidden"
      style={{
        background: 'rgba(13, 21, 38, 0.7)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.08)'
      }}>
      
      {/* Hover glow effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-card"
        style={{
          boxShadow: '0 0 30px rgba(37, 99, 235, 0.15) inset'
        }} />
      

      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
        {product.discountPercent && product.discountPercent > 0 &&
        <span className="px-2 py-0.5 bg-danger/90 text-white text-xs font-semibold rounded-full">
            -{product.discountPercent}%
          </span>
        }
        {product.stock <= 5 &&
        <span className="flex items-center gap-1 px-2 py-0.5 bg-warning/90 text-black text-xs font-semibold rounded-full">
            <AlertTriangleIcon className="w-3 h-3" />
            Low Stock
          </span>
        }
      </div>

      {/* Wishlist Button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setWishlisted(!wishlisted);
        }}
        className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center transition-colors hover:bg-black/60">
        
        <HeartIcon
          className={`w-4 h-4 transition-colors ${wishlisted ? 'text-danger fill-danger' : 'text-white/70'}`} />
        
      </button>

      {/* Image - Linked */}
      <Link to={`/products/${product.slug}`} className="block">
        <div className="relative h-48 overflow-hidden bg-surface-2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy" />
          
        </div>
      </Link>

      {/* Content */}
      <div className="p-4">
        <span className="text-xs font-medium text-primary/80 uppercase tracking-wider">
          {product.category}
        </span>

        <Link to={`/products/${product.slug}`}>
          <h3 className="mt-1 font-heading text-sm font-semibold text-white line-clamp-2 leading-tight hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1.5">
          <div className="flex items-center">
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

        {/* Price */}
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

        {/* Add to Cart */}
        <motion.button
          whileTap={{
            scale: 0.95
          }}
          onClick={handleAddToCart}
          className={`mt-3 w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-button text-sm font-medium transition-colors ${justAdded ? 'bg-success text-white' : 'bg-primary text-white hover:bg-primary-light'}`}>
          
          {justAdded ?
          <>
              <CheckCircleIcon className="w-4 h-4" />
              Added!
            </> :

          <>
              <ShoppingCartIcon className="w-4 h-4" />
              Add to Cart
            </>
          }
        </motion.button>
      </div>
    </motion.div>);

}