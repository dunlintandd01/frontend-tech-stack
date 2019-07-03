import React from 'react'

// import i18n from '../i18n/index'
import styled from 'styled-components'
import { Tabs, Button } from 'antd'

import VotingForm from '../container/VotingForm'

const TabPane = Tabs.TabPane

const StyledDiv = styled.div`
  padding: 4em;
`

const ButtonDiv = styled.div`
  text-align: right;
  padding: 1em 0;
`

const Page = () => (
  <StyledDiv>
    <Tabs defaultActiveKey="1">
      <TabPane tab="Voting" key="1">
        <div>
          <ButtonDiv>
            {/* <Button type="primary" size="large">Delete</Button> */}
            <Button type="primary" size="large">Save</Button>
            {/* <Button type="primary" size="large">Publish</Button> */}
            {/* <Button type="primary" size="large">Preview</Button> */}
          </ButtonDiv>
          <VotingForm></VotingForm>
        </div>
      </TabPane>
      <TabPane tab="Petition" key="2">
        <p>b</p>
      </TabPane>
    </Tabs>
  </StyledDiv>
)

export default Page
