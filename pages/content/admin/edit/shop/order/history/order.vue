<template>
  <div>
    order
  </div>
</template>
<script>
import getTextLang from "@/shared/lang/getText";
import Order from "@/shared/api/sale/order";

export default {
  layout: 'shop',
  components: {

  },
  data: () => {
    return {
      component: {
        sale: {

        }
      },
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
  beforeMount: async function() {
    this.component.sale.order = new Order();

    this.component.sale.order.bindStore(this.$store);
    this.component.sale.order.bindRoute(this.$route);
  },
  mounted: async function() {
    const text = await getTextLang('page/content/admin/shop', this.$store);

    if (text)
    {
      this.lang.text = text;
    }

                 await this.component.sale.order.getListOrderHistory();
  }
}
</script>

