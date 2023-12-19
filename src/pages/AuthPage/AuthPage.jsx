import { Tabs, Tab } from '@mui/material'
import { createContext, useContext, useState } from 'react'
import { Inject } from '../../helpers/inject'

const TabsState = ({ children }) => {
  const [value, setValue] = useState(1)
  
  const onChange = (event, value) => setValue(value)

  return children({ value, onChange })
}

const Context = createContext("outside context")
export const useAuthPageContext = () => useContext(Context)

export const AuthPage = () => {
  return (
    <div>
      <h2>AuthPage</h2>
      <TabsState>
        {({ value, onChange }) => (
          <>
            <Tabs value={value} onChange={onChange}>
              <Tab label="login" value={1} />
              <Tab label="signup" value={2} />
            </Tabs>
            <Context.Provider value="inside context">
              {value === 1 ? <Inject name="LoginForm" /> : null}
              {value === 2 ? <Inject name="SignupForm" /> : null}
            </Context.Provider>
          </>
        )}
      </TabsState>
    </div>
  )
}