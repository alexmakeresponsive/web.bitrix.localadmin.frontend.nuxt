<template>
  <div>
    <ul>
      <li>
        <NuxtLink to="/admin">admin</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/analyst">analyst</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/content/admin">content admin</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/content/manager">content manager</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/owner">owner</NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script>
import HeaderDefault from '@/components/header/HeaderDefault.vue'
import hookAutchCheck from '@/hook/beforeCreate/auth/check'
export default {
  layout: 'default',

  beforeCreate: async function () {
    await hookAutchCheck(this);
  }
}
</script>

