<template>
  <div class="flex flex-col gap-3 px-3 py-3">
    <USkeleton
      class="h-[300px] w-full bg-gray-200"
      :ui="{ rounded: 'rounded-sm' }"
    />
    <USkeleton class="h-5 w-[200px] bg-gray-200" />
    <USkeleton class="h-5 w-[200px] bg-gray-200" />
    <USkeleton class="h-5 w-[200px] bg-gray-200" />
    <div class="flex h-16 w-full flex-row flex-wrap justify-between px-3 py-3">
      <USkeleton class="h-full w-[45%] bg-gray-200" />
      <USkeleton class="h-full w-[45%] bg-gray-200" />
    </div>
  </div>
</template>
