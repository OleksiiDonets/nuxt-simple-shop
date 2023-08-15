<template>
  <nuxt-link to="/order">
    <div class="relative flex flex-col">
      <UIcon class="text-3xl" name="i-heroicons-shopping-cart" />
      <UBadge
        v-if="store.countItems"
        color="red"
        variant="soft"
        class="absolute -bottom-5 -right-4"
        :ui="{
          rounded: 'rounded-full',
          base: 'justify-center inline-flex items-center',
        }"
      >
        {{ store.countItems }}
      </UBadge>
    </div>
  </nuxt-link>
</template>
<script setup lang="ts">
import { useCartStore } from "../../../store/cart.ts";
const store = useCartStore();
</script>
