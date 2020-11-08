import React, {useEffect} from 'react'

const Callback = ({location, auth}) => {
  useEffect(() => {
    auth.handleAuth()
  }, [])


  return (
    <div>
      <h1>Loading...</h1>
    </div>
  )
}

export default Callback
