import React, { Component } from 'react'
import { Divider, Input, Card, Form, Button, Row, Col, DatePicker, TimePicker } from 'antd'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import ImageUploader from '../components/ImageUploader'

function onChange (date, dateString) {
  // console.log(date, dateString)
}

class VotingForm extends Component {
  render () {
    const { options } = this.props

    const option = (
      options.map((opt, index) => (
        <Row type="flex" justify="start" key={index}>
          <Col span={16}>
            <Input placeholder={opt}/>
          </Col>
        </Row>
      ))
    )

    return (
      <Card>
        <Form>
          <Form.Item>
            <Input placeholder="Description"/>
          </Form.Item>
          <Form.Item>
            <ImageUploader />
          </Form.Item>
          <Form.Item>
            <Input placeholder="Title"/>
          </Form.Item>
          <Divider />
          <Form.Item>
            {option}
            <Button type="dashed">
              Add
            </Button>
          </Form.Item>
          <Divider />
        </Form>
        <DatePicker onChange={onChange} />
        <TimePicker onChange={onChange} />
      </Card>
    )
  }
}

VotingForm.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string)
}

const mapStateToProps = (state) => {
  return state.voting.detail
}

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null, {
    pure: false
  }
)(VotingForm)
