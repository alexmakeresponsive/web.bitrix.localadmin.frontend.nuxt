<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-3">
        <div class="card text-white bg-secondary border-info mt-3">
          <div class="card-header text-center">{{lang.text.head}}</div>
          <div class="card-body">
            <h4 class="card-title text-center">{{lang.text.title}}</h4>
            <div class="card-text text-center">
              <p>{{lang.text["line-1"]}}</p>
              <p>
                {{lang.text["line-2"]}}
              </p>
              <p>{{lang.text["line-3"]}}</p>
              <p>{{lang.text["line-4"]}}</p>
              <NuxtLink to="../" class="btn btn-primary">{{lang.text.button.back}}</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import getTextLang from "@/shared/lang/getText";

export default {
  layout: 'default',
  data: () => {
    return {
      pathLogin: '',
      lang: {
        text: {
          "head":  "",
          "title": "",
          "line-1": "",
          "line-2": "",
          "line-3": "",
          "line-4": "",
          "button": {
            "back": ""
          }
        }
      }
    }
  },
  mounted: async function() {
    this.pathLogin = this.$store.state.env.host + '/local/admin/login/'

    const text = await getTextLang('page/about');

    if (text)
    {
      this.lang.text = text;
    }
  }
}
</script>

