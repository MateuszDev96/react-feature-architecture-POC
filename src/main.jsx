import { createRoot } from 'react-dom/client'
import { FeatureProvider, useFeature } from './helpers/feature'
import { InjectProvider, Inject } from './helpers/inject'
import { CustomEventProvider } from './helpers/event'

import { featureAuth } from './features/FeatureAuth'
import { featureDashboard } from './features/FeatureDashboard'
import { featureCounter } from './features/FeatureCounter'
import { featureDoNothing } from './features/FeatureDoNothing'


const App = () => {
  const setup = () => {
    useFeature(featureAuth())
    useFeature(featureDashboard())
    useFeature(featureCounter())
    useFeature(featureDoNothing())
  }

  return (
    <CustomEventProvider>
      <InjectProvider>
        <FeatureProvider setup={setup}>
          <Inject name="root" />
        </FeatureProvider>
      </InjectProvider>
    </CustomEventProvider>
  )
}

createRoot(document.querySelector('#app')).render(<App />)