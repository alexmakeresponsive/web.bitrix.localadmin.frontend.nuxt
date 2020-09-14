<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="jumbotron mt-3">
          <h1 class="display-3">Error</h1>
          <Nuxt />
          <NuxtLink to="/local/admin/app/">to home</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "error-http"
}
</script>
