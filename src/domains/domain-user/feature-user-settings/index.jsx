import { Inject, useInject } from '../../../helpers/inject'

export const featureUserSettings = () => ({
  name: 'UserSettings@1.0.0',
  dependencies: ['UserAuth@1.0.0'],
  run: () => {
  }
})
