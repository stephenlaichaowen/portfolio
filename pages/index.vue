<template>
  <div class="home-page">
    <!-- <h1>Home page</h1> -->
    <h1>{{ $t('homepage') }}</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit('showHomePage', false)
  }
}
</script>

<style scoped>
.home-page {
  /* padding-top: 30px; */
}
</style>