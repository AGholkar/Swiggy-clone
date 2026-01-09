'use client'
import React from 'react'

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center 'min-h-100' w-full">
      {/* Outer Spinner */}
      <div className="relative w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-orange-100 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-orange-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
      
      {/* Loading Text */}
      <p className="mt-4 text-orange-600 font-semibold animate-pulse">
        Fetching Menu...
      </p>
    </div>
  )
}

export default Loader