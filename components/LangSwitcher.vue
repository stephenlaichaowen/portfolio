<template>
  <select v-model="$store.state.lang" @change="setLang($store.state.lang)">
    <option v-for="item in optionLang" :value="item.value" :key="item.id">
      {{ item.text }}
    </option>
  </select>
</template>

<script>
export default {
  data() {
    return {
      selectedValue: '',
      optionLang: [
        { text: 'English', value: 'en', id: 1 },
        { text: '中文', value: 'zh', id: 2 },
      ],
    }
  },
  methods: {
    setLang(value) {
      // console.log(`lang: ${value}`)

      this.$store.commit('setLang', value)
      this.$i18n.locale = value

      if (process.client) {
        localStorage.setItem('lang', value)
      }

      console.log(`store: ${this.$store.state.lang}`)
      console.log(`localStore: ${localStorage.getItem('lang')}`)
    },
  },
  mounted() {
    // this.selectedValue = localStorage.getItem('lang')
    console.log(`store: ${this.$store.state.lang}`)
    console.log(`localStore: ${localStorage.getItem('lang')}`)
  },
}
</script>
