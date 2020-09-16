<template>
  <div>
    <header-content></header-content>
    <div class="container-fluid">
      <div class="row">
        <div class="col-6" style="padding-right: 7.5px;">
          <div class="card text-white bg-secondary mb-3">
            <div class="card-header">{{lang.text.cards.event.title}}</div>
            <div class="card-body">

            </div>
          </div>
        </div>
        <div class="col-6" style="padding-left: 7.5px;">
          <div class="card text-white bg-secondary mb-3">
            <div class="card-header">{{lang.text.cards.iblock.title}}</div>
            <div class="card-body">

            </div>
          </div>
          <div class="card text-white bg-secondary mb-3">
            <div class="card-header">{{lang.text.cards.hlblock.title}}</div>
            <div class="card-body">

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
          "cards": {
            "hlblock": {
              "title": ""
            },
            "iblock": {
              "title": ""
            },
            "event": {
              "title": ""
            }
          }
        }
      }
    }
  },
  mounted: async function() {
    const text = await getTextLang('page/content/admin/index', this.$store);

    if (text)
    {
      this.lang.text = text;
    }
  }
}
</script>

