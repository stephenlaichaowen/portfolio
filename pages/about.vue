<template>
  <div class="about-page">
    <h1>{{ $t('navbarAbout') }}</h1>
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
