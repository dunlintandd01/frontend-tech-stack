import React from 'react'

import { Tabs } from 'antd'
import i18n from '../i18n/index'
import RSVPList from '../container/RSVPList'
import styled from 'styled-components'

const { TabPane } = Tabs 

function callback (key) {
  console.log(key)
}

const StyledDiv = styled.div`
  padding: 4em;
`

const RSVPListPage = () => (
  <StyledDiv>
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab={i18n.t('pages.rsvp_list.menu_tabs.published')} key="1">
        <RSVPList status="published"/>
      </TabPane>
      <TabPane tab={i18n.t('pages.rsvp_list.menu_tabs.draft')} key="2">
        <RSVPList status="draft" />
      </TabPane>
      <TabPane tab={i18n.t('pages.rsvp_list.menu_tabs.finished')} key="3">
        <RSVPList status="finished" />
      </TabPane>
    </Tabs>
  </StyledDiv>
)

export default RSVPListPage
