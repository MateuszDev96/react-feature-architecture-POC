import { useMemo } from 'react'
import { Context } from './context'

export const CustomEventProvider = ({ children }) => {
  const target = useMemo(() => new EventTarget(), [])
  
  const addCustomListener = (type, fn) => {
    target.addEventListener(type, fn)
    return () => target.removeEventListener(type, fn)
  }

  const dispatchCustomEvent = (type, value) => {
    target.dispatchEvent(new CustomEvent(type, { detail: value }))
  }

  return (
    <Context.Provider value={{ target, addCustomListener, dispatchCustomEvent }}>
      {children}
    </Context.Provider>
  )
}