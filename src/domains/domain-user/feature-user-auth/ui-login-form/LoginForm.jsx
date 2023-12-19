import { Button } from '@mui/material'
import { useCustomEvent } from '../../../../helpers/event'

export const LoginForm = () => {
  const { dispatchCustomEvent } = useCustomEvent()
  const handleLogin = () => dispatchCustomEvent('login')

  return (
    <div>
      <div>LoginForm</div>
      <Button variant="contained" onClick={() => handleLogin()}>Login</Button>
    </div>
  )
}