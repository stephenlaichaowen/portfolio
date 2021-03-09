<template>
  <div>
    <h1>Contact page</h1>
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

</style>