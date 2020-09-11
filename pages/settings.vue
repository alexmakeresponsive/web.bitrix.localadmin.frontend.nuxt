<template>
  <div>
    <header-default></header-default>
    <h1>settings page</h1>
  </div>
</template>
<script>
import HeaderDefault from '~/components/header/HeaderDefault.vue'
import hookAutchCheck from "~/hook/beforeCreate/auth/check";
export default {
  layout: 'default',
  components: {
    HeaderDefault
  },
  beforeCreate: async function () {
    await hookAutchCheck();
  }
}
</script>
