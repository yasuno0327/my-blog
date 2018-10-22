import { injectGlobal } from 'styled-components'

/* eslint no-unused-expressions: 0 */
injectGlobal`
  body {
    @media (min-width: 1024px) {
      margin-right: 15%;
      margin-left: 15%;
    }
  }

  .top-header {
    margin-top: 2%;
    margin-bottom: 2%;
  }

  .about-me {
    margin-top 1%;
    float: left;
    vertical-align: middle;
  }

  .container-me {
    height: 100%;
  }

  .detail-me {
    margin-top: 1%;
  }

  .description {
    margin-top: 20%;
  }

  .about-box-me {
    text-align: center;
  }

  .history-text {
    display: inline-block;
    @media (min-width: 768px) {
      width: 40%;
    }
    @media (max-width: 767px) {
      width: 100%;
    }
    font-size: 14px;
    text-align: left;
  }

  .my-history {
    margin-top: 10%;
    margin-bottom: 10%;
  }

  .description-text {
    text-align: left;
  }

  .my-history {
    text-align: center;
  }
`
