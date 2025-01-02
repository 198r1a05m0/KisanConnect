import React from 'react'

export default function Input({label,className,type ='text'}) {
  return (
    <div className={`${className}`}>
      {label && <label className="mb-1 text-sm font-medium">{label}</label>}
      <input type={type} />
    </div> 
  )
}
