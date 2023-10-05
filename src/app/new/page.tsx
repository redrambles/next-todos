import Link from "next/link";
import React from "react";

function New() {
  return (
    <div>
      <h1 className='my-4 py-2'>Enter new Todo here</h1>
      <Link
        href='/'
        className='border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none'
      >
        Back to Home Page
      </Link>
    </div>
  );
}

export default New;
