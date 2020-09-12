<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <nuxt-link to="/">Home page</nuxt-link>
  </div>

</template>

<script>
import hookAutchCheck from "@/hook/beforeCreate/auth/check";

export default {
  props: ['error'],
  name: "error",
  created: async function () {
    try
    {
      if (this.error.statusCode === 404)
      {
        window.location = '/local/dashboard/'
      }
    }
    catch (e)
    {

    }
  },
  mounted() {
  }
}
</script>
