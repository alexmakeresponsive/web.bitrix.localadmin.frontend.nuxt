<template>
  <div>
    <header-content></header-content>
    <div class="container-fluid">
      <div class="row">
        <div class="col-4" style="padding-right: 7.5px;">
          <div class="card text-white bg-secondary mb-3">
            <div class="card-header">Info-блоки</div>
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
                    <NuxtLink to="/content/admin/edit/data/iblock?id=1">Блог</NuxtLink>
                  </td>
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
        <div class="col-8" style="padding-left: 7.5px;">
          <div class="card text-white bg-secondary mb-3">
            <div class="card-header" style="display: flex; justify-content: space-between; align-items: center">
              <span>Элементы Info-блока</span>
              <button type="button" class="btn-sm btn-secondary">Добавить элемент</button>
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
                    <NuxtLink to="/content/admin/edit/data/iblock?id=1">
                      Программист 2020: Терминатор отдыхает
                    </NuxtLink>
                  </td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>
                    МТИ показал трекер положений тела во сне, который работает на беспроводных сигналах
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
import hookAutchCheck from '@/hook/beforeCreate/auth/check'
export default {
  layout: 'default',
  components: {
    HeaderContent
  },
  beforeCreate: async function () {

    await hookAutchCheck(this);
  }
}
</script>

