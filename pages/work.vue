<template>
  <div>
    <h1>Work page</h1>
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