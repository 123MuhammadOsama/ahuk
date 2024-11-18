"use client"
import Link from "next/link";
const ErrorComponent = () => {
    return (
        <div className="flex mt-52 flex-col items-center justify-center min-h-[500px] ">
        <h1 className="text-4xl font-semibold text-primary">
          Oops! Page not found
        </h1>
        <p className="mt-2 text-slate-900">
          The page you are looking for might have been removed or is temporarily
          unavailable.
        </p>
        <Link href="/" className="mt-4 text-secondary hover:underline">
          Go back to home
        </Link>
      </div>
    )
}

export default ErrorComponent