<template>
  <div>
    <header-content></header-content>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <!--message-->
          <div class="alert-wrapper-a-top">
            <div class="alert alert-dismissible d-none" ref="alert">
              <button type="button" class="close"
                      v-on:click="alertClose">&times;</button>
              {{alert.text}}
            </div>
          </div>
          <!--message-->
          <div class="card text-white bg-secondary mb-3">
            <div class="card-header text-center">
              <span>Редактирование элемента инфоблока</span>
            </div>
            <div class="card-body">
              <form action="" method="post">
                <div class="row">
                  <div class="col-6 text-right" style="padding-right: 7.5px;">
                    <a class="btn btn-primary" @click="$router.go(-1)">
                      Назад
                    </a>
                  </div>
                  <div class="col-6" style="padding-left: 7.5px;">
                    <button v-on:click="saveForm" type="button" class="btn btn-primary">Сохранить</button>
                  </div>
                </div>
                <fieldset>
                  <div class="form-group">
                    <label for="NAME">Название</label>
                    <input ref="NAME" type="text" class="form-control" id="NAME" placeholder=""
                            v-model="data.iblock.last.element.NAME">
                  </div>
                  <div class="form-group">
                    <label for="DETAIL_TEXT">Подробная информация</label>
                    <textarea ref="DETAIL_TEXT"
                              class="form-control" id="DETAIL_TEXT" rows="32">{{data.iblock.last.element.DETAIL_TEXT}}</textarea>
                  </div>
                  <div class="row">
                    <div class="col-6 text-right" style="padding-right: 7.5px;">
                      <a class="btn btn-primary" @click="$router.go(-1)">
                        Назад
                      </a>
                    </div>
                    <div class="col-6" style="padding-left: 7.5px;">
                      <button v-on:click="saveForm" type="button" class="btn btn-primary">Сохранить</button>
                    </div>
                  </div>
                </fieldset>
              </form>
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
  components: {
    HeaderContent
  },
  name: "element",
  data: () => {
    return {
      idIBlock:  '',
      idSection: '',
      idElement: '',

      alert: {
        text: '',
      },

      component: {},
      data: {
        iblock: {
          last: {
            element: {
              // before: {},
              // after: {},
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

    // const text = await getTextLang('page/content/admin/edit/data/iblock', this.$store);

    // if (text)
    // {
    //   this.lang.text = text;
    // }
  },
  mounted: async function() {

    this.idIBlock  = Number.parseInt(this.$route.query.id);
    this.idSection = Number.parseInt(this.$route.query.idsection);
    this.idElement = Number.parseInt(this.$route.query.idelement);

    if(!this.idSection)
    {
      this.idSection = '';
    }


    // if !id -> redirect

    const d = await this.component.iblock.getIblockElement(this.idIBlock, this.idElement);
          this.data.iblock.last.element = d.data;
  },
  methods: {
    saveForm: async function()
    {
      const r = await this.component.iblock.setIblockElement(this.idIBlock, this.idSection, this.idElement, this.$refs);

      if(r.res)
      {
        this.alert.text = 'Элемент сохранён';
        this.alertOpen('alert-success');
      }
    },
    alertClose: function ()
    {
      this.$refs.alert.classList.add('d-none');
    },
    alertOpen: function (type)
    {
      this.$refs.alert.classList.add(type);
      this.$refs.alert.classList.remove('d-none');

      const self = this;
      setTimeout(function () {
        self.alertClose();
      }, 2000)
    },
  },

}
</script>
