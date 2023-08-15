<template>
  <UContainer
    class="my-11 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-4"
    v-for="(page, index) in data?.pages"
  >
    <div v-for="item in page.products">
      <CommonProduct :key="item.title" :product="item" />
    </div>
  </UContainer>

  <UContainer class="mb-16 flex items-center justify-center">
    <UButton
      size="xl"
      :loading="isLoading"
      class="w-1/4 justify-center"
      @click="loadHandler"
    >
      Load more
    </UButton>
  </UContainer>
</template>
<script setup lang="ts">
useHead({
  title: "Random shop",
  meta: [
    {
      name: "description",
      content: "Simple random shop",
    },
  ],
});
import { useInfiniteQuery } from "@tanstack/vue-query";
const productFetcher = async ({ pageParam = 0 }) => {
  const res = await fetch(
    `https://dummyjson.com/products?limit=12&skip=${pageParam}`,
  );
  return res.json();
};

const { data, fetchNextPage, isLoading } = useInfiniteQuery({
  queryKey: ["products"],
  queryFn: productFetcher,
  getNextPageParam: (lastPage) => lastPage.skip + lastPage.limit + 1,
});
const loadHandler = () => {
  fetchNextPage();
};
</script>
