<template>
  <div>
    <header-content></header-content>
    <div class="container-fluid">
      <div class="row">
        <div class="col-6" style="padding-right: 7.5px;">
          <div class="card text-white bg-secondary mb-3">
            <div class="card-header">Журнал событий</div>
            <div class="card-body">

            </div>
          </div>
        </div>
        <div class="col-6" style="padding-left: 7.5px;">
          <div class="card text-white bg-secondary mb-3">
            <div class="card-header">Info-блоки</div>
            <div class="card-body">

            </div>
          </div>
          <div class="card text-white bg-secondary mb-3">
            <div class="card-header">Highload-блоки</div>
            <div class="card-body">

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderContent from "@/components/header/HeaderContent";
import hookAutchCheck from '@/hook/beforeCreate/auth/check'
export default {
  layout: 'default',
  components: {
    HeaderContent
  },
  beforeCreate: async function () {

    await hookAutchCheck(this);
  }
}
</script>

