<template>
  <div>
    <header-content></header-content>
    <div class="container-fluid">
      <div class="row">
        <div class="col-6 offset-3">
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
              <span>{{text.head}}</span>
            </div>
            <div class="card-body">
              <form>
                <fieldset>
                  <div class=" dropdown mb-3">
                    <a class="btn text-light dropdown-toggle"
                       style="width: 100%;"
                       data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                      Родительский раздел: <span ref="dropdownSelectLevelCurrent">{{form.sectionNameCurrent}}</span>
                    </a>
                    <div class="dropdown-menu" style="width: 100%;">
                        <span class="dropdown-item"
                              v-on:click="selectLevel($event)"
                              data-item="0">
                          Вехний уровень
                        </span>
                      <span class="dropdown-item"
                            v-on:click="selectLevel($event)"
                            v-for="section of data.iblock.section.list"
                            :data-item="section.ID"
                      >
                          {{section.NAME}}
                        </span>
                    </div>
                    <input name="IBLOCK_SECTION_ID" type="hidden"
                           ref="IBLOCK_SECTION_ID"
                           v-model="form.IBLOCK_SECTION_ID">
                  </div>
                  <div class="form-group">
                    <label for="NAME">Название</label>
                    <input ref="NAME" type="text" class="form-control" id="NAME" placeholder=""
                           v-model="form.sectionName">
                  </div>
                  <div class="mt-3">
                    <div class="row">
                      <div class="col-6 text-right" style="padding-right: 7.5px;">
                        <a class="btn btn-primary" @click="$router.replace(`/content/admin/edit/data/iblock?id=${idIBlock}`)">
                          Назад
                        </a>
                      </div>
                      <div class="col-6" style="padding-left: 7.5px;">
                        <button v-on:click="saveForm" type="button" class="btn btn-primary">Сохранить</button>
                      </div>
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
      action: {
        id: '',
        text: {
          add: {
            head: "Добавление раздела инфоблока"
          },
          update: {
            head: "Редактирование раздела инфоблока"
          }
        }
      },
      idIBlock:  '',
      idSection: '',
      idElement: '',

      alert: {
        text: '',
      },

      form: {
        sectionName: '',
        sectionNameCurrent: '',
        IBLOCK_SECTION_ID:   ''
      },

      component: {},
      data: {
        iblock: {
          section: {
            list: []
          },
        }
      },
      text: {
        head: ''
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

    // if !id -> redirect

    if(this.idSection)
    {
      this.action.id = 'update';
    }
    else
    {
      this.idSection = '';
      this.action.id = 'add';
    }

    this.text.head = this.action.text[this.action.id].head


        await this.component.iblock.getListIblockSection(this.idIBlock);
    this.data.iblock.section.list = this.$store.state.api.iblock.listSection[this.idIBlock];

    let sectionData = {};

    if(this.idSection)
    {
      sectionData = await this.component.iblock.getIblockSection(this.idSection);
    }

    const idSectionParent = sectionData['IBLOCK_SECTION_ID'];
    this.form.sectionName = sectionData['NAME'];


    if(idSectionParent)
    {
      this.form.sectionNameCurrent = this.data.iblock.section.list[idSectionParent]['NAME'];
    }
    else
    {
      this.form.sectionNameCurrent = "Верхний уровень";
    }
  },
  methods: {
    saveForm: async function()
    {

      console.log(this.idIBlock);
      console.log(this.idSection);

      if (this.action.id === 'add')
      {
        const r = await this.component.iblock.addIblockSection(this.idIBlock, this.$refs);
        const idSection = r.res;

        if(Number.isInteger(idSection))
        {
          this.$router.replace(`/content/admin/edit/data/edit/section/iblock?id=${this.idIBlock}&idsection=${idSection}`)

          this.action.id = 'update';
          this.idSection = idSection;

          this.text.head = this.action.text[this.action.id].head;

          this.alert.text = 'Раздел добавлен';
          this.alertOpen('alert-success');
        }
      }
      else
      {
        const r = await this.component.iblock.updateIblockSection(this.idIBlock, this.idSection, this.$refs);
        if(r.res === true)
        {
          this.alert.text = 'Раздел отредактироавн';
          this.alertOpen('alert-success');
        }
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
    selectLevel: function (e)
    {
      this.form.IBLOCK_SECTION_ID                 = e.target.attributes['data-item'].value;
      this.$refs.dropdownSelectLevelCurrent.textContent = e.target.textContent.trim();
    }
  }
}
</script>
