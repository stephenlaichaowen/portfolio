<template>
  <div class="contact-page">
    <h1>{{ $t('heroBtnContact') }}</h1>
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
