import React, { FC, useEffect, useState } from 'react'

type Props = {
  id: string
}

const useFeature = (id: string) => {
  const [feature, setFeature] = useState<{ default: React.ComponentType } | undefined>()

  useEffect(() => {
    import(`./${id}.feature`).then(setFeature)
  }, [])

  return feature?.default
}

const FeatureFetcher: FC<Props> = ({ id }) => {
  const Feature = useFeature(id)
  return (
    <fieldset>
      <legend>{id}</legend>
      {Feature && <Feature />}
    </fieldset>
  )
}

export default FeatureFetcher
