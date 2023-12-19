import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material'

import { FeatureProvider, useFeature } from './helpers/feature'
import { InjectProvider } from './helpers/inject'
import { CustomEventProvider } from './helpers/event'

import { featureUserAuth } from './domains/domain-user/feature-user-auth'
import { featureUserInfo } from './domains/domain-user/feature-user-info'
import { featureUserSettings } from './domains/domain-user/feature-user-settings'

import { HomePage } from './pages/HomePage'
import { AuthPage } from './pages/AuthPage'

const App = () => {
  const featureSetup = () => {
    useFeature(featureUserAuth())
    useFeature(featureUserInfo())
    useFeature(featureUserSettings())
  }

  return (
    <ThemeProvider theme={createTheme({})}>
      <BrowserRouter>
        <CustomEventProvider>
          <InjectProvider>
            <FeatureProvider setup={featureSetup}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/auth" element={<AuthPage />} />
              </Routes>
            </FeatureProvider>
          </InjectProvider>
        </CustomEventProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

createRoot(document.querySelector('#app')).render(<App />)