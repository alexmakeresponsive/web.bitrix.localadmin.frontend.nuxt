<template>
  <div>
    <header-content></header-content>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card text-white bg-secondary mb-3">
            <div class="card-header" style="display: flex; justify-content: space-between; align-items: center">
              <span>{{lang.text.iblock.title}}</span>
              <div>
                <NuxtLink to="/content/admin/create/structure/iblock?new=1" class="btn-sm btn-secondary"
                          style="margin-right: 6px;"
                >
                  {{lang.text.iblock["button-1"]}}
                </NuxtLink>
                <button type="button" class="btn-sm btn-secondary">
                  {{lang.text.iblock["button-2"]}}
                </button>
              </div>
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
                    <NuxtLink to="/content/admin/edit/data/iblock?id=1">Каталоги</NuxtLink>
                  </td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Торговые предложения</td>
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
        <div class="col-12">
          <div class="card text-white bg-secondary mb-3">
            <div class="card-header" style="display: flex; justify-content: space-between; align-items: center">
              <span>{{lang.text.hlblock.title}}</span>
              <button type="button" class="btn-sm btn-secondary">{{lang.text.hlblock["button-1"]}}</button>
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
        <div class="col-12">
          <div class="card text-white bg-dark border-info  mb-3">
            <div class="card-header" style="display: flex; justify-content: space-between; align-items: center">
              <span>{{lang.text["user-fields"].title}}</span>
              <button type="button" class="btn-sm btn-secondary">{{lang.text["user-fields"]["button-1"]}}</button>
            </div>
            <div class="card-body">
              <table class="table">
                <thead class="thead-dark">
                <tr>
                  <th scope="col" v-for="item of lang.text['user-fields'].table.head">
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
            "title": "",
            "button-1": "",
            "button-2": "",
            "table": {
              "head": [

              ]
            }
          },
          "hlblock": {
            "title": "",
            "button-1": "",
            "table": {
              "head": [

              ]
            }
          },
          "user-fields": {
            "title": "",
            "button-1": "",
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
    const text = await getTextLang('page/content/admin/structure');

    if (text)
    {
      this.lang.text = text;
    }
  }
}
</script>

