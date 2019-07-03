import React from 'react'
import { connect } from 'react-redux'
import Counter from '../components/Counter'

import { decrement, incrementAsync } from '../redux/voting/actions'

const TestPage = ({ value, incrementAsync, decrement }) => (
  <div>
    <Counter
      value={value}
      onIncrement={incrementAsync}
      onDecrement={decrement} />
  </div>
)

const mapStateToProps = (state) => {
  console.log(state)
  return {
    value: state.counter
  }
}

const mapDispatchToProps = {
  incrementAsync, decrement
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestPage)
