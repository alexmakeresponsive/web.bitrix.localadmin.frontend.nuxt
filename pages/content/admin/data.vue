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
              <table class="table" style="margin-bottom: 0;">
                <thead class="thead-dark">
                <tr>
                  <th scope="col" v-for="item of lang.text.iblock.table.head">
                    {{item}}
                  </th>
                </tr>
                </thead>
              </table>
              <table class="table" v-for="item of data.iblock.list"
                     style="margin-bottom: 0;">
                <tbody>
                <tr class="table-info">
                  <th scope="row" style="width: 200px;">{{item.ID}}</th>
                  <td>
                    (Тип) {{item.NAME}}
                  </td>
                </tr>
                <tr v-for="child of item.LIST_CHILD">
                  <th scope="row" style="width: 200px;">{{child.ID}}</th>
                  <td>
                    <NuxtLink :to="'/content/admin/edit/data/iblock?id=' + child.ID">{{child.NAME}}</NuxtLink>
                  </td>
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
import IBlock from "@/shared/api/iblock";

export default {
  layout: 'default',
  components: {
    HeaderContent
  },
  data: () => {
    return {
      component: {},
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
      },
      data: {
        iblock: {
          list: []
        },
        hlblock: {
          list: []
        },
      }
    }
  },
  beforeMount: async function() {
    // this.$store
    this.component.iblock = new IBlock();
    this.component.iblock.bindStore(this.$store);

    const text = await getTextLang('page/content/admin/data', this.$store);

    if (text)
    {
      this.lang.text = text;
    }
  },
  mounted: async function() {

    await this.component.iblock.getListIblock();
          this.data.iblock.list = this.$store.state.api.iblock.listType;
  }
}
</script>

