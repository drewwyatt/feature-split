import React from 'react'
import { Feature, useFeature, useFeatureToggle } from '../components/features'
import FeatureFetcher from '../components/features/FeatureFetcher'

const Home = () => {
  const foo = useFeature(Feature.Foo)
  const toggle = useFeatureToggle(Feature.Foo)
  return (
    <>
      <FeatureFetcher id={Feature.Foo} />
      <br />
      <button onClick={toggle}>{foo ? '👍' : '👎'}</button>
      <style jsx global>{`
        html,
        body {
          background: #333;
          color: #fff;
        }
      `}</style>
    </>
  )
}

export default Home
