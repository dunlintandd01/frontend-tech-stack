import React, { Component } from 'react'
import { List, Avatar, Icon } from 'antd'
import { connect } from 'react-redux'
import { getList } from '../redux/rsvp/actions'

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
)

class RSVPList extends Component {
  componentDidMount () {
    console.log('did mount')
    this.props.getList(this.props.status)
  }
  render () {
    console.log('render')
    return (
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: page => {
            console.log(page)
          },
          pageSize: 3
        }}
        dataSource={this.props.listData}
        renderItem={item => (
          <List.Item
            key={item.title}
            actions={[
              <IconText type="star-o" text="156" />,
              <IconText type="like-o" text="156" />,
              <IconText type="message" text="2" />
            ]}
            extra={
              <img
                width={272}
                alt="logo"
                src={item.coverImage}
              />
            }
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a href={item.href}>{item.title}</a>}
            />
            {item.detail}
          </List.Item>
        )}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    listData: state.rsvpList.list
  }
}

const mapDispatchToProps = {
  getList
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null, {
    pure: false
  }
)(RSVPList)
