<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-3">
        <div class="card text-white bg-secondary border-light mt-3">
          <div class="card-header text-center">Настройки</div>
          <div class="card-body">

            <ul class="nav">
              <li class="nav-item nav-pills nav-fill">
                <a class="nav-link" data-toggle="tab" href="#home">Внешний вид</a>
              </li>
              <li class="nav-item nav-pills nav-fill" style="margin-left: 15px;">
                <a class="nav-link" data-toggle="tab" href="#profile">Profile</a>
              </li>

            </ul>
            <div id="myTabContent" class="tab-content mt-3 mb-3">
              <div class="tab-pane fade show active" id="home">
                <div class="card text-white bg-primary">
                  <div class="card-body">
                    <div class="">

                        <div class="form-row">
                          <div class="form-group col-md-6">
                            <div class=" dropdown">
                              <a class="btn text-light dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                Тема</a>
                              <div class="dropdown-menu" style="">
                                <a class="dropdown-item" href="#">Slate</a>
                                <a class="dropdown-item" href="#">Sandstone</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Separated link</a>
                              </div>
                            </div>
                          </div>
                          <div class="form-group col-md-6">
                            <div class=" dropdown">
                              <a class="btn text-light dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                Язык</a>
                              <div class="dropdown-menu" style="">
                                <a class="dropdown-item" href="#">Русский</a>
                                <a class="dropdown-item" href="#">Английский</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Separated link</a>
                              </div>
                            </div>
                          </div>
                        </div>

                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="profile">
                <div class="card text-white bg-primary">
                  <div class="card-body">
                    <div class="">

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button type="submit" class="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'default',
  data: () => {
    return {
      pathLogin: ''
    }
  },
  middleware({ store, redirect }) {

    // const redirectPathFirst = store.state.http.redirectPathFirst;
    // // console.log(redirectPathFirst)
    //
    // if (redirectPathFirst !== "no-redirect")
    // {
    //   redirect(redirectPathFirst);
    // }
  },
  mounted() {
    this.pathLogin = this.$store.state.env.host + '/local/admin/login/'
  }
}
</script>

