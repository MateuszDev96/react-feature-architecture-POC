import { useEffect } from 'react'
import { useFeatureContext } from './context'

export const useFeature = ({ name, dependencies, run }, isInstalled = true) => {
  const featureContext = useFeatureContext()
  
  useEffect(() => {
    if (featureContext && isInstalled) {
      const { handleInstall, handleUninstall } = featureContext

      handleInstall({ name, dependencies, run })
      return () => handleUninstall(name)
    }
  }, [name, dependencies, isInstalled, !!featureContext])
}