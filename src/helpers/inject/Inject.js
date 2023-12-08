import { useMemo } from 'react'
import { useInjectContext } from './context'

export const Inject = ({ name }) => {
  const injectContext = useInjectContext()

  const inject = useMemo(() => {
    if (!injectContext) {
      return null
    }

    return injectContext.injects.has(name) ? injectContext.injects.get(name)() : null
  }, [injectContext?.injects])
  
  return inject
}