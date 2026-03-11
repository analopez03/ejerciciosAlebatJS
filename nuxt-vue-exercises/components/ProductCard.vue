<script setup lang="ts">
import type { Product } from "@/types/products";

defineProps<Product>();
</script>

<template>
  <div class="border rounded p-4">
    <img
      :src="image"
      alt="Product Image"
      class="w-full h-48 object-cover mb-4"
    />
    <h2 class="text-xl font-bold mb-2">{{ title }}</h2>
    <p class="text-gray-700 mb-4">{{ description }}</p>
    <p class="text-lg font-semibold text-green-600">${{ price }}</p>

    <button class="bg-emerald-900 text-white px-4 py-2 mt-4 rounded">
      Comprar
    </button>
  </div>
</template>
