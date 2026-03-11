<script setup lang="ts">
const routes = useRoute();

const category = computed(() => routes.params.category);
</script>

<template>
  <div class="p-5">
    <h1 class="text-xl">
      Estás en: Series de la categoría: <strong>{{ category }}</strong>
    </h1>

    <NuxtLink
      :to="`/series-bonitas/${category}/episodio-1-de-spiderman`"
      class="text-blue-600 underline block mt-4"
    >
      Ver Episodio 1 de Spiderman
    </NuxtLink>

    <NuxtLink to="/series-bonitas" class="block mt-2 text-sm text-gray-500">
      ← Volver atrás
    </NuxtLink>
  </div>
</template>
