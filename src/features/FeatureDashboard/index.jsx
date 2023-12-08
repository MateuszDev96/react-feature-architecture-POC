import { Inject, useInject } from '../../helpers/inject'

const Dashboard = () => {
  return (
    <div style={{ border: '2px dotted red', padding: '8px' }}>
      Dashboard mounted into `root`
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Inject name="counter" />
        <Inject name="doNothing" />
      </div>
    </div>
  )
}

export const featureDashboard = () => ({
  name: 'Dashboard@1.0.0',
  dependencies: [],
  provider: ({ children }) => {
    useInject('root', () => <Dashboard />)

    return children
  }
})