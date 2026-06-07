import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  SlidersHorizontalIcon,
  XIcon,
  ChevronDownIcon,
  StarIcon,
  SearchIcon,
  PackageIcon,
  GridIcon,
  ListIcon } from
'lucide-react';
import { products, formatPrice } from '../data/products';
import { ProductCard } from '../components/ProductCard';
const categories = [
'CPUs',
'RAMs',
'LCDs',
'Keyboards',
'Mice',
'Graphics Cards',
'SSDs',
'Motherboards',
'Gaming Accessories'];

const brands = [
'Intel',
'AMD',
'Nvidia',
'Samsung',
'Corsair',
'ASUS',
'Logitech',
'LG',
'Razer',
'HyperX',
'WD',
'Keychron',
'MSI',
'G.Skill'];

const sortOptions = [
{
  label: 'Newest First',
  value: 'newest'
},
{
  label: 'Price: Low to High',
  value: 'price_asc'
},
{
  label: 'Price: High to Low',
  value: 'price_desc'
},
{
  label: 'Best Rating',
  value: 'rating'
},
{
  label: 'Most Reviewed',
  value: 'reviews'
}];

export function Products() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [minRating, setMinRating] = useState(0);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [onSaleOnly, setOnSaleOnly] = useState(false);
  const [sortBy, setSortBy] = useState('newest');
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);
  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    }
    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }
    if (selectedBrands.length > 0) {
      result = result.filter((p) => selectedBrands.includes(p.brand));
    }
    if (minRating > 0) {
      result = result.filter((p) => p.averageRating >= minRating);
    }
    if (inStockOnly) {
      result = result.filter((p) => p.stock > 0);
    }
    if (onSaleOnly) {
      result = result.filter((p) => p.discountPercent && p.discountPercent > 0);
    }
    switch (sortBy) {
      case 'price_asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price_desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.averageRating - a.averageRating);
        break;
      case 'reviews':
        result.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      default:
        result.sort((a, b) => Number(b.id) - Number(a.id));
    }
    return result;
  }, [
  selectedCategories,
  selectedBrands,
  minRating,
  inStockOnly,
  onSaleOnly,
  sortBy,
  searchQuery]
  );
  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
    prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };
  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
    prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };
  const activeFilterCount =
  selectedCategories.length +
  selectedBrands.length + (
  minRating > 0 ? 1 : 0) + (
  inStockOnly ? 1 : 0) + (
  onSaleOnly ? 1 : 0);
  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setMinRating(0);
    setInStockOnly(false);
    setOnSaleOnly(false);
    setSearchQuery('');
  };
  const filterPanel =
  <div className="space-y-6">
      {/* Search */}
      <div>
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
          <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-[10px] bg-surface-2 border border-border text-white text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" />
        
        </div>
      </div>

      {/* Categories */}
      <FilterSection title="Category">
        {categories.map((cat) =>
      <label
        key={cat}
        className="flex items-center gap-2.5 cursor-pointer group">
        
            <input
          type="checkbox"
          checked={selectedCategories.includes(cat)}
          onChange={() => toggleCategory(cat)}
          className="w-4 h-4 rounded border-border bg-surface-2 text-primary focus:ring-primary/50 focus:ring-offset-0" />
        
            <span className="text-sm text-text-secondary group-hover:text-white transition-colors">
              {cat}
            </span>
            <span className="ml-auto text-xs text-text-muted">
              {products.filter((p) => p.category === cat).length}
            </span>
          </label>
      )}
      </FilterSection>

      {/* Brands */}
      <FilterSection title="Brand">
        {brands.map((brand) =>
      <label
        key={brand}
        className="flex items-center gap-2.5 cursor-pointer group">
        
            <input
          type="checkbox"
          checked={selectedBrands.includes(brand)}
          onChange={() => toggleBrand(brand)}
          className="w-4 h-4 rounded border-border bg-surface-2 text-primary focus:ring-primary/50 focus:ring-offset-0" />
        
            <span className="text-sm text-text-secondary group-hover:text-white transition-colors">
              {brand}
            </span>
          </label>
      )}
      </FilterSection>

      {/* Rating */}
      <FilterSection title="Minimum Rating">
        <div className="flex flex-col gap-2">
          {[4, 3, 2, 0].map((rating) =>
        <label
          key={rating}
          className="flex items-center gap-2.5 cursor-pointer group">
          
              <input
            type="radio"
            name="rating"
            checked={minRating === rating}
            onChange={() => setMinRating(rating)}
            className="w-4 h-4 border-border bg-surface-2 text-primary focus:ring-primary/50" />
          
              <span className="flex items-center gap-1">
                {rating > 0 ?
            <>
                    {Array.from({
                length: 5
              }).map((_, i) =>
              <StarIcon
                key={i}
                className={`w-3.5 h-3.5 ${i < rating ? 'text-warning fill-warning' : 'text-text-muted'}`} />

              )}
                    <span className="text-xs text-text-secondary ml-1">
                      & up
                    </span>
                  </> :

            <span className="text-sm text-text-secondary">
                    Any rating
                  </span>
            }
              </span>
            </label>
        )}
        </div>
      </FilterSection>

      {/* Toggles */}
      <FilterSection title="Availability">
        <ToggleSwitch
        label="In Stock only"
        checked={inStockOnly}
        onChange={setInStockOnly} />
      
        <ToggleSwitch
        label="On Sale only"
        checked={onSaleOnly}
        onChange={setOnSaleOnly} />
      
      </FilterSection>

      {activeFilterCount > 0 &&
    <button
      onClick={clearAllFilters}
      className="w-full py-2.5 rounded-[10px] border border-border text-text-secondary text-sm hover:text-white hover:border-white/20 transition-colors">
      
          Clear All Filters
        </button>
    }
    </div>;

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
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-text-muted mb-3">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-text-secondary">Products</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white">
            All Products
          </h1>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div
              className="sticky top-24 rounded-card p-5 max-h-[calc(100vh-8rem)] overflow-y-auto scrollbar-hide"
              style={{
                background: 'rgba(13, 21, 38, 0.7)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.08)'
              }}>
              
              <h2 className="font-heading text-sm font-semibold text-white mb-5 flex items-center gap-2">
                <SlidersHorizontalIcon className="w-4 h-4 text-primary" />
                Filters
                {activeFilterCount > 0 &&
                <span className="ml-auto px-2 py-0.5 bg-primary/20 text-primary text-xs rounded-full">
                    {activeFilterCount}
                  </span>
                }
              </h2>
              {filterPanel}
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Sort Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                {/* Mobile filter button */}
                <button
                  onClick={() => setMobileFiltersOpen(true)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2.5 rounded-[10px] bg-surface border border-border text-sm text-text-secondary hover:text-white transition-colors">
                  
                  <SlidersHorizontalIcon className="w-4 h-4" />
                  Filters
                  {activeFilterCount > 0 &&
                  <span className="px-1.5 py-0.5 bg-primary text-white text-xs rounded-full">
                      {activeFilterCount}
                    </span>
                  }
                </button>
                <p className="text-sm text-text-secondary">
                  <span className="text-white font-medium">
                    {filteredProducts.length}
                  </span>{' '}
                  products
                </p>
              </div>

              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none pl-4 pr-10 py-2.5 rounded-[10px] bg-surface border border-border text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer">
                  
                  {sortOptions.map((opt) =>
                  <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  )}
                </select>
                <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
              </div>
            </div>

            {/* Active Filter Chips */}
            <AnimatePresence>
              {activeFilterCount > 0 &&
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0
                }}
                animate={{
                  opacity: 1,
                  height: 'auto'
                }}
                exit={{
                  opacity: 0,
                  height: 0
                }}
                className="flex flex-wrap gap-2 mb-6">
                
                  {selectedCategories.map((cat) =>
                <FilterChip
                  key={cat}
                  label={cat}
                  onRemove={() => toggleCategory(cat)} />

                )}
                  {selectedBrands.map((brand) =>
                <FilterChip
                  key={brand}
                  label={brand}
                  onRemove={() => toggleBrand(brand)} />

                )}
                  {minRating > 0 &&
                <FilterChip
                  label={`${minRating}★+`}
                  onRemove={() => setMinRating(0)} />

                }
                  {inStockOnly &&
                <FilterChip
                  label="In Stock"
                  onRemove={() => setInStockOnly(false)} />

                }
                  {onSaleOnly &&
                <FilterChip
                  label="On Sale"
                  onRemove={() => setOnSaleOnly(false)} />

                }
                </motion.div>
              }
            </AnimatePresence>

            {/* Product Grid */}
            {loading ?
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {Array.from({
                length: 8
              }).map((_, i) =>
              <SkeletonCard key={i} />
              )}
              </div> :
            filteredProducts.length === 0 ?
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
              
                <PackageIcon className="w-16 h-16 text-text-muted mb-4" />
                <h3 className="font-heading text-xl font-semibold text-white mb-2">
                  No products found
                </h3>
                <p className="text-text-secondary text-sm mb-6 max-w-sm">
                  Try adjusting your filters or search query to find what you're
                  looking for.
                </p>
                <button
                onClick={clearAllFilters}
                className="px-6 py-2.5 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary-light transition-colors">
                
                  Clear All Filters
                </button>
              </motion.div> :

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filteredProducts.map((product, i) =>
              <ProductCard key={product.id} product={product} index={i} />
              )}
              </div>
            }
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {mobileFiltersOpen &&
        <>
            <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            exit={{
              opacity: 0
            }}
            className="fixed inset-0 z-40 bg-black/60 lg:hidden"
            onClick={() => setMobileFiltersOpen(false)} />
          
            <motion.div
            initial={{
              x: '-100%'
            }}
            animate={{
              x: 0
            }}
            exit={{
              x: '-100%'
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30
            }}
            className="fixed top-0 left-0 bottom-0 z-50 w-80 max-w-[85vw] bg-surface overflow-y-auto lg:hidden">
            
              <div className="p-5">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-heading text-lg font-semibold text-white flex items-center gap-2">
                    <SlidersHorizontalIcon className="w-5 h-5 text-primary" />
                    Filters
                  </h2>
                  <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="p-2 text-text-secondary hover:text-white">
                  
                    <XIcon className="w-5 h-5" />
                  </button>
                </div>
                {filterPanel}
              </div>
            </motion.div>
          </>
        }
      </AnimatePresence>
    </motion.main>);

}
/* ─── Sub-components ─── */
function FilterSection({
  title,
  children



}: {title: string;children: React.ReactNode;}) {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between mb-3">
        
        <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">
          {title}
        </span>
        <ChevronDownIcon
          className={`w-4 h-4 text-text-muted transition-transform ${open ? 'rotate-180' : ''}`} />
        
      </button>
      <AnimatePresence>
        {open &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          className="flex flex-col gap-2.5 overflow-hidden">
          
            {children}
          </motion.div>
        }
      </AnimatePresence>
    </div>);

}
function ToggleSwitch({
  label,
  checked,
  onChange




}: {label: string;checked: boolean;onChange: (val: boolean) => void;}) {
  return (
    <label className="flex items-center justify-between cursor-pointer group">
      <span className="text-sm text-text-secondary group-hover:text-white transition-colors">
        {label}
      </span>
      <button
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative w-10 h-5.5 rounded-full transition-colors ${checked ? 'bg-primary' : 'bg-surface-2 border border-border'}`}
        style={{
          width: 40,
          height: 22
        }}>
        
        <motion.div
          animate={{
            x: checked ? 20 : 2
          }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 30
          }}
          className="absolute top-[3px] w-4 h-4 rounded-full bg-white shadow-sm" />
        
      </button>
    </label>);

}
function FilterChip({
  label,
  onRemove



}: {label: string;onRemove: () => void;}) {
  return (
    <motion.span
      layout
      initial={{
        opacity: 0,
        scale: 0.8
      }}
      animate={{
        opacity: 1,
        scale: 1
      }}
      exit={{
        opacity: 0,
        scale: 0.8
      }}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs font-medium">
      
      {label}
      <button onClick={onRemove} className="hover:text-white transition-colors">
        <XIcon className="w-3 h-3" />
      </button>
    </motion.span>);

}
function SkeletonCard() {
  return (
    <div
      className="rounded-card overflow-hidden animate-pulse"
      style={{
        background: 'rgba(13, 21, 38, 0.7)',
        border: '1px solid rgba(255,255,255,0.08)'
      }}>
      
      <div className="h-48 bg-surface-2" />
      <div className="p-4 space-y-3">
        <div className="h-3 w-16 bg-surface-2 rounded" />
        <div className="h-4 w-3/4 bg-surface-2 rounded" />
        <div className="h-3 w-24 bg-surface-2 rounded" />
        <div className="h-5 w-28 bg-surface-2 rounded" />
        <div className="h-10 w-full bg-surface-2 rounded-button" />
      </div>
    </div>);

}