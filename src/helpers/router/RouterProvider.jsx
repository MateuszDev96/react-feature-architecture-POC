import { useState, useRef, useEffect } from 'react'
import { RouterProvider as RouterRouterProvider, createBrowserRouter } from 'react-router-dom'
import { Context } from './context'

const SetupAfterMount = ({ setup }) => {
  setup()
  return null
}

export const RouterProvider = ({ setup, children }) => {
  const [routes, setRoutes] = useState(new Map())
  const currentRoutes = useRef(new Map())

  const handleInstall = ({ name, path, dependencies = [], render }) => {
    if (!dependencies.every((dependency) => currentRoutes.current.has(dependency))) {
      throw new Error(`[RouterProvider] ${name} requires [${dependencies.join(', ')}] dependencies`)
    }
    
    if (!currentRoutes.current.has(name)) {
      currentRoutes.current.set(name, { path, dependencies, render })
    }
  }

  const handleUninstall = (name) => {
    if (routes.has(name)) {
      setRoutes((current) => {
        const copy = new Map(current)
        copy.delete(name)
        return copy
      })
    }
  }

  useEffect(() => {
    setRoutes(new Map(currentRoutes.current))
  }, [])

  return (
    <Context.Provider value={{ routes, handleInstall, handleUninstall }}>
      {routes.size === 0 ? null : (
        <RouterRouterProvider
          router={createBrowserRouter(Array.from(routes).map(([, { path, render }]) => ({ path, element: render() })))}
        >
          {children}
        </RouterRouterProvider>
      )}
      <SetupAfterMount setup={setup} />
    </Context.Provider>
  )
}