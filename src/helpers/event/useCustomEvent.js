import { useCustomEventContext } from './context'

export const useCustomEvent = () => {
  const customEventContext = useCustomEventContext()

  const addCustomListener = (type, fn) => {
    if (customEventContext) {
      customEventContext.addCustomListener(type, fn)
    }
  }

  const dispatchCustomEvent = (type, value) => {
    if (customEventContext) {
      customEventContext.dispatchCustomEvent(type, value)
    }
  }
  
  return {
    addCustomListener,
    dispatchCustomEvent,
  }
}