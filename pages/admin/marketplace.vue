<template>
  <div>
    <header-admin></header-admin>
  </div>
</template>
<script>
import HeaderAdmin from "@/components/header/HeaderAdmin";
import hookAutchCheck from "@/hook/beforeCreate/auth/check";
export default {
  layout: 'default',
  components: {
    HeaderAdmin
  },
  beforeCreate: async function () {
    await hookAutchCheck(this);
  }
}
</script>
