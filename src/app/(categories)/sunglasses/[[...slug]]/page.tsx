import React from 'react'

const Page = ({params}: any) => {
  return (
    <div>Sunglasses : {JSON.stringify(params)}</div>
  )
}

export default Page