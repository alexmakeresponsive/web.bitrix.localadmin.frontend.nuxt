<template>
  <div>
    <header-admin></header-admin>
    <div class="container-fluid">
      <div class="row">
        <div class="col-4" style="padding-right: 7.5px;">
          <div class="card text-white bg-secondary mb-3">
            <div class="card-header" style="display: flex; justify-content: space-between; align-items: center">
              <span>{{lang.text.list.title}}</span>
              <button type="button" class="btn-sm btn-secondary">{{lang.text.list.button}}</button>
            </div>
            <div class="card-body">
              <table class="table">
                <thead class="thead-dark">
                <tr>
                  <th scope="col" v-for="item of lang.text.list.table.head">
                    {{item}}
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="col-8" style="padding-left: 7.5px;">
          <div class="card text-white bg-secondary mb-3">
            <div class="card-header" style="display: flex; justify-content: space-between; align-items: center">
              <span>{{lang.text.journal.title}}</span>
              <button type="button" class="btn-sm btn-secondary">{{lang.text.journal.button}}</button>
            </div>
            <div class="card-body">
              <table class="table">
                <thead class="thead-dark">
                <tr>
                  <th scope="col" v-for="item of lang.text.journal.table.head">
                    {{item}}
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Mark</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Jacob</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>Larry</td>
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
import HeaderAdmin from "@/components/header/HeaderAdmin";
import getTextLang from "@/shared/lang/getText";

export default {
  layout: 'default',
  components: {
    HeaderAdmin
  },
  data: () => {
    return {
      lang: {
        text: {
          "list": {
            "title":  "",
            "button": "",
            "table": {
              "head": [

              ]
            }
          },
          "journal": {
            "title":  "",
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
    const text = await getTextLang('page/admin/backup');

    if (text)
    {
      this.lang.text = text;
    }
  }
}
</script>
