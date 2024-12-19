import React from 'react'
import { label } from 'three/webgpu'

const Button = ({label,className}) => {
    
  return (
    <button className={`${className}`}>
        {label}
    </button>
  )
}

export default Button
