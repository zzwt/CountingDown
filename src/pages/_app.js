import Router from 'next/router'
import App, { Container } from 'next/app'
import React from 'react'
import  { NextSeo } from 'next-seo'
import * as gtag from '../lib/gtag'

Router.events.on('routeChangeComplete', url => gtag.pageview(url))

export default class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <NextSeo title="Countingdown.live"
                 description="Beautiful and simple countdown timer for future events"/>
        <Component {...pageProps} />
      </Container>
    )
  }
}