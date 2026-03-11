<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-gray-300 p-5">
      <nuxt-link to="/" class="bg-blue-400 text-white px-4 py-2 m-2 rounded"
        >Home</nuxt-link
      >
      <nuxt-link
        to="/catalogo"
        class="bg-green-400 text-white px-4 py-2 m-2 rounded"
        >Catalogo</nuxt-link
      >

      <nuxt-link
        to="/Products"
        class="bg-red-400 text-white px-4 py-2 m-2 rounded"
        >Productos</nuxt-link
      >
    </header>

    <main>
      <slot />
    </main>
  </div>

  <footer>
    <p>Copyright © 2024</p>
    <Rrss />
  </footer>
</template>
