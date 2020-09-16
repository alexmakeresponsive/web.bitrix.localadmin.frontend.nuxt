<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-3">
        <div class="card text-white bg-secondary border-light mt-3">
          <div class="card-header text-center">{{lang.text.title}}</div>
          <div class="card-body">
            <!--tab title-->
            <ul class="nav">
              <li class="nav-item nav-pills nav-fill" v-for="val in lang.text.tabs.title">
                <a class="nav-link" data-toggle="tab" href="#home">{{val}}</a>
              </li>
            </ul>
            <!--tab title-->
            <div id="myTabContent" class="tab-content mt-3 mb-3">
              <!--tab-->
              <div class="tab-pane fade show active" id="home">
                <div class="card text-white bg-primary">
                  <div class="card-body">
                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <div class=" dropdown">
                            <a class="btn text-light dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                              {{lang.text.tabs.body[0].dropdown.css}}</a>
                            <div class="dropdown-menu" style="">
                              <span class="dropdown-item" v-on:click="updateCss(item.id, $event)" v-for="item in css.data">
                                {{ item.name }}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="form-group col-md-6">
                          <div class=" dropdown">
                            <a class="btn text-light dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                              {{lang.text.tabs.body[0].dropdown.lang}}</a>
                            <div class="dropdown-menu" style="">
                              <span class="dropdown-item" v-on:click="updateLang(item.id, $event)" v-for="item in lang.data">
                                {{ item.title }}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
              <!--tab-->
            </div>
            <!--back-->
            <NuxtLink to="../" class="btn btn-primary">{{lang.text.button.back}}</NuxtLink>
            <!--back-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import updateDataLang from "@/shared/lang/updateData";
import updateFileCss  from "@/shared/css/updateFile";
import getDataLang    from "@/shared/lang/getData";
import getListCss     from "@/shared/css/getList";
import getListLang    from "@/shared/lang/getList";
export default {
  layout: 'default',
  data: () => {
    return {
      css: {
        data: {}
      },

      langCurrent: 'ru',

      lang: {
        data: {},
        text: {
          "title": "",
          "tabs": {
            "title": [
              ""
            ],
            "body": [
              {
                "dropdown": {
                  "css":  "",
                  "lang": ""
                }
              }
            ]
          },
          "button": {
            "back": ""
          }
        }
      }
    }
  },
  methods: {
    updateCss: function (id, e) {
      updateFileCss(id);
    },
    updateLang: async function (id, e) {
      const text = await updateDataLang(id, 'settings');

      if (text)
      {
        localStorage.setItem('langCurrent', id);
        this.lang.text = text;
      }
    },
  },
  mounted: async function() {
    const text = await getDataLang('settings');

    if (text)
    {
      this.lang.text = text;
    }

    this.css.data    = await getListCss();
    this.lang.data = await getListLang();
  }
}
</script>

