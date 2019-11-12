import React from 'react'
import App from 'next/app'
import FeatureProvider, { Feature } from '../components/features'

type Props = {
  features: Record<Feature, boolean>
}

const toInitialState = (query: Record<string, any>, f: Feature) =>
  typeof query[f] !== 'undefined'

class MyApp extends App<Props> {
  render() {
    const { Component, pageProps, features } = this.props
    return (
      <FeatureProvider initialState={features}>
        <Component {...pageProps} />
      </FeatureProvider>
    )
  }

  static async getInitialProps({ ctx: { query } }) {
    const features = Object.values(Feature).reduce<Record<Feature, boolean>>(
      (obj, k) => ({ ...obj, [k]: toInitialState(query, k) }),
      {} as any,
    )

    return { features } as any
  }
}

export default MyApp
