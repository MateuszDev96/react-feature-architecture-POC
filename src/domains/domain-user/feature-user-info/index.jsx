import { Inject, useInject } from '../../../helpers/inject'
import { UserInfo } from './ui-user-info'

export const featureUserInfo = () => ({
  name: 'UserInfo@1.0.0',
  dependencies: ['UserAuth@1.0.0'],
  run: () => {
    useInject("UserInfo", () => <UserInfo />)
  }
})
