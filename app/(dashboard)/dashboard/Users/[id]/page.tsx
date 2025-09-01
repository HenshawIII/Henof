import React from 'react'

const UserDeets = async ({params}:{params:Promise<{id:string}>}) => {
    const {id} = await params
  return (
    <div className='text-3xl'>User Profile {id} </div>
  )
}

export default UserDeets