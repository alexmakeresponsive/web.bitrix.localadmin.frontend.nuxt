<template>
  <div>
    <header-content></header-content>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">

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

