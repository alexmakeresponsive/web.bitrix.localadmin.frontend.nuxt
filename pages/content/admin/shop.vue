<template>
  <div>
    <header-content></header-content>
    <div class="container-fluid">
      <div class="row">
        <div class="col-6" style="padding-right: 7.5px;">
          <div class="card text-white bg-secondary mb-3">
            <div class="card-header" style="display: flex; justify-content: space-between; align-items: center">
              <span>Магазин: Маркетинг</span>
            </div>
            <div class="card-body">
              <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action active">
                  Предустановленный список маркетинговых акций
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  Правила работы с корзиной
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  Купоны
                </a>
              </div>
            </div>
          </div>

        </div>
        <div class="col-6" style="padding-left: 7.5px;">
          <div class="card text-white bg-secondary mb-3">
            <div class="card-header" style="display: flex; justify-content: space-between; align-items: center">
              <span>Магазин: Товары</span>
            </div>
            <div class="card-body">
              <div class="list-group">
                <NuxtLink to="/content/admin/edit/shop/catalog" class="list-group-item list-group-item-action active">
                  Каталоги
                </NuxtLink>
                <a href="#" class="list-group-item list-group-item-action">
                  Заказы
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  Складской учет
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Документы
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Поставщики
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Склады
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  Службы доставки
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  Платёжные системы
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  Цены
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  Единицы измерения
                </a>
              </div>
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

