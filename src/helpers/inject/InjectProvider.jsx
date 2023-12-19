import { useState } from 'react'
import { Context } from './context'

export const InjectProvider = ({ children }) => {
  const [injects, setJnjects] = useState(new Map())

  const handleInstallInject = (name, component) => {
    setJnjects((prev) => {
      const copy = new Map(prev)

      if (prev.has(name)) {
        throw new Error(`[InjectProvider] \`<Inject name="${name}"\` already exists`)
      }

      copy.set(name, () => component())
      return copy
    })
  }

  const handleUninstallInject = (name) => {
    setJnjects((prev) => {
      const copy = new Map(prev)
      copy.delete(name)
      return copy
    })
  }

  return (
    <Context.Provider value={{ injects, handleInstallInject, handleUninstallInject }}>
      {children}
    </Context.Provider>
  )
}