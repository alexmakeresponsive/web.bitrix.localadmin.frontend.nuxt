<template>
  <div>
    <header-content></header-content>
    <div class="container-fluid">
      <div class="row">
        <div class="col-3" style="padding-right: 7.5px;">
          <div class="card text-white bg-secondary mb-3">
            <div class="card-header" style="display: flex; justify-content: space-between; align-items: center">
              <span>{{lang.text.block.head}}</span>
            </div>
            <div class="card-body">
              <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action active">
                  Одежда
                </a>
              </div>
            </div>
          </div>
          <div class="card text-white bg-secondary mb-3">
            <div class="card-header" style="display: flex; justify-content: space-between; align-items: center">
              <span>{{lang.text.section.head}}</span>
              <button type="button" class="btn-sm btn-secondary">
                {{lang.text.section.button}}
              </button>
            </div>
            <div class="card-body">
              <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action active">
                  Куртки
                </a>
                <a href="#" class="list-group-item list-group-item-action active">
                  Штаны
                </a>
                <a href="#" class="list-group-item list-group-item-action active">
                  Рукавицы
                </a>
                <a href="#" class="list-group-item list-group-item-action active">
                  Сапоги
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-9" style="padding-left: 7.5px;">
          <div class="card text-white bg-secondary mb-3">
            <div class="card-header" style="display: flex; justify-content: space-between; align-items: center">
              <span>{{lang.text.element.head}}</span>
              <button type="button" class="btn-sm btn-secondary">
                {{lang.text.element.button}}
              </button>
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
                    Куртка
                  </td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>
                    Штаны
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
          "block": {
            "head": ""
          },
          "section": {
            "head": "",
            "button": ""
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
  beforeMount: async function() {
    this.component.iblock = new IBlock();

    this.component.iblock.bindStore(this.$store);
    this.component.iblock.bindRoute(this.$route);
  },
  mounted: async function() {
    const text = await getTextLang('page/content/admin/edit/shop/catalog', this.$store);

    if (text)
    {
      this.lang.text = text;
    }

                await this.component.iblock.getListCatalogIblock();
  }
}
</script>

