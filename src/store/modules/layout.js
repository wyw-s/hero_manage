const layout = {
  state: {
    unfoldOrClose: true
  },
  mutations: {
    unfoldOrClose (state, val) {
      state.unfoldOrClose = !val
    }
  }
}
export default layout
