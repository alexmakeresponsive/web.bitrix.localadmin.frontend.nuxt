<template>
  <div class="btn-group">
    <button type="button" class="btn-sm btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Меню
    </button>
    <div class="dropdown-menu dropdown-menu-left">
      <NuxtLink class="dropdown-item" to="/settings">Настройки</NuxtLink>
      <NuxtLink class="dropdown-item" to="/about">О приложении</NuxtLink>
      <div class="dropdown-divider"></div>
      <div class="dropdown-item">
        Имя Фамилия
        <span v-on:click="logout" type="button">[Выход]</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "menu-main",
  methods: {
    logout: async function (e) {
      try
      {
        await fetch(
            'http://192.168.100.6/api/auth/logout',
            {
              method: 'GET',
            }
        ).then(response => {
          // console.log(response)

          if(!response)
          {
            console.log('many req per sec');
            return {};
          }

          if(response.status !== 200)
          {
            console.log('server unavailable');
            return {};
          }

          return response.json();
        })
            .then(data => {
              console.log(data);

              if (!data.hasOwnProperty('status'))
              {
                console.log("status error")
                return;
              }

              if (data.status !== 200)
              {
                console.log('error when logout')
                return;
              }


              this.$store.commit('http/updateRedirectPathFirst', "");
              this.$store.commit('token/updateCsrf', "");

              this.$store.commit('spaces/updateSpaceList', []);

              window.location = '/local/admin/'
            });
      }
      catch (e)
      {
        console.log(e);
        alert("catch!");
        redirect(`/error/http/error`);
      }
    }
  }

}
</script>
