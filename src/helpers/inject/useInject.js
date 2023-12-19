import { useEffect } from 'react'
import { useInjectContext } from './context'

export const useInject = (name, component, isInjected = true) => {
  const injectContext = useInjectContext()

  
  useEffect(() => {
    if (injectContext && isInjected) {
      const { handleInstallInject, handleUninstallInject } = injectContext
      
      handleInstallInject(name, component)
      return () => handleUninstallInject(name)
    }
  }, [name, isInjected, !!injectContext])
}