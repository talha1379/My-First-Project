import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import {
  CheckCircleIcon,
  CircleIcon,
  PackageIcon,
  CreditCardIcon,
  SettingsIcon,
  TruckIcon,
  MapPinIcon,
  HomeIcon,
  HelpCircleIcon,
  ChevronRightIcon } from
'lucide-react';
import { formatPrice } from '../data/products';
const steps = [
{
  label: 'Order Placed',
  date: 'May 14, 2026 — 2:30 PM',
  icon: PackageIcon,
  completed: true
},
{
  label: 'Payment Confirmed',
  date: 'May 14, 2026 — 2:31 PM',
  icon: CreditCardIcon,
  completed: true
},
{
  label: 'Processing',
  date: 'May 14, 2026 — 4:00 PM',
  icon: SettingsIcon,
  completed: true
},
{
  label: 'Shipped',
  date: 'Estimated: May 16, 2026',
  icon: TruckIcon,
  completed: false
},
{
  label: 'Out for Delivery',
  date: '—',
  icon: MapPinIcon,
  completed: false
},
{
  label: 'Delivered',
  date: '—',
  icon: HomeIcon,
  completed: false
}];

const orderItems = [
{
  name: 'NVIDIA RTX 4070 Ti Super',
  qty: 1,
  price: 165000
},
{
  name: 'Corsair Vengeance DDR5 32GB',
  qty: 2,
  price: 18500
}];

export function OrderTracking() {
  const { orderId } = useParams<{
    orderId: string;
  }>();
  return (
    <motion.main
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      className="min-h-screen pt-24 pb-16 bg-bg">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-text-muted mb-8">
          <Link to="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRightIcon className="w-3.5 h-3.5" />
          <span className="text-text-secondary">
            Order {orderId || 'ORD-2845'}
          </span>
        </div>

        <div className="mb-8">
          <h1 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2">
            Order Tracking
          </h1>
          <p className="text-text-secondary text-sm">
            Order{' '}
            <span className="text-primary font-mono">
              {orderId || 'ORD-2845'}
            </span>{' '}
            · Placed on May 14, 2026
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div
              className="rounded-card p-6 sm:p-8"
              style={{
                background: 'rgba(13, 21, 38, 0.7)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.08)'
              }}>
              
              <h2 className="font-heading text-lg font-semibold text-white mb-8">
                Tracking Timeline
              </h2>

              <div className="relative">
                {/* Connecting line */}
                <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-surface-2">
                  <motion.div
                    initial={{
                      scaleY: 0
                    }}
                    animate={{
                      scaleY: 1
                    }}
                    transition={{
                      duration: 1.2,
                      ease: 'easeOut'
                    }}
                    className="w-full bg-primary origin-top"
                    style={{
                      height: `${steps.filter((s) => s.completed).length / steps.length * 100}%`
                    }} />
                  
                </div>

                <div className="space-y-8">
                  {steps.map((step, i) =>
                  <motion.div
                    key={step.label}
                    initial={{
                      opacity: 0,
                      x: -20
                    }}
                    animate={{
                      opacity: 1,
                      x: 0
                    }}
                    transition={{
                      delay: 0.2 + i * 0.15
                    }}
                    className="flex items-start gap-5 relative">
                    
                      <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 z-10 ${step.completed ? 'bg-primary text-white' : 'bg-surface-2 text-text-muted border border-border'}`}>
                      
                        {step.completed ?
                      <CheckCircleIcon className="w-5 h-5" /> :

                      <step.icon className="w-5 h-5" />
                      }
                      </div>
                      <div className="pt-1.5">
                        <p
                        className={`text-sm font-medium ${step.completed ? 'text-white' : 'text-text-muted'}`}>
                        
                          {step.label}
                        </p>
                        <p className="text-xs text-text-muted mt-0.5">
                          {step.date}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-5">
            <div
              className="rounded-card p-6"
              style={{
                background: 'rgba(13, 21, 38, 0.7)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.08)'
              }}>
              
              <h3 className="font-heading text-base font-semibold text-white mb-4">
                Order Summary
              </h3>
              <div className="space-y-3 mb-4">
                {orderItems.map((item) =>
                <div
                  key={item.name}
                  className="flex items-start justify-between gap-2">
                  
                    <div>
                      <p className="text-sm text-white">{item.name}</p>
                      <p className="text-xs text-text-muted">Qty: {item.qty}</p>
                    </div>
                    <span className="text-sm text-white font-medium whitespace-nowrap">
                      {formatPrice(item.price * item.qty)}
                    </span>
                  </div>
                )}
              </div>
              <div className="border-t border-border pt-3 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Subtotal</span>
                  <span className="text-white">{formatPrice(202000)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Shipping</span>
                  <span className="text-success">Free</span>
                </div>
                <div className="flex justify-between text-base font-semibold pt-2 border-t border-border">
                  <span className="text-white">Total</span>
                  <span className="font-display text-white">
                    {formatPrice(202000)}
                  </span>
                </div>
              </div>
            </div>

            <div
              className="rounded-card p-6"
              style={{
                background: 'rgba(13, 21, 38, 0.7)',
                border: '1px solid rgba(255,255,255,0.08)'
              }}>
              
              <h3 className="font-heading text-base font-semibold text-white mb-3">
                Shipping Address
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Ahmad Talha
                <br />
                123 Main Street
                <br />
                Peshawar, KPK
                <br />
                Pakistan
              </p>
            </div>

            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full border border-border text-sm text-text-secondary hover:text-white hover:border-white/20 transition-colors">
              
              <HelpCircleIcon className="w-4 h-4" />
              Need Help?
            </Link>
          </div>
        </div>
      </div>
    </motion.main>);

}