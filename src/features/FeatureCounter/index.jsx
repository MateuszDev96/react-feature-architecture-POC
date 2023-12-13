import { useState } from 'react'
import { useInject } from '../../helpers/inject'
import { useFeatureIsInstalled } from '../../helpers/feature'

export const featureCounter = () => ({
  name: 'Counter@1.0.0',
  dependencies: ['Dashboard@1.0.0'],
  provider: ({ children }) => {
    const { isInstalled, name } = useFeatureIsInstalled('DoNothing@1.0.0')
    
    const Counter = () => {
      const [counter, setCounter] = useState(0)

      return (
        <div style={{ border: '2px dotted blue', padding: '8px' }}>
          Counter {counter}

          <button onClick={() => setCounter(counter + 1)}>
            Increase
          </button>

          <div style={{ marginTop: '8px' }}>
            widzę, ze <strong>{name}</strong> {isInstalled ? 'jest zainstalowany' : 'nie jest zainstalowany'}
          </div>
        </div>
      )
    }

    useInject('counter', () => <Counter />)

    return children
  }
})