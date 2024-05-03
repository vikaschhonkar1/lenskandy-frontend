import React from 'react'

const Page = ({params}: any) => {
  return (
    <div>Reading Glasses : {JSON.stringify(params)}</div>
  )
}

export default Page