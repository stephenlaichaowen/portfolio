export const mutations = {
  showHomePage(state, data) {
    state.homePage = data
  },
  setLang(state, data) {
    // if (process.client) {
    //   localStorage.setItem('lang', data)
    // }
    // state.lang = localStorage.getItem('lang')
    state.lang = data
  },
}
