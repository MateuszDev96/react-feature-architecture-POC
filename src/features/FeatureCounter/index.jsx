import { useInject } from '../../helpers/inject'
import { useFeatureIsInstalled } from '../../helpers/feature'

export const featureCounter = () => ({
  name: 'Counter@1.0.0',
  dependencies: ['Dashboard@1.0.0'],
  provider: ({ children }) => {
    const { isInstalled, name } = useFeatureIsInstalled('DoNothing@1.0.0')
    
    useInject('counter', () => {
      return (
        <div style={{ border: '2px dotted blue', padding: '8px' }}>
          Counter

          <div style={{ marginTop: '8px' }}>
            widzę, ze <strong>{name}</strong> {isInstalled ? 'jest zainstalowany' : 'nie jest zainstalowany'}
          </div>
        </div>
      )
    })

    return children
  }
})