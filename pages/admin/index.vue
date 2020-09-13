<template>
  <div>
    <header-admin></header-admin>
    <div class="container-fluid">
      <div class="row">
        <div class="col-6" style="padding-right: 7.5px;">
          <div class="card text-white bg-secondary mb-3">
            <div class="card-header">Пользователи онлайн</div>
            <div class="card-body">
              <p>Публичные</p>
              <table class="table">
                <thead class="thead-dark">
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Логин</th>
                  <th scope="col">Группа</th>
                  <th scope="col">Дейсвтие</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>
                    <button type="button" class="btn-sm btn-danger">logout</button>
                    <button type="button" class="btn-sm btn-danger">block</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
                </tbody>
              </table>
              <p>Администраторы</p>
              <table class="table">
                <thead class="thead-dark">
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Логин</th>
                  <th scope="col">Группа</th>
                  <th scope="col">Дейсвтие</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>
                    <button type="button" class="btn-sm btn-danger">logout</button>
                    <button type="button" class="btn-sm btn-danger">block</button>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="card text-white bg-secondary mb-3">
            <div class="card-header">Журнал событий</div>
            <div class="card-body">

            </div>
          </div>
        </div>
        <div class="col-6" style="padding-left: 7.5px;">
          <div class="card text-white bg-secondary mb-3">
            <div class="card-header" style="display: flex; justify-content: space-between; align-items: center;">
              <svg width="1em" height="1em"
                   viewBox="0 0 16 16" class="bi bi-x-circle-fill" fill="#ee5f5b" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
              </svg>
              <span>Железо</span>
              <svg width="1em" height="1em"
                   viewBox="0 0 16 16" class="bi bi-dash-circle-fill" fill="#5bc0de" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z"/>
              </svg>
            </div>
            <div class="card-body">
              <div class="card text-white bg-primary mb-3">
                <div class="card-header">Память</div>
                <div class="card-body">

                </div>
              </div>
              <div class="card text-white bg-primary mb-3">
                <div class="card-header">Процессор</div>
                <div class="card-body">

                </div>
              </div>
            </div>
          </div>

          <div class="card text-white bg-secondary mb-3">
            <div class="card-header">Базы данны</div>
            <div class="card-body">
              <div class="card text-white bg-primary mb-3">
                <div class="card-header">s1</div>
                <div class="card-body">
                  <p>Размер самых больших таблиц</p>
                </div>
              </div>
              <div class="card text-white bg-primary mb-3">
                <div class="card-header">s2</div>
                <div class="card-body">

                </div>
              </div>
            </div>
          </div>

          <div class="card text-white bg-secondary mb-3">
            <div class="card-header">Диск</div>
            <div class="card-body">
              <div class="card text-white bg-primary mb-3">
                <div class="card-header">backup</div>
                <div class="card-body">

                </div>
              </div>
              <div class="card text-white bg-primary mb-3">
                <div class="card-header">upload</div>
                <div class="card-body">

                </div>
              </div>
            </div>
          </div>

          <!--<div class="card text-white bg-secondary mb-3">
            <div class="card-header">Основное ПО</div>
            <div class="card-body">
              <div class="card text-white bg-primary mb-3">
                <div class="card-header">PHP</div>
                <div class="card-body">
                  <table class="table">
                    <thead>
                    <tr>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>Mark</td>
                      <td>Otto</td>
                    </tr>
                    <tr>
                      <td>Jacob</td>
                      <td>Thornton</td>
                    </tr>
                    <tr>
                      <td>Larry</td>
                      <td>the Bird</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="card text-white bg-primary mb-3">
                <div class="card-header">MySQL</div>
                <div class="card-body">
                  <table class="table">
                    <thead>
                    <tr>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>Mark</td>
                      <td>Otto</td>
                    </tr>
                    <tr>
                      <td>Jacob</td>
                      <td>Thornton</td>
                    </tr>
                    <tr>
                      <td>Larry</td>
                      <td>the Bird</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>-->

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderAdmin from "@/components/header/HeaderAdmin";
export default {
  layout: 'default',
  components: {
    HeaderAdmin
  },
}
</script>

