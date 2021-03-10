<template>
  <div class="blog-page">
    <h1>{{ $t('navbarBlog') }}</h1>
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
