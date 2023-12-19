import { Button } from '@mui/material'
import { Layout } from '../../styles/Layout'
import { useInject } from '../../helpers/inject/useInject'
import { AppBar } from '../../shared/ui/AppBar'
import { useNavigate } from 'react-router-dom'

export const HomePage = () => {
  const navigate = useNavigate()

  useInject('layout:header', () => (
    <AppBar
      start={<div>Logo</div>}
      end={<Button onClick={() => navigate('/auth')}>logout</Button>}
    />
  ))

  useInject('layout:content', () => {
    return (
      <div>lll</div>
    )
  })

  return <Layout />
}