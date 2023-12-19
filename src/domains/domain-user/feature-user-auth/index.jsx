import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useInject } from '../../../helpers/inject'
import { useCustomEvent } from '../../../helpers/event'
import { LoginForm } from './ui-login-form'
import { SignupForm } from './ui-signup-form'

export const featureUserAuth = () => ({
  name: 'UserAuth@1.0.0',
  dependencies: [],
  run: () => {
    const navigate = useNavigate()
    const { addCustomListener } = useCustomEvent()

    useEffect(() => {
      const disposer = addCustomListener('login', () => {
        navigate('/')
      })

      return disposer
    }, [])

    useInject('LoginForm', () => <LoginForm />)
    useInject('SignupForm', () => <SignupForm />)
  }
})
