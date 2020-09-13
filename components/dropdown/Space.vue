<template>
  <div class="btn-group">
    <button type="button" class="btn-sm btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Пространство
    </button>
    <div class="dropdown-menu dropdown-menu-right">
      <NuxtLink to="/admin" class="dropdown-item" type="button">Администратор</NuxtLink>
      <NuxtLink to="/content/admin" class="dropdown-item" type="button">Контент Администратор</NuxtLink>
    </div>
  </div>
</template>
<script>
export default {
  name: "space"
}
</script>

