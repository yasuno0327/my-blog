import React from 'react'
import { Tab, Item } from 'semantic-ui-react'
import ArticlePage from './Article'

function ArticleIndexPage() {
  return (
    <Tab.Pane>
      <Item.Group divided>
        <ArticlePage />
        <ArticlePage />
      </Item.Group>
    </Tab.Pane>
  )
}

export default ArticleIndexPage
