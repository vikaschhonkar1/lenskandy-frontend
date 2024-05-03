import React from 'react'

const Page = ({params}: any) => {
  return (
    <div>Eyeglasses : {JSON.stringify(params)}</div>
  )
}

export default Page