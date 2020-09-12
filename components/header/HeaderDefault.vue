<template>

    <div>
      <ul>
        <li>
          <button v-on:click="logout">logout</button>
        </li>
        <li>
          <NuxtLink to="/">home page</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/content">content page</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/settings">settings page</NuxtLink>
        </li>
      </ul>
      <p>logoutStatus: {{JSON.stringify(logoutStatus)}}</p>
    </div>

</template>

<style>

</style>

<script>
export default {
  data() {
    return {
      logoutStatus: []
    }
  },
  // async fetch() {
  //   this.content = await fetch(
  //       'http://192.168.100.6/api/logout'
  //   ).then(res => res.json())
  // },

  methods: {
    logout: async function (event) {
      const self = this;

      this.logoutStatus = await fetch(
          'http://192.168.100.6/api/auth/logout'
      ).then(response => response.json())
          .then(data => {
            console.log(data)
              if (data.status == 200) {
                // window.location = '/local/admin/';
              }
          });
    }

  }
}
</script>
