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
                  <space></space>
                </div>
              </div>
              <div class="col-6" style="padding-left: 7.5px; display: flex; justify-content: space-between; align-items: center;">
                <div>
                  <menu-main></menu-main>
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
import Space from "@/components/dropdown/Space";
import MenuMain from "@/components/dropdown/MenuMain";
export default {
  components: {
    Space,
    MenuMain
  }
}
</script>
