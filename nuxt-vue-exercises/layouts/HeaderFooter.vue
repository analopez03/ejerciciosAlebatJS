<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-gray-300 p-5">
      <nav>
        <h2>Manú</h2>
        <nuxt-link to="/" class="bg-blue-400 text-white px-4 py-2 m-2 rounded"
          >Home</nuxt-link
        >
        <nuxt-link
          to="/catalogo"
          class="bg-green-400 text-white px-4 py-2 m-2 rounded"
          >Catalogo</nuxt-link
        >
      </nav>
    </header>

    <main>
      <slot />
    </main>
  </div>

  <footer>
    <h2>FOOTER</h2>
    <Rrss />
  </footer>
</template>
