import { useMemo } from 'react'
import { useFeatureContext } from './context'

export const useFeatureIsInstalled = (name) => {
  const featureContext = useFeatureContext()

  const isInstalled = useMemo(() => {
    if (!featureContext) {
      return false
    }

    return featureContext.features.has(name)
  }, [featureContext?.features, name])

  return { isInstalled, name }
}