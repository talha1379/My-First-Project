import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  LayoutDashboardIcon,
  PackageIcon,
  ShoppingCartIcon,
  UsersIcon,
  DollarSignIcon,
  TrendingUpIcon,
  BarChart3Icon,
  ChevronRightIcon,
  SearchIcon,
  BellIcon,
  MenuIcon,
  XIcon,
  PlusIcon,
  EditIcon,
  TrashIcon,
  EyeIcon } from
'lucide-react';
import { products, formatPrice } from '../data/products';
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
type Tab = 'overview' | 'products' | 'orders' | 'customers';
const overviewStats = [
{
  label: 'Total Revenue',
  value: 'PKR 2.4M',
  change: '+12.5%',
  icon: DollarSignIcon,
  color: 'text-success'
},
{
  label: 'Total Orders',
  value: '1,247',
  change: '+8.2%',
  icon: ShoppingCartIcon,
  color: 'text-primary'
},
{
  label: 'Total Customers',
  value: '2,031',
  change: '+15.3%',
  icon: UsersIcon,
  color: 'text-info'
},
{
  label: 'Total Products',
  value: '500+',
  change: '+3',
  icon: PackageIcon,
  color: 'text-warning'
}];

const recentOrders = [
{
  id: 'ORD-2847',
  customer: 'Ali Hassan',
  date: 'May 15, 2026',
  items: 3,
  total: 125000,
  status: 'Delivered',
  payment: 'Paid'
},
{
  id: 'ORD-2846',
  customer: 'Sara Khan',
  date: 'May 15, 2026',
  items: 1,
  total: 55000,
  status: 'Shipped',
  payment: 'Paid'
},
{
  id: 'ORD-2845',
  customer: 'Usman Ahmed',
  date: 'May 14, 2026',
  items: 2,
  total: 82000,
  status: 'Processing',
  payment: 'COD'
},
{
  id: 'ORD-2844',
  customer: 'Fatima Noor',
  date: 'May 14, 2026',
  items: 5,
  total: 210000,
  status: 'Pending',
  payment: 'Paid'
},
{
  id: 'ORD-2843',
  customer: 'Bilal Raza',
  date: 'May 13, 2026',
  items: 1,
  total: 14500,
  status: 'Delivered',
  payment: 'COD'
}];

const topProducts = [
{
  name: 'NVIDIA RTX 4070 Ti Super',
  sold: 89,
  revenue: 14685000
},
{
  name: 'Intel Core i7-14700K',
  sold: 67,
  revenue: 4154000
},
{
  name: 'Samsung 990 Pro 2TB',
  sold: 54,
  revenue: 1512000
},
{
  name: 'Corsair K70 RGB Pro',
  sold: 48,
  revenue: 1056000
},
{
  name: 'AMD Ryzen 7 7800X3D',
  sold: 42,
  revenue: 2310000
}];

const dummyCustomers = [
{
  name: 'Ali Hassan',
  email: 'ali@example.com',
  joined: 'Jan 2026',
  orders: 12,
  spent: 485000,
  status: 'Active'
},
{
  name: 'Sara Khan',
  email: 'sara@example.com',
  joined: 'Feb 2026',
  orders: 8,
  spent: 320000,
  status: 'Active'
},
{
  name: 'Usman Ahmed',
  email: 'usman@example.com',
  joined: 'Mar 2026',
  orders: 5,
  spent: 175000,
  status: 'Active'
},
{
  name: 'Fatima Noor',
  email: 'fatima@example.com',
  joined: 'Apr 2026',
  orders: 3,
  spent: 92000,
  status: 'Active'
},
{
  name: 'Bilal Raza',
  email: 'bilal@example.com',
  joined: 'May 2026',
  orders: 1,
  spent: 14500,
  status: 'Active'
}];

