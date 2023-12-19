import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useInject } from '../../../helpers/inject'
import { LoginForm } from './ui-login-form'
import { SignupForm } from './ui-signup-form'

export const featureUserAuth = () => ({
  name: 'UserAuth@1.0.0',
  dependencies: [],
  run: () => {
    useInject('LoginForm', () => <LoginForm />)
    useInject('SignupForm', () => <SignupForm />)
  }
})
