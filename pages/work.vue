<template>
  <div class="work-page">
    <h1>{{ $t('navbarWork') }}</h1>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.commit('showHomePage', false)
  },
}
</script>

<style scoped></style>
