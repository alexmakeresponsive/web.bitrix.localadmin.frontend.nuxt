<template>
  <div>
    <header-content></header-content>
    <div class="container-fluid">
      <div class="row">
        <div class="col-6 offset-3">
          <div class="card text-white bg-secondary mb-3">
            <div class="card-header text-center">
              <span>Редактирование раздела инфоблока</span>
            </div>
            <div class="card-body">
              <form>
                <fieldset>
                  <div class="form-group">
                    <label for="inputTitleDefault">Название</label>
                    <input name="inputTitleDefault" type="text" class="form-control" id="inputTitleDefault" placeholder="">
                  </div>



                  <div class=" dropdown">
                    <a class="btn text-light dropdown-toggle"
                       style="width: 100%;"
                       data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                      Родительский раздел
                    </a>
                    <div class="dropdown-menu" style="width: 100%;">
                      <span class="dropdown-item">
                        Верхний уровень
                      </span>
                    </div>
                  </div>

                  <div class="mt-3">
                    <div class="row">
                      <div class="col-6 text-right" style="padding-right: 7.5px;">
                        <a class="btn btn-primary" @click="$router.go(-1)">
                          Назад
                        </a>
                      </div>
                      <div class="col-6" style="padding-left: 7.5px;">
                        <button type="submit" class="btn btn-primary">Сохранить</button>
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
  name: "element"
}
</script>

<style scoped>

</style>
