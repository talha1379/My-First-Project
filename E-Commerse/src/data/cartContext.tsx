import React, {
  useCallback,
  useEffect,
  useState,
  createContext,
  useContext } from
'react';
import { Product } from './products';
export interface CartItem {
  product: Product;
  quantity: number;
}
interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
  isInCart: (productId: string) => boolean;
}
const CartContext = createContext<CartContextType | undefined>(undefined);
export function CartProvider({ children }: {children: React.ReactNode;}) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('ahmad-store-cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem('ahmad-store-cart', JSON.stringify(items));
  }, [items]);
  const addToCart = useCallback((product: Product, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
        item.product.id === product.id ?
        {
          ...item,
          quantity: Math.min(item.quantity + quantity, product.stock)
        } :
        item
        );
      }
      return [
      ...prev,
      {
        product,
        quantity: Math.min(quantity, product.stock)
      }];

    });
  }, []);
  const removeFromCart = useCallback((productId: string) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
  }, []);
  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((item) => item.product.id !== productId));
      return;
    }
    setItems((prev) =>
    prev.map((item) =>
    item.product.id === productId ?
    {
      ...item,
      quantity: Math.min(quantity, item.product.stock)
    } :
    item
    )
    );
  }, []);
  const clearCart = useCallback(() => setItems([]), []);
  const cartTotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const isInCart = useCallback(
    (productId: string) => items.some((item) => item.product.id === productId),
    [items]
  );
  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
        isInCart
      }}>
      
      {children}
    </CartContext.Provider>);

}
export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
}