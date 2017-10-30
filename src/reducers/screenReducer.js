export default (state=[], action) => {
  switch (action.type) {
    case "UPDATE_SIZE":
      return action.payload
    default:
      return state
  }
}
