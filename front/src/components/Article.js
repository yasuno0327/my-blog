import React from 'react'
import { Image, Item } from 'semantic-ui-react'

function ArticlePage() {
  return (
        <Item>
          <Item.Image size='tiny' src='/images/wireframe/image.png' />

          <Item.Content>
            <Item.Header as='a'>Header</Item.Header>
            <Item.Meta>Description</Item.Meta>
            <Item.Description>
              <Image src='/images/wireframe/short-paragraph.png' />
            </Item.Description>
            <Item.Extra>Additional Details</Item.Extra>
          </Item.Content>
        </Item>
  )
}

export default ArticlePage
