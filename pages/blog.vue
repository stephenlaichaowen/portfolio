<template>
  <div class="blog-page">
    <h1>Blog page</h1>
  </div>
</template>

<script>
export default {
   created() {
    this.$store.commit('showHomePage', false)
  }
}
</script>

<style scoped>
.blog-page {
  /* padding-top: 30px; */
}
</style>