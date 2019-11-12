import React, { FC, useEffect, useState } from 'react'
import { Feature, useFeature } from '.'

type Props = {
  id: Feature
}

const useFetch = (id: Feature) => {
  const [feature, setFeature] = useState<{ default: React.ComponentType } | undefined>()
  const enabled = useFeature(id)

  useEffect(() => {
    import(`../${id}/feature${enabled ? '' : '.default'}`).then(setFeature)
  }, [enabled])

  return feature?.default
}

const FeatureFetcher: FC<Props> = ({ id }) => {
  const Feature = useFetch(id)
  return (
    <fieldset>
      <legend>{id}</legend>
      {Feature && <Feature />}
    </fieldset>
  )
}

export default FeatureFetcher
