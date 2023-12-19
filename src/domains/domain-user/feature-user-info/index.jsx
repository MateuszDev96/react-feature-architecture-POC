import { Inject, useInject } from '../../../helpers/inject'

export const featureUserInfo = () => ({
  name: 'UserInfo@1.0.0',
  dependencies: [],
  run: () => {
    useInject("UserInfo", () => <div>UserInfo</div>)
  }
})
