<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="jumbotron mt-3">
          <h1 class="display-3">Error</h1>
          <p class="lead">
            {{errorText}}
          </p>
          <NuxtLink to="/local/admin/app/">to home</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "error",
  data: () => {
    return {
      errorText: ""
    }
  },
  mounted() {
    this.errorText = this.$store.state.http.errorText;
  }
}
</script>
