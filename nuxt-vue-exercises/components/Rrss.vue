<script setup lang="ts">
const rrss = [
  { icon: "table", src: "/table.svg" },
  { icon: "wheelchair", src: "/wheelchair.svg" },
];
</script>

<template>
  <div class="flex space-x-4">
    <a v-for="item in rrss" :key="item.icon" :src="item.src" target="_blank">
      <img :src="item.src" :alt="item.icon" class="w-6 h-6" />
    </a>
  </div>
</template>
