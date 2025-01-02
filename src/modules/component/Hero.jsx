import React from 'react';
import Button from '../../Components/Button';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    
    <div className = "bg-[url('./images/bg.jpeg')] bg-cover bg-center h-screen">
      <h1 className='flex text-3xl justify-center pt-3 h-20 w-100 bg-blue-600 text-white rounded '>KisanConnect</h1>
      <div className='flex text-2xl justify-center gap-5 my-40'>
      <Link to="/PostAJob"><Button label="Post A Job" className="h-40 w-40 bg-blue-600 hover:bg-green-600 p-2 rounded  text-white"/></Link>
      <Link to="/FindAJob"><Button label="Find A Job" className="h-40 w-40 bg-blue-600 hover:bg-green-600 p-2  rounded text-white"/></Link>
      </div>   
    </div>
  )
}
