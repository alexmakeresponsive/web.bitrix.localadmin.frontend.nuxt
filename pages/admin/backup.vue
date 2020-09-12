<template>
  <div>
    <header-admin></header-admin>
    <div class="container-fluid">
      <div class="row">
        <div class="col-4" style="padding-right: 7.5px;">
          <div class="card text-white bg-secondary mb-3">
            <div class="card-header" style="display: flex; justify-content: space-between; align-items: center">
              <span>Список резервных копий</span>
              <button type="button" class="btn-sm btn-secondary">Создать копию</button>
            </div>
            <div class="card-body">
              <table class="table">
                <thead class="thead-dark">
                <tr>
                  <th scope="col">Название</th>
                  <th scope="col">Размер</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="col-8" style="padding-left: 7.5px;">
          <div class="card text-white bg-secondary mb-3">
            <div class="card-header" style="display: flex; justify-content: space-between; align-items: center">
              <span>Журнал резервного копирования</span>
              <button type="button" class="btn-sm btn-secondary">Экспорт</button>
            </div>
            <div class="card-body">
              <table class="table">
                <thead class="thead-dark">
                <tr>
                  <th scope="col">Пользователь</th>
                  <th scope="col">Дата</th>
                  <th scope="col">Тип копии</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Mark</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Jacob</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>Larry</td>
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
