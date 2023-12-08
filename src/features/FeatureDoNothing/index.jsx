import { useInject } from '../../helpers/inject'

export const featureDoNothing = () => ({
  name: 'DoNothing@1.0.0',
  dependencies: ['Dashboard@1.0.0'],
  provider: ({ children }) => {
    useInject('doNothing', () => {
      return (
        <div style={{ border: '2px dotted pink', padding: '8px' }}>
          doNothing
        </div>
      )  
    })

    return children
  }
})