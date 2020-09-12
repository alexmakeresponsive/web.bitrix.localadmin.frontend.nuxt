<template>
  <div>
    <header-content></header-content>
    <div class="container-fluid">
      <div class="row">
        <div class="col-3" style="padding-right: 7.5px;">

        </div>
        <div class="col-9" style="padding-left: 7.5px;">

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

