export default (state=false, action) => {
  switch (action.type) {
    case "UPDATE_WEB":
      return action.payload
    default:
      return state
  }
}
