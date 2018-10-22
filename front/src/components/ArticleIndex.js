import React from 'react'
import { Tab, Image, Item } from 'semantic-ui-react'

function ArticleIndexPage() {
  return (
    <Tab.Pane>
      <Item.Group>
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
      </Item.Group>
    </Tab.Pane>
  )
}

export default ArticleIndexPage
