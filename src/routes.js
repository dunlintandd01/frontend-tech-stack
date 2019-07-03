import TestPage from './pages/TestPage'
import RSVPListPage from './pages/RSVPListPage'
import RSVPDetailPage from './pages/RSVPDetailPage'

import VotingDetailPage from './pages/VotingDetailPage'

const routes = [
  {
    path: '/test',
    exact: true,
    component: TestPage
  },
  {
    path: '/event',
    exact: true,
    component: RSVPListPage
  },
  {
    path: '/event/detail',
    exact: true,
    component: RSVPDetailPage
  },
  {
    path: '/voting/detail',
    exact: true,
    component: VotingDetailPage
  }
]

export { routes }
