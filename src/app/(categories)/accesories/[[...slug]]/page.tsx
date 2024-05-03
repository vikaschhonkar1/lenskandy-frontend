import React from 'react'

const Page = ({params}: any) => {
  return (
    <div>Accessories : {JSON.stringify(params)}</div>
  )
}

export default Page