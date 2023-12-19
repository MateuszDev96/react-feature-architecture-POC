import { Button } from '@mui/material'
import { LoggedInLayout } from '../../styles/layouts/LoggedInLayout'
import { useInject, Inject } from '../../helpers/inject'
import { AppBar } from '../../shared/ui/AppBar'
import { useNavigate } from 'react-router-dom'

const useInjectAppBar = () => {
  const navigate = useNavigate()

  useInject('logged-in-layout:header', () => (
    <AppBar
      start={<div>Sylvester</div>}
      end={<Button variant="contained" color="secondary" size="small" onClick={() => navigate('/auth')}>logout</Button>}
    />
  ))
}

export const HomePage = () => {
  useInjectAppBar()

  useInject('logged-in-layout:content', () => {
    return (
      <Inject name="UserInfo" />
    )
  })

  return <LoggedInLayout />
}