import React from 'react'

const Page = ({params}: any) => {
  return (
    <div>Kids Collection : {JSON.stringify(params)}</div>
  )
}

export default Page