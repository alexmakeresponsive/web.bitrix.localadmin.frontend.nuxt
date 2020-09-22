<template>
  <div>
    <header-content></header-content>
    <div class="container-fluid">
      <div class="row">
        <div class="col-4" style="padding-right: 7.5px;">
          <div class="card text-white bg-secondary mb-3">
            <div class="card-header" style="display: flex; justify-content: space-between; align-items: center">
              <span>{{lang.text.shop.head}}</span>
            </div>
            <div class="card-body">
              <div class="list-group">
                <NuxtLink :to="{path: uri.shop.menu.items[0].to}" class="list-group-item list-group-item-action"
                          style="margin-bottom: -1px"
                          v-if="lang.text.shop.menu.items[0]"
                >
                  {{lang.text.shop.menu.items[0].title}}
                </NuxtLink>
                <div style="margin-bottom: -1px"
                     v-for="(item, index)  of lang.text.shop.menu.items"
                     :key="index + '-parent'"
                     v-if="index !== 0"
                >
                  <NuxtLink v-if="uri.shop.menu.items[index]"
                            :to="{path: uri.shop.menu.items[index].to}"
                            class="list-group-item list-group-item-action"
                  >
                    {{item.title}}
                  </NuxtLink>
                  <NuxtLink v-for="(child, indexChild) of item.childs"
                            :key="indexChild + '-child-' + uri.shop.menu.items[index].key"
                            :to="{path: uri.shop.menu.items[index].childs[indexChild]}"
                            class="list-group-item list-group-item-action"
                            >
                     <span style="margin-left: 15px;">{{child}}</span>
                  </NuxtLink>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div class="col-8" style="padding-left: 7.5px;">
          <!--content-->
          <Nuxt />
          <!--content-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderContent from "@/components/header/HeaderContent";
import getTextLang from "@/shared/lang/getText";
import ShopUri from "@/pages/content/admin/shop.uri"

export default {
  name: 'shop',
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
      },
      uri: ShopUri
    }
  },
  mounted: async function() {
    const text = await getTextLang('page/content/admin/shop', this.$store);

    if (text)
    {
      this.lang.text = text;
    }
  },
  methods: {

  }
}
</script>
