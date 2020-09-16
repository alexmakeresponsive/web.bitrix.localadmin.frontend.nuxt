<template>
  <div>
    <header-content></header-content>
    <div class="container-fluid">
      <div class="row">
        <div class="col-6" style="padding-right: 7.5px;">
          <div class="card text-white bg-secondary mb-3">
            <div class="card-header" style="display: flex; justify-content: space-between; align-items: center">
              <span>{{lang.text.marketing.head}}</span>
            </div>
            <div class="card-body">
              <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action" v-for="item of lang.text.marketing.menu.items">
                  {{item}}
                </a>
              </div>
            </div>
          </div>

        </div>
        <div class="col-6" style="padding-left: 7.5px;">
          <div class="card text-white bg-secondary mb-3">
            <div class="card-header" style="display: flex; justify-content: space-between; align-items: center">
              <span>{{lang.text.shop.head}}</span>
            </div>
            <div class="card-body">
              <div class="list-group">
                <NuxtLink to="/content/admin/edit/shop/catalog" class="list-group-item list-group-item-action"
                          style="margin-bottom: -1px"
                          v-if="lang.text.shop.menu.items[0]"
                >
                  {{lang.text.shop.menu.items[0].title}}
                </NuxtLink>
                <div style="margin-bottom: -1px"
                   v-for="(item, index)  of lang.text.shop.menu.items"
                   v-if="index !== 0"
                >
                  <a href="#" class="list-group-item list-group-item-action"
                  >
                    {{item.title}}</a>
                  <a href="#" class="list-group-item list-group-item-action" v-for="child of item.childs">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{child}}
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderContent from "@/components/header/HeaderContent";
import getTextLang from "@/shared/lang/getText";

export default {
  layout: 'default',
  components: {
    HeaderContent
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
      }
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

