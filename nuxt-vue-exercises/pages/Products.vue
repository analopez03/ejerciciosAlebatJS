<script setup lang="ts">
import productsRedirect from "~/middleware/products-redirect";
definePageMeta({
  middleware: productsRedirect,
});
</script>

<template>
  <div class="p-5">
    <h1 class="text-2xl font-bold mb-4">Productos</h1>
    <p>
      Esta es la página de productos. Debería redirigir a la página de inicio.
    </p>
  </div>
</template>
