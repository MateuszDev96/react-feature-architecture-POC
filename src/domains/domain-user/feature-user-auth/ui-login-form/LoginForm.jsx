import { Button } from '@mui/material'
import { useAuthPageContext } from '../../../../pages/AuthPage/AuthPage'
import { useCustomEvent } from '../../../../helpers/event'

export const LoginForm = () => {
  console.log('useAuthPageContext', useAuthPageContext())

  const { dispatchCustomEvent } = useCustomEvent()
  const handleLogin = () => dispatchCustomEvent('login')

  return (
    <div>
      <div>LoginForm</div>
      <Button variant="contained" onClick={() => handleLogin()}>Login</Button>
    </div>
  )
}