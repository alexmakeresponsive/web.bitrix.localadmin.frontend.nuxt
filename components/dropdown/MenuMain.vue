<template>
  <div class="btn-group">
    <button type="button" class="btn-sm btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Меню
    </button>
    <div class="dropdown-menu dropdown-menu-left">
      <button class="dropdown-item" type="button">Настройки</button>
      <button class="dropdown-item" type="button">О приложении</button>
      <button class="dropdown-item" type="button">Имя Фамилия</button>
      <button class="dropdown-item" type="button">Выход</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "menu-main"
}
</script>
