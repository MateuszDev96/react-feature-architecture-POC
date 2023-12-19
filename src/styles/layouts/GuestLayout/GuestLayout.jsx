import { Inject } from '../../../helpers/inject'
import classes from './classes.module.css'

export const GuestLayout = () => {
  return (
    <div className={classes.root} data-id="GuestLayout">
      <div className={classes.header}>
        <Inject name="guest-layout:header" />
      </div>
      <div className={classes.content}>
        <Inject name="guest-layout:content" />
      </div>
    </div>
  )
}