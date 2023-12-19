import { createRoot } from 'react-dom/client'
import { RouterProvider, Outlet, createBrowserRouter } from 'react-router-dom'
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

  const router = createBrowserRouter([{
    path: '/auth',
    element: (
      <CustomEventProvider>
        <InjectProvider>
          <FeatureProvider setup={featureSetup}>
            <AuthPage />
          </FeatureProvider>
        </InjectProvider>
      </CustomEventProvider>
    ),
  }, {
    path: '/',
    element: <HomePage />,
  }])

  return (
    <ThemeProvider theme={createTheme({})}>
      <RouterProvider router={router}>
        <Outlet />
      </RouterProvider>
    </ThemeProvider>
  )
}

createRoot(document.querySelector('#app')).render(<App />)