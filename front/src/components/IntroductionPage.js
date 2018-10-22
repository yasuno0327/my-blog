import React from 'react'
import { Card, Tab, Icon, Image, Container, Header, Segment } from 'semantic-ui-react'

function IntroductionPage() {
  return (
    <Tab.Pane>
      <Container text>
        <Container className='container-me'>
          <Card className='about-me'>
            <Image src='/me.jpg' />
            <Card.Content>
              <Card.Header>楊野 良智</Card.Header>
              <Card.Meta>
                <span className='birthday'>Born on 1997/03/27</span>
              </Card.Meta>
              <Card.Description>出身地埼玉県</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='envelope outline' />
                hogehoge@hogehoge.com
              </a>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='code' />
                Golang, Javascript, Ruby
              </a>
            </Card.Content>
          </Card>
          <Container className='detail-me'>
            <br /><Header as='h3'>所属</Header>
            東京理科大学工学部経営工学科
            <Header as='h3'>技術</Header>
            Golang,Javascript,Ruby,Docker,AWS
            <Header as='h3'>趣味</Header>
            アニメ、筋トレ、プロコン
            <Header as='h3'>将来の夢</Header>
            情報技術で世界平和を実現すること
            <Header />
            <Header as='h3'>興味があるキーワード</Header>
            Kubernetes,GRPC,SRE,HTTP2,機械学習
          </Container>
          <Container className='description'>
            <Header as='h2'>ご訪問頂きありがとうございます。</Header>
            <p className='description-text'>
              こんにちは、このサイトでは主に私(Yasu)が普段使っている技術や、最近話題になっている技術に<br /><br />
              関してブログ形式で意見を投稿していきます。<br /><br />
              主にGolang, Docker, Security関係の話題を投稿していきます。<br /><br />
              ところどころミスがあると思います、その際はご指摘して頂けたら幸いです！<br /><br />
            </p>
          </Container>
          <Container className='my-history'>
            <Header as='h2'>経歴</Header>
            <Header as='h3'>2015</Header>
            <p className='history-text'>
              3月 大宮開成高校卒業 <br />
              4月 東京理科大学入学
            </p>
            <Header as='h3'>2016</Header>
            <p className='history-text'>
              9月 カウモハッカソン2位入賞 <br />
              11月 スペースマーケットインターン(3ヶ月)
            </p>
            <Header as='h3'>2017</Header>
            <p className='history-text'>
              2月 Hackday参加 <br />
              4月 Crowdworksインターン(6ヶ月) <br />
              8月 Fringe81(2週間)<br />
              11月 TeamLabアルバイト(現在まで)
            </p>
          </Container>
        </Container>
      </Container>
    </Tab.Pane>
  )
}

export default IntroductionPage
