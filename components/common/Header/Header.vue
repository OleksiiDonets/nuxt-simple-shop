<template>
  <header
    class="flex w-full items-center justify-start rounded-sm px-3 py-6 shadow-md"
  >
    <UContainer class="flex w-full items-center justify-between">
      <nuxt-link href="/">
        <div
          class="flex w-36 flex-col items-center gap-4 font-mono text-sm font-semibold"
        >
          <nuxt-img src="/icons/logotype.svg" alt="Store Nuxt" width="45" />
          <span> Store Nuxt.js</span>
        </div>
      </nuxt-link>
      <CommonCart />
    </UContainer>
  </header>
</template>
<script setup></script>
