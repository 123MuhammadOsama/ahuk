import React from 'react'
import Link from 'next/link'
const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen mx-4">
    <h1 className="text-4xl font-semibold text-gray-700 text-center">
      Oops! Page not found
    </h1>
    <p className="mt-2 text-gray-300 text-center">
      The page you are looking for might have been removed or is temporarily
      unavailable.
    </p>
    <Link href="/" className="mt-4 text-secondary hover:underline">
      Go back to home
    </Link>
  </div>
  )
}

export default Error