<template>
  <div>
    <header-content></header-content>
    <div class="container-fluid">
      <div class="row">
        <div class="col-4" style="padding-right: 7.5px;">
          <div class="card text-white bg-secondary mb-3">
            <div class="card-header">{{lang.text.block.head}}</div>
            <div class="card-body">
              <table class="table" style="margin-bottom: 0;">
                <thead class="thead-dark">
                <tr>
                  <th scope="col" v-for="item of lang.text.block.table.head">
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
<!--                     :to="'/content/admin/edit/data/iblock?id=' + child.ID -->
                    <span class="link-hover"
                              v-on:click="openIblock(child.ID)"
                    >{{child.NAME}}</span>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="card text-white bg-secondary mb-3">
            <div class="card-header" style="display: flex; justify-content: space-between; align-items: center">
              <span>Разделы Info-блока</span>
              <NuxtLink class="btn-sm btn-secondary" style="margin-right: 8px;"
                        :to="'/content/admin/edit/data/edit/section/iblock?id=' + idIBlock">
                Добавить раздел
              </NuxtLink>
            </div>
            <div class="card-body">
              <div class="list-group">
                <div class="list-group-item list-group-item-action d-flex justify-content-between"
                          v-for="item of this.data.iblock.section.list"
                          >
                  <span v-on:click="openSection(item.ID)" class="link-hover">{{item.NAME}}</span>
                  <NuxtLink class="btn-sm btn-secondary"
                            :to="'/content/admin/edit/data/edit/section/iblock?id=' + idIBlock + '&idsection=' + item.ID">
                    Редактировать
                  </NuxtLink>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div class="col-8" style="padding-left: 7.5px;">
          <div class="card text-white bg-secondary mb-3">
            <div class="card-header" style="display: flex; justify-content: space-between; align-items: center">
              <span>Элементы</span>
              <NuxtLink class="btn-sm btn-secondary"
                        :to="'/content/admin/edit/data/edit/element/iblock?id=' + idIBlock">
                {{lang.text.element.button}}
              </NuxtLink>
            </div>
            <div class="card-body">
              <table class="table table-3-2-action">
                <thead class="thead-dark">
                <tr>
                  <th scope="col" v-for="item of lang.text.element.table.head">
                    {{item}}
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="element of this.data.iblock.element.list">
                  <th scope="row">{{element.ID}}</th>
                  <td>
                    <NuxtLink class="btn-sm btn-secondary"
                              :to="'/content/admin/edit/data/edit/element/iblock?id=' + idIBlock + '&idsection=' + idSection +  '&idelement=' + element.ID">
                      Редактировать
                    </NuxtLink>
                  </td>
                  <td>
                    {{element.NAME}}
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
      idIBlock:  '',
      idSection: '',
      component: {},
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
      },
      data: {
        iblock: {
          list: [],
          section: {
            list: []
          },
          element: {
            list: []
          }
        },
        hlblock: {
          list: []
        },
      }
    }
  },
  // middleware({ store, redirect, route }) {
  //   // console.log("id: ", route.query.id);
  //
  //   // store.state.api.iblock.listSection[1] = [];
  // },
  beforeMount: async function() {
    this.component.iblock = new IBlock();

    this.component.iblock.bindStore(this.$store);
    this.component.iblock.bindRoute(this.$route);

    const text = await getTextLang('page/content/admin/edit/data/iblock', this.$store);

    if (text)
    {
      this.lang.text = text;
    }
  },
  mounted: async function() {

    let id           = Number.parseInt(this.$route.query.id);
    let idsectionUrl = Number.parseInt(this.$route.query.idsection);
    let idsectionQuery;

    this.idIBlock  = id;
    this.idSection = idsectionUrl;

    if(!idsectionUrl)
    {
      this.idSection = '';

      idsectionQuery = '';
    }

    await this.component.iblock.getListIblock();
    await this.component.iblock.getListIblockSection(id);
    await this.component.iblock.getListIblockElement(id, idsectionQuery);

          this.data.iblock.list         = this.$store.state.api.iblock.listType;
          this.data.iblock.section.list = this.$store.state.api.iblock.listSection[id];
          this.data.iblock.element.list = this.$store.state.api.iblock.listElement[id]['root'];
  },
  methods: {
    openIblock: async function (id) {

      this.idIBlock = id;

      if(!this.$store.state.api.iblock.listSection[id])
      {
        await this.component.iblock.getListIblockSection(id);
      }

      if(!this.$store.state.api.iblock.listElement[id])
      {
        await this.component.iblock.getListIblockElement(id, this.idSection);
      }

      this.data.iblock.section.list = this.$store.state.api.iblock.listSection[id];
      this.data.iblock.element.list = this.$store.state.api.iblock.listElement[id]['root'];

    },
    openSection: async function (idsection) {

      this.idSection = idsection;

      if(!this.$store.state.api.iblock.listElement[this.idIBlock][idsection])
      {
        await this.component.iblock.getListIblockElement(this.idIBlock, idsection);
      }

      this.data.iblock.element.list = this.$store.state.api.iblock.listElement[this.idIBlock][idsection];
    }
  },
  editSection()
  {

  }
}
</script>

