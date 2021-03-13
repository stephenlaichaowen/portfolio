<template>
  <div>
    <nuxt-content :document="post" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const post = await $content('posts', params.slug).fetch()

    return { post }
  },
  created() {
    this.$store.commit('showHomePage', false)
  },
}
</script>

<style scoped>

</style>