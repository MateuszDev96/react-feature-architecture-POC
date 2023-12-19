import { useMemo } from 'react'
import { useRouterContext } from './context'

export const useRouteIsInstalled = (name) => {
  const routerContext = useRouterContext()

  const isInstalled = useMemo(() => {
    if (!routerContext) {
      return false
    }

    return routerContext.routes.has(name)
  }, [routerContext?.routes, name])

  return { isInstalled, name }
}