import React from 'react'
import { Tab } from 'semantic-ui-react'
import IntroductionPage from './IntroductionPage'
import ArticleIndex from './ArticleIndex'

const panes = [
  { menuItem: 'About', render: IntroductionPage },
  { menuItem: 'Article', render: ArticleIndex }
]

function Home() {
  return (
    <Tab menu={{color: 'green', inverted: true, attached: false, tabular: false}} panes={panes} />
  )
}

export default Home
