import { Layout } from '../../styles/Layout'
import { useInject } from '../../helpers/inject/useInject'
import { Inject } from '../../helpers/inject/Inject'
import { AppBar } from '../../shared/ui/AppBar'

export const HomePage = () => {
  useInject('layout:header', () => (
    <AppBar
      start={<Inject name="appbar:start" />}
      end={<Inject name="UserInfo" />}
    />
  ))
  useInject("appbar:start", () => <div>start</div>)
  useInject("appbar:end", () => <div>end</div>)
  useInject("layout:content", () => <Inject name="UserAuth" />)

  return <Layout />
}