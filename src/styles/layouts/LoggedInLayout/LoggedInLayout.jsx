import { Inject } from '../../../helpers/inject'
import classes from './classes.module.css'

export const LoggedInLayout = () => {
  return (
    <div className={classes.root} data-id="LoggedInLayout">
      <div className={classes.header}>
        <Inject name="logged-in-layout:header" />
      </div>
      <div className={classes.content}>
        <Inject name="logged-in-layout:content" />
      </div>
    </div>
  )
}