const statusColors: Record<string, string> = {
  Delivered: 'bg-success/15 text-success',
  Shipped: 'bg-info/15 text-info',
  Processing: 'bg-warning/15 text-warning',
  Pending: 'bg-text-muted/15 text-text-secondary',
  Cancelled: 'bg-danger/15 text-danger'
};
export function Admin() {
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const tabs = [
  {
    id: 'overview' as Tab,
    label: 'Overview',
    icon: LayoutDashboardIcon
  },
  {
    id: 'products' as Tab,
    label: 'Products',
    icon: PackageIcon
  },
  {
    id: 'orders' as Tab,
    label: 'Orders',
    icon: ShoppingCartIcon
  },
  {
    id: 'customers' as Tab,
    label: 'Customers',
    icon: UsersIcon
  }];

  const sidebar =
  <div className="flex flex-col h-full">
      <div className="p-5 border-b border-border">
        <span className="font-display text-lg font-bold text-white">
          AHMAD<span className="text-primary">Admin</span>
        </span>
      </div>
      <nav className="flex-1 p-3 space-y-1">
        {tabs.map((tab) =>
      <button
        key={tab.id}
        onClick={() => {
          setActiveTab(tab.id);
          setSidebarOpen(false);
        }}
        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === tab.id ? 'bg-primary/15 text-primary' : 'text-text-secondary hover:text-white hover:bg-white/5'}`}>
        
            <tab.icon className="w-5 h-5" />
            {tab.label}
          </button>
      )}
      </nav>
    </div>;

  return (
    <motion.main
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      className="min-h-screen pt-20 bg-bg">
      
      <div className="flex">
        {/* Desktop Sidebar */}
        <aside
          className="hidden lg:block w-60 flex-shrink-0 sticky top-20 h-[calc(100vh-5rem)] border-r border-border"
          style={{
            background: 'rgba(13, 21, 38, 0.5)'
          }}>
          
          {sidebar}
        </aside>

        {/* Mobile Sidebar */}
        {sidebarOpen &&
        <>
            <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            className="fixed inset-0 z-40 bg-black/60 lg:hidden"
            onClick={() => setSidebarOpen(false)} />
          
            <motion.aside
            initial={{
              x: '-100%'
            }}
            animate={{
              x: 0
            }}
            className="fixed top-0 left-0 bottom-0 z-50 w-60 bg-surface lg:hidden">
            
              {sidebar}
            </motion.aside>
          </>
        }

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Top Bar */}
          <div
            className="sticky top-20 z-30 px-4 sm:px-6 py-3 border-b border-border flex items-center justify-between gap-4"
            style={{
              background: 'rgba(5, 10, 24, 0.9)',
              backdropFilter: 'blur(12px)'
            }}>
            
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 text-text-secondary hover:text-white">
                
                <MenuIcon className="w-5 h-5" />
              </button>
              <h1 className="font-heading text-lg font-semibold text-white capitalize">
                {activeTab}
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden sm:block relative">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 rounded-lg bg-surface border border-border text-sm text-white placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 w-48" />
                
              </div>
              <button className="relative p-2 text-text-secondary hover:text-white">
                <BellIcon className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-danger rounded-full" />
              </button>
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-xs font-bold text-primary">AT</span>
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-6">
            {activeTab === 'overview' && <OverviewTab />}
            {activeTab === 'products' && <ProductsTab />}
            {activeTab === 'orders' && <OrdersTab />}
            {activeTab === 'customers' && <CustomersTab />}
          </div>
        </div>
      </div>
    </motion.main>);

}
function OverviewTab() {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {overviewStats.map((stat, i) =>
        <motion.div
          key={stat.label}
          {...fadeUp}
          transition={{
            delay: i * 0.08
          }}
          className="rounded-card p-5"
          style={{
            background: 'rgba(13, 21, 38, 0.7)',
            border: '1px solid rgba(255,255,255,0.08)'
          }}>
          
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-text-muted uppercase tracking-wider">
                {stat.label}
              </span>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </div>
            <p className="font-display text-2xl font-bold text-white">
              {stat.value}
            </p>
            <p className={`text-xs mt-1 ${stat.color}`}>
              <TrendingUpIcon className="w-3 h-3 inline mr-1" />
              {stat.change} this month
            </p>
          </motion.div>
        )}
      </div>

      {/* Charts placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          {...fadeUp}
          transition={{
            delay: 0.3
          }}
          className="rounded-card p-6"
          style={{
            background: 'rgba(13, 21, 38, 0.7)',
            border: '1px solid rgba(255,255,255,0.08)'
          }}>
          
          <h3 className="font-heading text-base font-semibold text-white mb-4 flex items-center gap-2">
            <BarChart3Icon className="w-4 h-4 text-primary" />
            Revenue (Last 30 Days)
          </h3>
          <div className="h-48 flex items-end gap-1.5">
            {Array.from({
              length: 30
            }).map((_, i) => {
              const h = 20 + Math.random() * 80;
              return (
                <motion.div
                  key={i}
                  initial={{
                    height: 0
                  }}
                  animate={{
                    height: `${h}%`
                  }}
                  transition={{
                    delay: 0.4 + i * 0.02,
                    duration: 0.5
                  }}
                  className="flex-1 rounded-t bg-primary/60 hover:bg-primary transition-colors min-w-[4px]" />);


            })}
          </div>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{
            delay: 0.35
          }}
          className="rounded-card p-6"
          style={{
            background: 'rgba(13, 21, 38, 0.7)',
            border: '1px solid rgba(255,255,255,0.08)'
          }}>
          
          <h3 className="font-heading text-base font-semibold text-white mb-4">
            Top 5 Products
          </h3>
          <div className="space-y-3">
            {topProducts.map((p, i) =>
            <div key={p.name} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center text-xs text-primary font-bold">
                  {i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-white truncate">{p.name}</p>
                  <p className="text-xs text-text-muted">{p.sold} units sold</p>
                </div>
                <span className="text-sm text-text-secondary font-medium">
                  {formatPrice(p.revenue)}
                </span>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Recent Orders */}
      <motion.div
        {...fadeUp}
        transition={{
          delay: 0.4
        }}
        className="rounded-card overflow-hidden"
        style={{
          background: 'rgba(13, 21, 38, 0.7)',
          border: '1px solid rgba(255,255,255,0.08)'
        }}>
        
        <div className="px-6 py-4 border-b border-border flex items-center justify-between">
          <h3 className="font-heading text-base font-semibold text-white">
            Recent Orders
          </h3>
          <button className="text-xs text-primary hover:text-primary-light transition-colors flex items-center gap-1">
            View All <ChevronRightIcon className="w-3 h-3" />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="px-6 py-3 text-left text-xs font-medium text-text-muted uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-muted uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-muted uppercase tracking-wider hidden sm:table-cell">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-muted uppercase tracking-wider">
                  Total
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-muted uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) =>
              <tr
                key={order.id}
                className="border-b border-border/50 hover:bg-white/[0.02] transition-colors">
                
                  <td className="px-6 py-3.5 text-sm text-primary font-mono">
                    {order.id}
                  </td>
                  <td className="px-6 py-3.5 text-sm text-white">
                    {order.customer}
                  </td>
                  <td className="px-6 py-3.5 text-sm text-text-secondary hidden sm:table-cell">
                    {order.date}
                  </td>
                  <td className="px-6 py-3.5 text-sm text-white font-medium">
                    {formatPrice(order.total)}
                  </td>
                  <td className="px-6 py-3.5">
                    <span
                    className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[order.status]}`}>
                    
                      {order.status}
                    </span>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>);

}
function ProductsTab() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-text-secondary">
          {products.length} products
        </p>
        <button className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary-light transition-colors">
          <PlusIcon className="w-4 h-4" /> Add Product
        </button>
      </div>
      <div
        className="rounded-card overflow-hidden"
        style={{
          background: 'rgba(13, 21, 38, 0.7)',
          border: '1px solid rgba(255,255,255,0.08)'
        }}>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="px-5 py-3 text-left text-xs font-medium text-text-muted uppercase tracking-wider">
                  Product
                </th>
                <th className="px-5 py-3 text-left text-xs font-medium text-text-muted uppercase tracking-wider hidden md:table-cell">
                  Category
                </th>
                <th className="px-5 py-3 text-left text-xs font-medium text-text-muted uppercase tracking-wider">
                  Price
                </th>
                <th className="px-5 py-3 text-left text-xs font-medium text-text-muted uppercase tracking-wider hidden sm:table-cell">
                  Stock
                </th>
                <th className="px-5 py-3 text-left text-xs font-medium text-text-muted uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {products.slice(0, 10).map((product) =>
              <tr
                key={product.id}
                className="border-b border-border/50 hover:bg-white/[0.02] transition-colors">
                
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <img
                      src={product.image}
                      alt=""
                      className="w-10 h-10 rounded-lg object-cover bg-surface-2" />
                    
                      <div className="min-w-0">
                        <p className="text-sm text-white truncate max-w-[200px]">
                          {product.name}
                        </p>
                        <p className="text-xs text-text-muted">
                          {product.brand}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-sm text-text-secondary hidden md:table-cell">
                    {product.category}
                  </td>
                  <td className="px-5 py-3 text-sm text-white font-medium">
                    {formatPrice(product.price)}
                  </td>
                  <td className="px-5 py-3 hidden sm:table-cell">
                    <span
                    className={`text-sm font-medium ${product.stock <= 5 ? 'text-warning' : 'text-success'}`}>
                    
                      {product.stock}
                    </span>
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-1">
                      <button className="p-1.5 rounded-lg text-text-muted hover:text-primary hover:bg-primary/10 transition-colors">
                        <EyeIcon className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 rounded-lg text-text-muted hover:text-info hover:bg-info/10 transition-colors">
                        <EditIcon className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 rounded-lg text-text-muted hover:text-danger hover:bg-danger/10 transition-colors">
                        <TrashIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>);

}
function OrdersTab() {
  const allOrders = [
  ...recentOrders,
  {
    id: 'ORD-2842',
    customer: 'Zain Malik',
    date: 'May 12, 2026',
    items: 2,
    total: 95000,
    status: 'Delivered',
    payment: 'Paid'
  },
  {
    id: 'ORD-2841',
    customer: 'Hira Shah',
    date: 'May 12, 2026',
    items: 1,
    total: 22000,
    status: 'Cancelled',
    payment: 'Refunded'
  },
  {
    id: 'ORD-2840',
    customer: 'Omar Farooq',
    date: 'May 11, 2026',
    items: 4,
    total: 178000,
    status: 'Delivered',
    payment: 'Paid'
  }];

  return (
    <div
      className="rounded-card overflow-hidden"
      style={{
        background: 'rgba(13, 21, 38, 0.7)',
        border: '1px solid rgba(255,255,255,0.08)'
      }}>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="px-5 py-3 text-left text-xs font-medium text-text-muted uppercase tracking-wider">
                Order ID
              </th>
              <th className="px-5 py-3 text-left text-xs font-medium text-text-muted uppercase tracking-wider">
                Customer
              </th>
              <th className="px-5 py-3 text-left text-xs font-medium text-text-muted uppercase tracking-wider hidden sm:table-cell">
                Date
              </th>
              <th className="px-5 py-3 text-left text-xs font-medium text-text-muted uppercase tracking-wider hidden md:table-cell">
                Items
              </th>
              <th className="px-5 py-3 text-left text-xs font-medium text-text-muted uppercase tracking-wider">
                Total
              </th>
              <th className="px-5 py-3 text-left text-xs font-medium text-text-muted uppercase tracking-wider">
                Status
              </th>
              <th className="px-5 py-3 text-left text-xs font-medium text-text-muted uppercase tracking-wider hidden lg:table-cell">
                Payment
              </th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((order) =>
            <tr
              key={order.id}
              className="border-b border-border/50 hover:bg-white/[0.02] transition-colors">
              
                <td className="px-5 py-3.5 text-sm text-primary font-mono">
                  {order.id}
                </td>
                <td className="px-5 py-3.5 text-sm text-white">
                  {order.customer}
                </td>
                <td className="px-5 py-3.5 text-sm text-text-secondary hidden sm:table-cell">
                  {order.date}
                </td>
                <td className="px-5 py-3.5 text-sm text-text-secondary hidden md:table-cell">
                  {order.items}
                </td>
                <td className="px-5 py-3.5 text-sm text-white font-medium">
                  {formatPrice(order.total)}
                </td>
                <td className="px-5 py-3.5">
                  <span
                  className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[order.status]}`}>
                  
                    {order.status}
                  </span>
                </td>
                <td className="px-5 py-3.5 hidden lg:table-cell">
                  <span
                  className={`text-xs font-medium ${order.payment === 'Paid' ? 'text-success' : order.payment === 'Refunded' ? 'text-danger' : 'text-text-secondary'}`}>
                  
                    {order.payment}
                  </span>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>);

}
function CustomersTab() {
  return (
    <div
      className="rounded-card overflow-hidden"
      style={{
        background: 'rgba(13, 21, 38, 0.7)',
        border: '1px solid rgba(255,255,255,0.08)'
      }}>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="px-5 py-3 text-left text-xs font-medium text-text-muted uppercase tracking-wider">
                Customer
              </th>
              <th className="px-5 py-3 text-left text-xs font-medium text-text-muted uppercase tracking-wider hidden md:table-cell">
                Joined
              </th>
              <th className="px-5 py-3 text-left text-xs font-medium text-text-muted uppercase tracking-wider">
                Orders
              </th>
              <th className="px-5 py-3 text-left text-xs font-medium text-text-muted uppercase tracking-wider hidden sm:table-cell">
                Total Spent
              </th>
              <th className="px-5 py-3 text-left text-xs font-medium text-text-muted uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {dummyCustomers.map((c) =>
            <tr
              key={c.email}
              className="border-b border-border/50 hover:bg-white/[0.02] transition-colors">
              
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">
                        {c.name.
                      split(' ').
                      map((n) => n[0]).
                      join('')}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm text-white">{c.name}</p>
                      <p className="text-xs text-text-muted">{c.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3.5 text-sm text-text-secondary hidden md:table-cell">
                  {c.joined}
                </td>
                <td className="px-5 py-3.5 text-sm text-white">{c.orders}</td>
                <td className="px-5 py-3.5 text-sm text-white font-medium hidden sm:table-cell">
                  {formatPrice(c.spent)}
                </td>
                <td className="px-5 py-3.5">
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-success/15 text-success">
                    {c.status}
                  </span>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>);

}