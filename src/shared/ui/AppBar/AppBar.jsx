import classes from './classes.module.css'

export const AppBar = ({ start, end }) => {
  return (
    <div className={classes.root}>
      <div className={classes.start}>{start}</div>
      <div className={classes.end}>{end}</div>
    </div>
  )
}