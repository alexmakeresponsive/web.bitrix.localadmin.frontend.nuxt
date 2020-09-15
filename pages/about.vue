<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-3">
        <div class="card text-white bg-secondary border-info mt-3">
          <div class="card-header text-center">About</div>
          <div class="card-body">
            <h4 class="card-title text-center">Local Admin site panel</h4>
            <div class="card-text text-center">
              <p>Designed for 1C-Bitrix</p>
              <p>
                This opensourse software
              </p>
              <p>current version: 1.0.0-dev</p>
              <p>&#9400; Copyright 2020</p>
              <NuxtLink to="../" class="btn btn-primary">Назад</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'default',
  data: () => {
    return {
      pathLogin: ''
    }
  },
  middleware({ store, redirect }) {

    // const redirectPathFirst = store.state.http.redirectPathFirst;
    // // console.log(redirectPathFirst)
    //
    // if (redirectPathFirst !== "no-redirect")
    // {
    //   redirect(redirectPathFirst);
    // }
  },
  mounted() {
    this.pathLogin = this.$store.state.env.host + '/local/admin/login/'
  }
}
</script>

