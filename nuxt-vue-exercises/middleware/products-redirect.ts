export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path === "/Products") {
    alert("Redirigiendo a la página de inicio");
    return navigateTo("/");
  }
});
