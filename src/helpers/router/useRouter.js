import { useEffect } from 'react'
import { useRouterContext } from './context'

export const useRouter = ({ name, path, dependencies, render }, isInstalled = true) => {
  const routerContext = useRouterContext()
  
  useEffect(() => {
    if (routerContext && isInstalled) {
      const { handleInstall, handleUninstall } = routerContext

      handleInstall({ name, path, dependencies, render })
      return () => handleUninstall(name)
    }
  }, [name, path, dependencies, isInstalled, !!routerContext])
}