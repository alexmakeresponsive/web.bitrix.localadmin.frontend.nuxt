<template>
  <div class="btn-group">
    <button type="button" class="btn-sm btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      {{lang.text.title}}
    </button>
    <div class="dropdown-menu dropdown-menu-right">
      <NuxtLink to="/admin" class="dropdown-item" type="button">{{lang.text.items[0]}}</NuxtLink>
      <NuxtLink to="/content/admin" class="dropdown-item" type="button">{{lang.text.items[1]}}</NuxtLink>
    </div>
  </div>
</template>
<script>
import getTextLang from "@/shared/lang/getText";

export default {
  name: "space",
  data: () => {
    return {
      lang: {
        text: {
          "title": "",
          "items": [

          ]
        }
      }
    }
  },
  mounted: async function() {
    const text = await getTextLang('component/dropdown/Space', this.$store);

    if (text)
    {
      this.lang.text = text;
    }
  }
}
</script>

