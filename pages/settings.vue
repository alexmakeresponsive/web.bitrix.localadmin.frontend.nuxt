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
                              <span class="dropdown-item" v-on:click="updateCss(item.id, $event)" v-for="item in cssMap">
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
import getDataLang from "@/shared/lang/getData";
export default {
  layout: 'default',
  data: () => {
    // console.log("data init");

    return {
      cssMap:   {},

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
    updateCss: async function (id, e) {
      try
      {
        await fetch(
            'http://192.168.100.6/local/admin/settings/theme/style?q=updateFile&id=' + id,
            {
              method: 'GET',
            }
        ).then(response => {
          // console.log(response)

          if(!response)
          {
            console.log('many req per sec');
            return {};
          }

          if(response.status !== 200)
          {
            console.log('server unavailable');
            return {};
          }

          return response.json();
        })
            .then(data => {

              console.log(data);

              if(data.status !== 200)
              {
                console.log('error in server');
                return;
              }

              document.head.querySelectorAll('link').forEach(el => {
                if(el.href.indexOf('.css') !== -1)
                {
                  const pos = el.href.indexOf('?cache-refresh=');

                  let hrefNew = '';

                  if(pos !== -1)
                  {
                    hrefNew = el.href.substring(0, pos);
                  }
                  else
                  {
                    hrefNew = el.href;
                  }

                  el.href = hrefNew + "?cache-refresh=" + Math.random();
                }
              });

              return {};
            });
      }
      catch (e)
      {
        console.log(e);
        alert("catch!");
      }
    },
    updateLang: function (id, e) {
      console.log(id);
    },
  },
  beforeCreate: async function() {

  },
  beforeMount: async function() {

  },
  mounted: async function() {
    this.langCurrent = localStorage.getItem('langCurrent');
    this.lang.text = await getDataLang(this.langCurrent, 'settings');

    try
    {
      await fetch(
          'http://192.168.100.6/local/admin/settings/theme/style?q=getMap',
          {
            method: 'GET',
          }
      ).then(response => {
        // console.log(response)

        if(!response)
        {
          console.log('many req per sec');
          return {};
        }

        if(response.status !== 200)
        {
          console.log('server unavailable');
          return {};
        }

        return response.json();
      })
          .then(data => {
            console.log(data);

            if(data.status !== 200)
            {
              console.log('error in server');
              return;
            }

            this.cssMap = data.cssMap;
          });
    }
    catch (e)
    {
      console.log(e);
      alert("catch!");
    }

    try
    {
      await fetch(
          'http://192.168.100.6/local/admin/settings/lang?q=getMap',
          {
            method: 'GET',
          }
      ).then(response => {
        // console.log(response)

        if(!response)
        {
          console.log('many req per sec');
          return {};
        }

        if(response.status !== 200)
        {
          console.log('server unavailable');
          return {};
        }

        return response.json();
      })
          .then(async data => {
            console.log(data);

            if(data.status !== 200)
            {
              console.log('error in server');
              return;
            }

            this.lang.data = data.langHead;
          });
    }
    catch (e)
    {
      console.log(e);
      alert("catch!");
    }

  }
}
</script>

