<template>
  <li class="" style="">
    <div class="tree-simple-item d-flex justify-content-between">
      <div :style="`margin-left: ${margiLeftCalc === 15 ? 0 : margiLeftCalc}px;`">
        <svg style="position: relative; top: -3px;" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-return-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"/>
        </svg>
        <span v-on:click="openSection(item.ID)" class="link-hover">
                    {{item.NAME}}</span>
      </div>
      <NuxtLink class="btn-sm btn-secondary"
                :to="'/content/admin/edit/data/edit/section/iblock?id=' + idIblock + '&idsection=' + item.ID">
        Редактировать
      </NuxtLink>
    </div>
    <ul class="tree-simple-list">
      <tree-simple
          v-for="(child, index) in item.CHILDS"
          :item="child"
          :key="index"
          :margiLeftCalc="margiLeftCalc * 2"
      ></tree-simple>
    </ul>
  </li>
</template>

<script>
export default {
  name: "tree-simple",
  props: {
    item: Object,
    margiLeftCalc: Number
  },
  data: function () {
    return {
      idIblock: this.$route.query.id
    }
  }
}
</script>
