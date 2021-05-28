
import AppBar from '@material-ui/core/AppBar'
import Page from 'material-ui-shell/lib/containers/Page'
import React, { useState } from 'react'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import { useIntl } from 'react-intl'
import UserInfo from './UserInfo'
import Infomation from './Infomation'

const MyPage = () => {
  const [tab, setTab] = useState('infomation')
  const intl = useIntl()

  return (
    <Page
      pageTitle={intl.formatMessage({
        id: 'my_page',
        defaultMessage: 'Tabs demo',
      })}
      tabs={
        <AppBar position="static">
          <Tabs
            value={tab}
            onChange={(e, t) => setTab(t)}
            aria-label="simple tabs example"
            centered
          >
            <Tab label="会員情報" value="user_info" />
            <Tab label="購入履歴" value="order_history" />
            <Tab label="ポイント履歴" value="point_history" />
          </Tabs>
        </AppBar>
      }
    >
      <div>
        {tab === 'infomation' && <Infomation>One</Infomation>}
        {tab === 'user_info' && <UserInfo>One</UserInfo>}
        {tab === 'two' && <div>Two</div>}
        {tab === 'three' && <div>Three</div>}
      </div>
    </Page>
  )
}
export default MyPage