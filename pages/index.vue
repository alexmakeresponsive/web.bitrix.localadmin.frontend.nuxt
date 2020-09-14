<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-3">
        <div class="card text-white bg-secondary border-info mt-3">
          <div class="card-header text-center">Welcome</div>
          <div class="card-body">
            <h4 class="card-title text-center">Welcome to Local Admin</h4>
            <div  class="card-text text-center">
              <p>Sign in on <a :href="pathLogin" class="text-dark"> this page</a>
              </p>
              <p>
                Then you wiil be redirected on private page
              </p>
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

    const redirectPathFirst = store.state.http.redirectPathFirst;
    // console.log(redirectPathFirst)

    if (redirectPathFirst !== "no-redirect")
    {
      redirect(redirectPathFirst);
    }
  },
  mounted() {
    this.pathLogin = this.$store.state.env.host + '/local/admin/login/'
  }
}
</script>

