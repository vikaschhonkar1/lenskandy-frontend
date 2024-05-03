import React from 'react'

const Page = ({params}: any) => {
  return (
    <div>Contact Lenses : {JSON.stringify(params)}</div>
  )
}

export default Page