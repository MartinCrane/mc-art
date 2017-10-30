export default (state='fAll', action) => {
  switch (action.type) {
    case "UPDATE_FREQ":
      return action.payload
    default:
      return state
  }
}
