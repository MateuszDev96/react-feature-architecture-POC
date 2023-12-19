import { Inject } from '../../helpers/inject'
import classes from './classes.module.css'

export const Layout = () => {
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Inject name="layout:header" />
      </div>
      <div className={classes.content}>
        <Inject name="layout:content" />
      </div>
    </div>
  )
}