<template>
  <UCard
    divide="false"
    class="h-full max-h-[400px] cursor-pointer items-center rounded-sm text-slate-800 shadow-sm transition-all duration-100 ease-in-out hover:bg-slate-50 hover:text-slate-600 hover:shadow-md"
  >
    <template #header>
      <div class="flex h-[190px] items-center justify-center">
        <nuxt-img class="max-h-[150px]" :src="product.thumbnail" />
      </div>
    </template>

    <div class="tex-lg text-left font-semibold">
      {{ product.title }}
    </div>
    <div class="flex items-center gap-1 text-black">
      <UIcon name="i-heroicons-currency-dollar" />
      <span>{{ product.price }}</span>
      <UIcon name="i-heroicons-receipt-percent" />
      <span>{{ product.discountPercentage }}</span>
    </div>
    <template #footer>
      <div class="flex flex-row flex-wrap items-end justify-between">
        <UButton
          color="lime"
          variant="soft"
          class="h-full w-[48%] items-center"
          size="xl"
        >
          <template #leading>
            <span class="w-full">Detail</span>
          </template>
        </UButton>
        <UButton
          color="emerald"
          variant="soft"
          class="h-full w-[48%] items-center"
          size="xl"
          @click="handleCart(product.id, 1)"
        >
          <template #leading>
            <span class="w-full">To cart</span>
          </template>
        </UButton>
      </div>
    </template>
  </UCard>
</template>
<script setup lang="ts">
import { useCartStore } from "../../../store/cart.ts";
defineProps<{
  product: {
    brand: string;
    category: string;
    description: string;
    discountPrecentage: number;
    id: number;
    images: string[];
    price: number;
    rating: number;
    stock: number;
    thumbnail: string;
    title: string;
  };
}>();
const handleCart = (productId: number, quenatity: number = 1) => {
  const store = useCartStore();
  store.add(productId, quenatity);
};
</script>
