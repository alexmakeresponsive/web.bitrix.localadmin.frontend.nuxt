<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card text-white bg-secondary mb-3 mt-3">
          <div class="card-header">
            <div class="row">
              <div class="col-6" style="padding-right: 7.5px; display: flex; justify-content: space-between; align-items: center;">
                <ul class="nav" style="margin-left: -1rem;">
                  <li class="nav-item">
                    <NuxtLink to="/admin" class="nav-link active">Главная</NuxtLink>
                  </li>
                  <li class="nav-item">
                    <NuxtLink to="/admin/users" class="nav-link">Пользователи</NuxtLink>
                  </li>
                  <!--<li class="nav-item">
                    <NuxtLink to="/admin/journal-event" class="nav-link">Журнал событий</NuxtLink>
                  </li>-->
                </ul>
                <div>
                  <div class="btn-group">
                    <button type="button" class="btn-sm btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Пространство(Администратор)
                    </button>
                    <div class="dropdown-menu dropdown-menu-right">
                      <button class="dropdown-item" type="button">Владелец</button>
                      <button class="dropdown-item" type="button">Аналитик</button>
                      <button class="dropdown-item" type="button">Контент Менеджер</button>
                      <button class="dropdown-item" type="button">Контент Администратор</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-6" style="padding-left: 7.5px; display: flex; justify-content: space-between; align-items: center;">
                <div>
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
                </div>
                <ul class="nav" style="margin-right: -1rem;">
                  <li class="nav-item">
                    <NuxtLink to="/admin/backup" class="nav-link">Резервные копии</NuxtLink>
                  </li>
                  <li class="nav-item">
                    <NuxtLink to="/admin/marketplace" class="nav-link">Marketplace</NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
