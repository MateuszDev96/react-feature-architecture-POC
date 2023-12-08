import { useEffect } from 'react'
import { useFeatureContext } from './context'

export const useFeature = ({ name, dependencies, provider }, isInstalled = true) => {
  const featureContext = useFeatureContext()
  
  useEffect(() => {
    if (featureContext && isInstalled) {
      const { handleInstall, handleUninstall } = featureContext

      handleInstall({ name, dependencies, provider })
      return () => handleUninstall(name)
    }
  }, [name, dependencies, isInstalled, !!featureContext])
}