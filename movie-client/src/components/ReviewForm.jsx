import { Button } from '@mui/material'
import React from 'react'

const ReviewForm = ({handleSubmit,revText,labelText,defaultValue}) => {
  return (
      <form className="w-full flex flex-col gap-7 mt-14 items-center b-0">
          <label className="text-black-500 font-semibold">{labelText}</label>
          <input ref={revText} className="w-[75%] h-[100px] bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 mt-2.5 shadow-card" type="textarea" defaultValue={defaultValue} />
          
          <Button className="w-[50%]" onClick={handleSubmit}>Submit</Button>
      </form>
  )
}

export default ReviewForm