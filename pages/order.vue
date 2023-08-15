<template>
  <UContainer class="my-7">
    <div class="mb-10 flex w-full justify-center px-3 py-3">
      <h1 class="text-bold font-mono text-3xl">Checkout</h1>
    </div>

    <div>
      <div
        v-show="!!countItems"
        class="grid grid-cols-1 gap-10 md:grid-cols-[1fr_2fr]"
      >
        <div>
          <CommonCheckoutForm />
        </div>
        <div class="grid place-content-center">
          <CommonOrderGrid />
        </div>
      </div>
      <div
        v-show="!!!countItems"
        class="mt-32 flex h-2/3 flex-col items-center justify-center gap-4 text-6xl"
      >
        <h2>Ooops!</h2>
        <p>Your cart is empty :(</p>
      </div>
    </div>
  </UContainer>
</template>
<script setup lang="ts">
useHead({
  title: "Checkout page",
  meta: [
    {
      name: "description",
      content: "Checkout page on Random Shop",
    },
  ],
});
import { useCartStore } from "../store/cart";
const { countItems } = useCartStore();
</script>
