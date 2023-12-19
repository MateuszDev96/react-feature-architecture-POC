import { useInjectContext } from './context'

export const Inject = ({ name }) => {
  const injectContext = useInjectContext()

  if (!injectContext) {
    return null
  }

  return injectContext.injects.has(name) ? injectContext.injects.get(name)() : null
}