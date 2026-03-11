import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useStoreCatalogo = defineStore("catalogo", () => {
  const count = ref<number>(0);

  const doubleCount = computed(() => count.value * 2);

  const increment = (): void => {
    if (count.value < 10) count.value++;
  };

  const decrement = (): void => {
    if (count.value > 0) count.value--;
  };

  const reset = (): void => {
    count.value = 0;
  };

  return {
    count,
    doubleCount,
    increment,
    decrement,
    reset,
  };
});
