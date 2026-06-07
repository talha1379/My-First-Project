import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  MinusIcon,
  PlusIcon,
  TrashIcon,
  ShoppingBagIcon,
  ArrowRightIcon,
  TagIcon,
  TruckIcon,
  ShieldCheckIcon,
  PackageIcon } from
'lucide-react';
import { useCart } from '../data/cartContext';
import { formatPrice } from '../data/products';
export function Cart() {
  const { items, removeFromCart, updateQuantity, clearCart, cartTotal } =
  useCart();
  const shipping = cartTotal > 5000 ? 0 : 200;
  const total = cartTotal + shipping;
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
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-text-muted mb-3">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-text-secondary">Shopping Cart</span>
          </div>
          <div className="flex items-center justify-between">
            <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white">
              Shopping Cart
            </h1>
            {items.length > 0 &&
            <button
              onClick={clearCart}
              className="text-sm text-text-muted hover:text-danger transition-colors">
              
                Clear Cart
              </button>
            }
          </div>
        </div>

        {items.length === 0 ?
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
              <ShoppingBagIcon className="w-10 h-10 text-text-muted" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-white mb-2">
              Your cart is empty
            </h2>
            <p className="text-text-secondary text-sm mb-8 max-w-sm">
              Looks like you haven't added anything to your cart yet. Browse our
              products and find something you love!
            </p>
            <Link
            to="/products"
            className="flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary-light transition-colors"
            style={{
              boxShadow: '0 0 30px rgba(37, 99, 235, 0.3)'
            }}>
            
              Start Shopping
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </motion.div> :

        <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="flex-1 space-y-4">
              <AnimatePresence mode="popLayout">
                {items.map((item) =>
              <motion.div
                key={item.product.id}
                layout
                initial={{
                  opacity: 0,
                  x: -20
                }}
                animate={{
                  opacity: 1,
                  x: 0
                }}
                exit={{
                  opacity: 0,
                  x: -100,
                  height: 0,
                  marginBottom: 0
                }}
                transition={{
                  duration: 0.3
                }}
                className="flex gap-4 sm:gap-5 rounded-card p-4 sm:p-5"
                style={{
                  background: 'rgba(13, 21, 38, 0.7)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.08)'
                }}>
                
                    {/* Image */}
                    <Link
                  to={`/products/${item.product.slug}`}
                  className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden bg-surface-2">
                  
                      <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform" />
                  
                    </Link>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <span className="text-xs text-primary/80 font-medium uppercase tracking-wider">
                            {item.product.category}
                          </span>
                          <Link
                        to={`/products/${item.product.slug}`}
                        className="block mt-0.5">
                        
                            <h3 className="font-heading text-sm sm:text-base font-semibold text-white truncate hover:text-primary transition-colors">
                              {item.product.name}
                            </h3>
                          </Link>
                        </div>
                        <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="flex-shrink-0 p-2 rounded-lg text-text-muted hover:text-danger hover:bg-danger/10 transition-colors"
                      aria-label="Remove item">
                      
                          <TrashIcon className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                        {/* Quantity */}
                        <div className="flex items-center rounded-lg border border-border overflow-hidden">
                          <button
                        onClick={() =>
                        updateQuantity(item.product.id, item.quantity - 1)
                        }
                        className="px-2.5 py-1.5 text-text-secondary hover:text-white hover:bg-white/5 transition-colors">
                        
                            <MinusIcon className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-3 py-1.5 text-white text-sm font-medium bg-surface-2 min-w-[36px] text-center">
                            {item.quantity}
                          </span>
                          <button
                        onClick={() =>
                        updateQuantity(item.product.id, item.quantity + 1)
                        }
                        disabled={item.quantity >= item.product.stock}
                        className="px-2.5 py-1.5 text-text-secondary hover:text-white hover:bg-white/5 transition-colors disabled:opacity-40">
                        
                            <PlusIcon className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <span className="font-display text-base sm:text-lg font-bold text-white">
                            {formatPrice(item.product.price * item.quantity)}
                          </span>
                          {item.quantity > 1 &&
                      <p className="text-xs text-text-muted">
                              {formatPrice(item.product.price)} each
                            </p>
                      }
                        </div>
                      </div>
                    </div>
                  </motion.div>
              )}
              </AnimatePresence>
            </div>

            {/* Order Summary */}
            <div className="lg:w-96 flex-shrink-0">
              <div
              className="sticky top-24 rounded-card p-6"
              style={{
                background: 'rgba(13, 21, 38, 0.7)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.08)'
              }}>
              
                <h2 className="font-heading text-lg font-bold text-white mb-5">
                  Order Summary
                </h2>

                <div className="space-y-3 mb-5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-secondary">
                      Subtotal ({items.reduce((s, i) => s + i.quantity, 0)}{' '}
                      items)
                    </span>
                    <span className="text-sm text-white font-medium">
                      {formatPrice(cartTotal)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-secondary">
                      Shipping
                    </span>
                    <span className="text-sm text-white font-medium">
                      {shipping === 0 ?
                    <span className="text-success">Free</span> :

                    formatPrice(shipping)
                    }
                    </span>
                  </div>
                  {shipping > 0 &&
                <p className="text-xs text-text-muted">
                      Free shipping on orders over PKR 5,000
                    </p>
                }
                </div>

                {/* Coupon */}
                <div className="mb-5">
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <TagIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                      <input
                      type="text"
                      placeholder="Coupon code"
                      className="w-full pl-10 pr-4 py-2.5 rounded-[10px] bg-surface-2 border border-border text-white text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50" />
                    
                    </div>
                    <button className="px-4 py-2.5 rounded-[10px] bg-surface-2 border border-border text-sm text-text-secondary hover:text-white hover:border-white/20 transition-colors">
                      Apply
                    </button>
                  </div>
                </div>

                <div className="border-t border-border pt-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-base font-semibold text-white">
                      Total
                    </span>
                    <span className="font-display text-2xl font-bold text-white">
                      {formatPrice(total)}
                    </span>
                  </div>
                </div>

                <motion.button
                whileTap={{
                  scale: 0.97
                }}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-primary text-white font-medium hover:bg-primary-light transition-colors"
                style={{
                  boxShadow: '0 0 30px rgba(37, 99, 235, 0.3)'
                }}>
                
                  Proceed to Checkout
                  <ArrowRightIcon className="w-4 h-4" />
                </motion.button>

                {/* Trust badges */}
                <div className="mt-5 space-y-2.5">
                  <div className="flex items-center gap-2.5 text-xs text-text-muted">
                    <TruckIcon className="w-4 h-4 text-primary flex-shrink-0" />
                    Fast delivery across KPK
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-text-muted">
                    <ShieldCheckIcon className="w-4 h-4 text-success flex-shrink-0" />
                    100% genuine products
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-text-muted">
                    <PackageIcon className="w-4 h-4 text-info flex-shrink-0" />
                    Easy returns within 7 days
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </motion.main>);

}