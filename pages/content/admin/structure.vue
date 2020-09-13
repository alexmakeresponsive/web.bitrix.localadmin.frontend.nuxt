<template>
  <div>
    <header-content></header-content>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card text-white bg-secondary mb-3">
            <div class="card-header" style="display: flex; justify-content: space-between; align-items: center">
              <span>Типы Info-блоков</span>
              <div>
                <NuxtLink to="/content/admin/create/structure/iblock?new=1" class="btn-sm btn-secondary">Добавить Info-блок</NuxtLink>
                <button type="button" class="btn-sm btn-secondary">Добавить тип</button>
              </div>
            </div>
            <div class="card-body">
              <table class="table">
                <thead class="thead-dark">
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Название</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>
                    <NuxtLink to="/content/admin/edit/data/iblock?id=1">Каталоги</NuxtLink>
                  </td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Торговые предложения</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Новости</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="card text-white bg-secondary mb-3">
            <div class="card-header" style="display: flex; justify-content: space-between; align-items: center">
              <span>Highload-блоки</span>
              <button type="button" class="btn-sm btn-secondary">Добавить Highload-блок</button>
            </div>
            <div class="card-body">
              <table class="table">
                <thead class="thead-dark">
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Название</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>
                    <NuxtLink to="/content/admin/edit/data/hlblock?id=1">Color Reference</NuxtLink>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="card text-white bg-dark border-info  mb-3">
            <div class="card-header" style="display: flex; justify-content: space-between; align-items: center">
              <span>Пользовательские поля</span>
              <button type="button" class="btn-sm btn-secondary">Добавить поле</button>
            </div>
            <div class="card-body">
              <table class="table">
                <thead class="thead-dark">
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Название</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>
                    <NuxtLink to="/content/admin/edit/data/hlblock?id=1">Color Reference</NuxtLink>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderContent from "@/components/header/HeaderContent";

export default {
  layout: 'default',
  components: {
    HeaderContent
  }
}
</script>

