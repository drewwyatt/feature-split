import React, {
  FC,
  createContext,
  useReducer,
  Dispatch,
  useContext,
  useCallback,
  Reducer,
} from 'react'

export enum Feature {
  Foo = 'foo',
}

const reducer: Reducer<Record<Feature, boolean>, Feature> = (state, feature) =>
  Object.assign({}, state, { [feature]: !state[feature] })

const FeatureContext = createContext<[ReturnType<typeof reducer>, Dispatch<Feature>]>(
  undefined,
)

const FeatureProvider: FC<{ initialState: Record<Feature, boolean> }> = ({
  children,
  initialState,
}) => (
  <FeatureContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </FeatureContext.Provider>
)

export const useFeature = (feature: Feature) => {
  const [f] = useContext(FeatureContext)
  return f?.[feature] || false
}
export const useFeatureToggle = (f: Feature) => {
  const [, dispatch] = useContext(FeatureContext)
  return useCallback(() => dispatch(f), [])
}

export default FeatureProvider
