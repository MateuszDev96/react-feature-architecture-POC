import { createRoot } from 'react-dom/client'
import { Outlet } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material'

import { FeatureProvider, useFeature } from './helpers/feature'
import { InjectProvider } from './helpers/inject'
import { CustomEventProvider } from './helpers/event'
import { useRouter, RouterProvider } from './helpers/router'

import { featureUserAuth } from './domains/domain-user/feature-user-auth'
import { featureUserInfo } from './domains/domain-user/feature-user-info'
import { featureUserSettings } from './domains/domain-user/feature-user-settings'

import { homePage } from './pages/HomePage'
import { authPage } from './pages/AuthPage'

const App = () => {
  const featureSetup = () => {
    useFeature(featureUserAuth())
    useFeature(featureUserInfo())
    useFeature(featureUserSettings())
  }

  const routerSetup = () => {
    useRouter(authPage())
    useRouter(homePage())
  }

  return (
    <ThemeProvider theme={createTheme({})}>
      <CustomEventProvider>
        <InjectProvider>
          <FeatureProvider setup={featureSetup}>
            <RouterProvider setup={routerSetup}>
              <Outlet />
            </RouterProvider>
          </FeatureProvider>
        </InjectProvider>
      </CustomEventProvider>
    </ThemeProvider>
  )
}

createRoot(document.querySelector('#app')).render(<App />)