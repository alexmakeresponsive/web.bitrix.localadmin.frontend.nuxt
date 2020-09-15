<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-3">
        <div class="card text-white bg-secondary border-light mt-3">
          <div class="card-header text-center">Настройки</div>
          <div class="card-body">

            <ul class="nav">
              <li class="nav-item nav-pills nav-fill">
                <a class="nav-link" data-toggle="tab" href="#home">Внешний вид</a>
              </li>
              <li class="nav-item nav-pills nav-fill" style="margin-left: 15px;">
                <a class="nav-link" data-toggle="tab" href="#profile">Profile</a>
              </li>

            </ul>
            <div id="myTabContent" class="tab-content mt-3 mb-3">
              <div class="tab-pane fade show active" id="home">
                <div class="card text-white bg-primary">
                  <div class="card-body">
                    <div class="">

                        <div class="form-row">
                          <div class="form-group col-md-6">
                            <div class=" dropdown">
                              <a class="btn text-light dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                Тема</a>
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
                                Язык</a>
                              <div class="dropdown-menu" style="">
                                <span class="dropdown-item" v-on:click="updateLang(item.data.id, $event)" v-for="item in langMap">
                                  {{ item.data.title }}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="profile">
                <div class="card text-white bg-primary">
                  <div class="card-body">
                    <div class="">

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <NuxtLink to="../" class="btn btn-primary">Назад</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'default',
  data: () => {
    return {
      cssMap:  {},
      langMap: {}
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
  mounted: async function() {
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
          .then(data => {
            console.log(data);

            if(data.status !== 200)
            {
              console.log('error in server');
              return;
            }

            this.langMap = data.langMap;
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

