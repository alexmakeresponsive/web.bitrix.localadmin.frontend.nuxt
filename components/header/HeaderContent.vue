<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card text-white bg-secondary mb-3 mt-3">
          <div class="card-header">
            <div class="row">
              <div class="col-6" style="padding-right: 7.5px; display: flex; justify-content: space-between; align-items: center;">
                <ul class="nav" style="margin-left: -1rem;">
                  <li class="nav-item">
                    <NuxtLink to="/content/admin" class="nav-link active">{{lang.text.menu["top-left"].items[0]}}</NuxtLink>
                  </li>
                </ul>
                <div>
                  <space></space>
                </div>
              </div>
              <div class="col-6" style="padding-left: 7.5px; display: flex; justify-content: space-between; align-items: center;">
                <div>
                  <menu-main></menu-main>
                </div>
                <ul class="nav" style="margin-right: -1rem;">
                  <li class="nav-item">
                    <NuxtLink to="/content/admin/structure" class="nav-link active">{{lang.text.menu["top-right"].items[0]}}</NuxtLink>
                  </li>
                  <li class="nav-item">
                    <NuxtLink to="/content/admin/journal" class="nav-link active">{{lang.text.menu["top-right"].items[1]}}</NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
            <div class="row">
              <div class="col-12" style="display: flex; justify-content: space-between; align-items: center;">
                <ul class="nav" style="margin-left: -1rem;">
                  <li class="nav-item">
                    <NuxtLink to="/content/admin/data" class="nav-link active">{{lang.text.menu["bottom-left"].items[0]}}</NuxtLink>
                  </li>
                  <li class="nav-item">
                    <NuxtLink to="/content/admin/galery" class="nav-link active">{{lang.text.menu["bottom-left"].items[1]}}</NuxtLink>
                  </li>
                  <li class="nav-item">
                    <NuxtLink to="/content/admin/service" class="nav-link active">{{lang.text.menu["bottom-left"].items[2]}}</NuxtLink>
                  </li>
                </ul>
                <ul class="nav" style="margin-right: -1rem;">
                  <li class="nav-item">
                    <NuxtLink to="/content/admin/marketplace" class="nav-link active">{{lang.text.menu["bottom-right"].items[0]}}</NuxtLink>
                  </li>
                  <li class="nav-item">
                    <NuxtLink to="/content/admin/shop" class="nav-link active">{{lang.text.menu["bottom-right"].items[1]}}</NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Space from "@/components/dropdown/Space";
import MenuMain from "@/components/dropdown/MenuMain";
import getTextLang from "@/shared/lang/getText";
export default {
  components: {
    Space,
    MenuMain
  },
  data: () => {
    return {
      lang: {
        text: {
          "menu": {
            "top-left": {
              "items": [

              ]
            },
            "top-right": {
              "items": [

              ]
            },
            "bottom-left": {
              "items": [

              ]
            },
            "bottom-right": {
              "items": [

              ]
            }
          }
        }
      }
    }
  },
  mounted: async function() {
    const text = await getTextLang('component/header/HeaderContent', this.$store);

    if (text)
    {
      this.lang.text = text;
    }
  }
}
</script>
