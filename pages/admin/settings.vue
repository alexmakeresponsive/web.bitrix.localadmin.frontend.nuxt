<template>
  <div>

  </div>
</template>
<script>
import HeaderDefault from '@/components/header/HeaderDefault.vue'
import hookAutchCheck from "@/hook/beforeCreate/auth/check";
export default {
  layout: 'default',
  components: {
    HeaderDefault
  },
  beforeCreate: async function () {
    await hookAutchCheck(this);
  }
}
</script>
