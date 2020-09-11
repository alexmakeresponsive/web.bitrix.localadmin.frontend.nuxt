<template>
  <div>
    <header-default></header-default>
    <h1>content page</h1>
    <div>
      <p>content:</p>
      <pre>
        {{JSON.stringify(content)}}
      </pre>
    </div>
  </div>
</template>
<script>
import HeaderDefault from '~/components/header/HeaderDefault.vue'
import hookAutchCheck from "~/hook/beforeCreate/auth/check";
export default {
  layout: 'default',
  components: {
    HeaderDefault
  },
  data() {
    return {
      content: []
    }
  },
  async fetch() {
    this.content = await fetch(
        'http://192.168.100.6/api/content/iblock'
    ).then(res => res.json())
  },
  beforeCreate: async function () {
    await hookAutchCheck();
  }
}
</script>
