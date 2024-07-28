import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
export type CartItem = {
  name: string;
  quantity: number;
  price: number;
  image: string;
};
export const useCartStore = defineStore('cart', () => {
  const cart = ref<CartItem[]>([]);

  const incrementQuantity = (item: CartItem) => {
    const product = cart.value.find((i) => i.name === item.name);
    if (product) {
      product.quantity++;
    } else {
      cart.value.push({ ...item, quantity: 1 });
    }
  };
  const decreaseQuantity = (productName: string) => {
    const product = cart.value.find((i) => i.name === productName);
    if (product) {
      if (product.quantity > 1) {
        product.quantity--;
      } else {
        removeProductFromCart(productName);
      }
    }
  };

  const removeProductFromCart = (productName: string) => {
    cart.value = cart.value.filter((i) => i.name !== productName);
  };

  const isProductInCart = computed(() => {
    return (productName: string) => {
      return cart.value.some((i) => i.name === productName);
    };
  });

  const cartItems = computed(() => {
    return cart.value.reduce((a, b) => a + b.quantity, 0);
  });

  const getProductQuantity = (productName: string) => {
    const product = cart.value.find((i) => i.name === productName);
    return product ? product.quantity : 1;
  };

  return {
    incrementQuantity,
    isProductInCart,
    getProductQuantity,
    decreaseQuantity,
    cartItems,
    cart,
    removeProductFromCart,
  };
});
