<template>
  <div>
    <header-content></header-content>
    <div class="container-fluid">
      <div class="row">
        <div class="col-3" style="padding-right: 7.5px;">
          <div class="card text-white bg-secondary mb-3">
            <div class="card-header" style="display: flex; justify-content: space-between; align-items: center">
              <span>Каталоги</span>
            </div>
            <div class="card-body">
              <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action active">
                  Одежда
                </a>
              </div>
            </div>
          </div>
          <div class="card text-white bg-secondary mb-3">
            <div class="card-header" style="display: flex; justify-content: space-between; align-items: center">
              <span>Разделы</span>
              <button type="button" class="btn-sm btn-secondary">Добавить раздел</button>
            </div>
            <div class="card-body">
              <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action active">
                  Куртки
                </a>
                <a href="#" class="list-group-item list-group-item-action active">
                  Штаны
                </a>
                <a href="#" class="list-group-item list-group-item-action active">
                  Рукавицы
                </a>
                <a href="#" class="list-group-item list-group-item-action active">
                  Сапоги
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-9" style="padding-left: 7.5px;">
          <div class="card text-white bg-secondary mb-3">
            <div class="card-header" style="display: flex; justify-content: space-between; align-items: center">
              <span>Элементы каталога</span>
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
                    Куртка
                  </td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>
                    Штаны
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

