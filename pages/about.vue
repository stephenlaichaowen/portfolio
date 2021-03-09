<template>
  <div>
    <h1>About page</h1>
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