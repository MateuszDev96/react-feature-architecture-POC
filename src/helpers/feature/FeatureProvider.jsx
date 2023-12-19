import { useEffect, useRef, useState } from 'react'
import { Context } from './context'

const SetupAfterMount = ({ setup }) => {
  setup()
  return null
}

const Runner = ({ feature: [, { run }] }) => {
  run()
  return null
}

export const FeatureProvider = ({ setup, children }) => {
  const [features, setFeatures] = useState(new Map())
  const currentFeatures = useRef(new Map())

  const handleInstall = ({ name, dependencies = [], run } = {}) => {
    if (!dependencies.every((dependency) => currentFeatures.current.has(dependency))) {
      throw new Error(`[FeatureProvider] ${name} requires [${dependencies.join(', ')}] dependencies`)
    }

    if (!currentFeatures.current.has(name)) {
      currentFeatures.current.set(name, { dependencies, run })
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

  useEffect(() => {
    setFeatures(new Map(currentFeatures.current))
  }, [])

  return (
    <Context.Provider value={{ features, handleInstall, handleUninstall }}>
      {children}
      <SetupAfterMount setup={setup} />
      {Array.from(features).map((feature) => (
        <Runner feature={feature} key={feature[0]} />
      ))}
    </Context.Provider>
  )
}