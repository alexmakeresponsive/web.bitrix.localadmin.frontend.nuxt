<template>
  <div>
    <header-content></header-content>
    <div class="container-fluid">
      <div class="row">
        <div class="col-6" style="padding-right: 7.5px;">
          <div class="card text-white bg-secondary mb-3">
            <div class="card-header" style="display: flex; justify-content: space-between; align-items: center">
              <span>{{lang.text.iblock.head}}</span>
            </div>
            <div class="card-body">
              <table class="table">
                <thead class="thead-dark">
                <tr>
                  <th scope="col" v-for="item of lang.text.iblock.table.head">
                    {{item}}
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>
                    <NuxtLink to="/content/admin/edit/data/iblock?id=1">Блог</NuxtLink>
                  </td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Новости</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="col-6" style="padding-left: 7.5px;">
          <div class="card text-white bg-secondary mb-3">
            <div class="card-header" style="display: flex; justify-content: space-between; align-items: center">
              <span>{{lang.text.hlblock.head}}</span>
            </div>
            <div class="card-body">
              <table class="table">
                <thead class="thead-dark">
                <tr>
                  <th scope="col" v-for="item of lang.text.hlblock.table.head">
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
          "iblock": {
            "head": "",
            "table": {
              "head": [

              ]
            }
          },
          "hlblock": {
            "head": "",
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
    const text = await getTextLang('page/content/admin/data');

    if (text)
    {
      this.lang.text = text;
    }
  }
}
</script>

