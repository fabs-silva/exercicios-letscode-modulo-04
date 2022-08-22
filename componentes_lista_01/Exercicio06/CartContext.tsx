import { createContext, ReactNode, useContext, useState } from 'react';

type CartProviderProps = {
  children: ReactNode;
};

type CartContextType = {
  getCartItems: () => CartItem[];
  setCartItems: (cartItems: CartItem[]) => void;
  getAmount: (id: number) => number;
  setAmount: (id: number, amount: number, price: number) => void;
  updateAmount: (id: number, amount: number) => void;
  removeFromCart: (id: number) => void;
  getTotal: (cartItems: CartItem[]) => number;
};

export type CartItem = {
  id: number;
  amount: number;
  price: number;
};

const CartContext = createContext({} as CartContextType);

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState([] as CartItem[]);

  function getCartItems() {
    return cartItems;
  }
  function getAmount(id: number) {
    const item = cartItems.find((item) => item.id === id);

    return item?.amount || 0;
  }
  function setAmount(id: number, amount: number, price: number) {
    setCartItems((current) => {
      const item = cartItems.find((item) => item.id === id);
      if (!item) {
        return [...current, { id, amount, price }];
      } else {
        return current.map((item) => {
          if (item.id === id) {
            return { ...item, amount: item.amount + amount };
          } else {
            return item;
          }
        });
      }
    });
  }
  function updateAmount(id: number, amount: number) {
    setCartItems((current) => {
      return current.map((item) => {
        if (item.id === id) {
          return { ...item, amount };
        } else {
          return item;
        }
      });
    });
  }
  function removeFromCart(id: number) {
    setCartItems((current) => {
      return current.filter((item) => item.id !== id);
    });
  }

  function getTotal(cartItems: CartItem[]) {
    return cartItems.reduce((acc, item) => {
      return acc + item.amount * item.price;
    }, 0);
  }

  return (
    <CartContext.Provider
      value={{
        getCartItems,
        setCartItems,
        getAmount,
        setAmount,
        removeFromCart,
        updateAmount,
        getTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
