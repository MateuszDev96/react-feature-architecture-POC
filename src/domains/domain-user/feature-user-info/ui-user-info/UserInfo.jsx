import { useEffect } from 'react'

export const UserInfo = () => {
  useEffect(() => {
    console.log('onMount - UserInfo')
  }, [])

  return (
    <div>
      UserInfo
    </div>
  )
}