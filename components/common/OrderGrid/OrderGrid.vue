<template>
  <UTable :columns="columns" :rows="products" />
</template>
<script setup lang="ts">
import { useCartStore } from "../../../store/cart.ts";
const columns = [
  {
    key: "title",
    label: "Name",
  },
  {
    key: "quantity",
    label: "Quantity",
  },
  {
    key: "price",
    label: "Price",
  },
  {
    key: "total",
    label: "Total",
  },
];
const { products } = useCartStore();
</script>
