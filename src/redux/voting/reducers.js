const initState = {
  detail: {
    title: '',
    description: '',
    options: ['222']
  }
}

export function voting (state = initState, action) {
  console.log(action)
  return state
}
