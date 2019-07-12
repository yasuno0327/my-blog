import React from 'react'
import { Item } from 'semantic-ui-react'

function ArticlePage() {
  return (
    <Item>
      <Item.Image
        centered
        rounded
        size='medium'
        src='https://www.montereyairport.com/sites/main/files/main-images/camera_lense_0.jpeg'
      />
      <Item.Content>
        <Item.Header as='a'>Header</Item.Header>
        <Item.Description>
          hogehogehoge
        </Item.Description>
      </Item.Content>
    </Item>
  )
}

export default ArticlePage
