<script setup lang="ts">
const routes = useRoute();

const { category, title } = routes.params;
</script>

<template>
  <div class="p-5">
    <h1 class="text-xl">
      Estás en: Episodio: <strong>{{ title }}</strong> de la categoría:
      <strong>{{ category }}</strong>
    </h1>
    <NuxtLink to="/series-bonitas" class="block mt-2 text-sm text-gray-500">
      ← Volver atrás
    </NuxtLink>
  </div>
</template>
