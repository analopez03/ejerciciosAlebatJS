<script setup lang="ts">
import ProductCard from "~/components/ProductCard.vue";
import { products } from "~/data/mock";

const store = useStoreCatalogo();
</script>

<template>
  <div>
    <h1 class="text-7xl p-8 text-center">Catalogo</h1>
    <div class="ms-8">
      <p>Contador: {{ store.count }}</p>
      <p>Doble del contador: {{ store.doubleCount }}</p>
      <button
        @click="store.increment"
        class="bg-emerald-600 text-white p-2 m-2 rounded"
      >
        Sumar
      </button>
      <button
        @click="store.decrement"
        class="bg-emerald-600 text-white p-2 m-2 rounded"
      >
        Restar
      </button>
      <button
        @click="store.reset"
        class="bg-emerald-600 text-white p-2 m-2 rounded"
      >
        Reset
      </button>
    </div>
    <div class="grid grid-cols-3 gap-4 m-8">
      <ProductCard v-for="p in products" :key="p.id" v-bind="p" />
    </div>
  </div>
</template>
