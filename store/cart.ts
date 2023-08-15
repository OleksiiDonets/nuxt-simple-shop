import { defineStore } from "pinia";

export type TProduct = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  dscountPercentage: number;
  discountedPrice: number;
};
type TCart = {
  id: number;
  products: TProduct[];
  total: number;
  discountedTotal: number;
  iserId: number;
  totalProducts: number;
  totalQuantity: number;
};
type CartState = {
  items: TCart | {};
}
export const useCartStore = defineStore({
  id: 'cart',
  state: (): CartState => ({
    items: {}
  }),
  persist: {
    storage: persistedState.localStorage
  },
  actions: {
    async add(productId: number, quantity: number) {
      const config = useRuntimeConfig();
      const productsArr = [ { id: productId, quantity: quantity } ]
      try {
        const res = await fetch(`${config.public.apiUrl}carts/1`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            merge: true,
            products: productsArr
          })
        })
        const result = await res.json();
        this.items = result;
      } catch (error) {
        console.error(error);
      }
    }
  },
  getters: {
    countItems(state): number {
      return state.items.totalQuantity
    },
    products(state): TProduct[] {
      return state.items.products;
    }
  }
})
