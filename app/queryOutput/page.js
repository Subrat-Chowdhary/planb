import React from 'react'
import { queryData } from '../../utils/getQueryOutput'

const page = async () => {
    const queryOutput = await queryData();
    console.log(JSON.stringify(queryOutput,))
  return (
    <div>page</div>
  )
}

export default page