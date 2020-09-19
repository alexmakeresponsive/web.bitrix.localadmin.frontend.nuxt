<template>
  <div>
    order
  </div>
</template>
<script>
import getTextLang from "@/shared/lang/getText";

export default {
  layout: 'shop',
  components: {

  },
  data: () => {
    return {
      lang: {
        text: {
          "marketing": {
            "head": "",
            "menu": {
              "items": [

              ]
            }
          },
          "shop": {
            "head": "",
            "menu": {
              "items": [

              ]
            }
          }
        }
      },
    }
  },
  mounted: async function() {
    const text = await getTextLang('page/content/admin/shop', this.$store);

    if (text)
    {
      this.lang.text = text;
    }
  }
}
</script>

