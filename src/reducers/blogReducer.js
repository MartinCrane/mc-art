export default (state=[], action) => {
  switch (action.type) {
    case "LOAD_BLOG":
      return action.payload
    default:
      return state
  }
}
