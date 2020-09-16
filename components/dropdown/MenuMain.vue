<template>
  <div class="btn-group">
    <button type="button" class="btn-sm btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      {{lang.text.title}}
    </button>
    <div class="dropdown-menu dropdown-menu-left">
      <NuxtLink class="dropdown-item" to="/settings">{{lang.text.items[0]}}</NuxtLink>
      <NuxtLink class="dropdown-item" to="/about">{{lang.text.items[1]}}</NuxtLink>
      <div class="dropdown-divider"></div>
      <div class="dropdown-item">
        Имя Фамилия
        <span v-on:click="logout" type="button">[{{lang.text.link.logout}}]</span>
      </div>
    </div>
  </div>
</template>
<script>
import getTextLang from "@/shared/lang/getText";

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
  },
  data: () => {
    return {
      lang: {
        text: {
          "title": "",
          "items": [

          ],
          "link": {
            "logout": ""
          }
        }
      }
    }
  },
  mounted: async function() {
    const text = await getTextLang('component/dropdown/MenuMain');

    if (text)
    {
      this.lang.text = text;
    }
  }
}
</script>
