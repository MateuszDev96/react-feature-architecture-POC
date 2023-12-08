import { useEffect, useRef, useState } from 'react'
import { Context } from './context'
import { CombineProviders } from '../CombineProviders'

const SetupAfterMount = ({ setup }) => {
  setup()
  return null
}

export const FeatureProvider = ({ setup, children }) => {
  const [features, setFeatures] = useState(new Map())
  const currentFeatures = useRef(new Map())

  const handleInstall = ({ name, dependencies = [], provider } = {}) => {
    if (!dependencies.every((dependency) => currentFeatures.current.has(dependency))) {
      throw new Error(`[FeatureProvider] ${name} requires [${dependencies.join(', ')}] dependencies`)
    }

    if (!currentFeatures.current.has(name)) {
      currentFeatures.current.set(name, { dependencies, provider })
    }
  }

  const handleUninstall = (name) => {
    if (features.has(name)) {
      setFeatures((current) => {
        const copy = new Map(current)
        copy.delete(name)
        return copy
      })
    }
  }

  const providers = Array.from(features).map(([, { provider }]) => provider)

  useEffect(() => {
    setFeatures(new Map(currentFeatures.current))
  }, [])

  return (
    <Context.Provider value={{ features, handleInstall, handleUninstall }}>
      <CombineProviders providers={providers}>
        {children}
      </CombineProviders>
      <SetupAfterMount setup={setup} />
    </Context.Provider>
  )
}