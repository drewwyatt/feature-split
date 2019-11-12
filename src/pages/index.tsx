import React from 'react'
import FeatureFetcher from '../components/FeatureFetcher'

const Home = () => (
  <>
    <FeatureFetcher id="Foo" />
    <style jsx global>{`
      html,
      body {
        background: #333;
        color: #fff;
      }
    `}</style>
  </>
)

export default Home
