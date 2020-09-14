<template>
  <div class="btn-group">
    <button type="button" class="btn-sm btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Меню
    </button>
    <div class="dropdown-menu dropdown-menu-left">
      <NuxtLink class="dropdown-item" to="/settings">Настройки</NuxtLink>
      <NuxtLink class="dropdown-item" to="/about">О приложении</NuxtLink>
      <div class="dropdown-divider"></div>
      <div class="dropdown-item">
        Имя Фамилия
        <NuxtLink to="/logout" type="button">[Выход]</NuxtLink>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "menu-main"
}
</script>
