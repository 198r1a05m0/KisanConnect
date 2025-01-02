import React from 'react'
import Input from '../../../Components/Input'
import Button from '../../../Components/Button'

export default function FindAWork() {
  return (
    <div>
          <h1 className='flex text-3xl justify-center pt-3 h-20 w-100 bg-blue-600 text-white rounded'>Find A Job</h1>
          <div className='h-80 rounded border-blue-500 border-2  bg-green-500'>
          <div className=" max-w-md mx-auto space-y-4 mt-6 mb-3 ">
            <div className="flex items-center">
              <label className="w-1/3 text-gray-700 font-medium">Laborer registers</label>
              <Input />
            </div>
            <div className="flex items-center">
              <label className="w-1/3 text-gray-700 font-medium">Location</label>
              <Input  />
            </div>
            <div className="flex items-center">
              <label className="w-1/3 text-gray-700 font-medium">Work Type</label>
              <Input  />
            </div>
            <div className="flex items-center">
              <label className="w-1/3 text-gray-700 font-medium">Time Period:</label>
              <Input  />
            </div>
          </div>
          <div className='flex items-center justify-center mb-3'>
        <Button label='Submit' className="bg-orange-500 rounded h-10 w-20 text-slate-50 hover:text-green-400 "></Button>
       </div>
          </div>
        </div>
  )
}
