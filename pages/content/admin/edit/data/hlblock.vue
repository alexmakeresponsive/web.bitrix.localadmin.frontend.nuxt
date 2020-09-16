<template>
  <div>
    <header-content></header-content>
    <div class="container-fluid">
      <div class="row">
        <div class="col-4" style="padding-right: 7.5px;">
          <div class="card text-white bg-secondary mb-3">
            <div class="card-header">{{lang.text.block.head}}</div>
            <div class="card-body">
              <table class="table">
                <thead class="thead-dark">
                <tr>
                  <th scope="col" v-for="item of lang.text.block.table.head">
                    {{item}}
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>
                    <NuxtLink to="/content/admin/edit/data/hlblock?id=1">Color Reference</NuxtLink>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="col-8" style="padding-left: 7.5px;">
          <div class="card text-white bg-secondary mb-3">
            <div class="card-header" style="display: flex; justify-content: space-between; align-items: center">
              <span>{{lang.text.element.head}}</span>
              <button type="button" class="btn-sm btn-secondary">{{lang.text.element.button}}</button>
            </div>
            <div class="card-body">
              <table class="table">
                <thead class="thead-dark">
                <tr>
                  <th scope="col" v-for="item of lang.text.element.table.head">
                    {{item}}
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>
                    <NuxtLink to="/content/admin/edit/data/iblock?id=1">Color 1</NuxtLink>
                  </td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Color 2</td>
                </tr>
                </tbody>
              </table>
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
          "block": {
            "head": "",
            "table": {
              "head": [

              ]
            }
          },
          "element": {
            "head": "",
            "button": "",
            "table": {
              "head": [

              ]
            }
          }
        }
      }
    }
  },
  mounted: async function() {
    const text = await getTextLang('page/content/admin/edit/data/hlblock', this.$store);

    if (text)
    {
      this.lang.text = text;
    }
  }
}
</script>

