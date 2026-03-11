<script setup lang="ts">
definePageMeta({
  layout: "header-footer",
});
</script>

<template>
  <div>
    <TheTitle>Home</TheTitle>

    <TheCounter />

    <ParentComponent />

    <Inventario />

    <NuxtLink to="/series-bonitas" class="text-blue-600 underline block mt-4">
      Ir a la página de Series Bonitas
    </NuxtLink>
  </div>
</template>
