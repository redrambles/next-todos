import Link from "next/link";
import { prisma } from "@/db";
import { redirect } from "next/navigation";
import React from "react";

// server action
const createTodo = async (data: FormData) => {
  "use server"; // this will indicate that the function has to run only on the server
  const title = data.get("title")?.valueOf();
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("invalid title");
  }
  console.log("hi from the server");
  await prisma.todo.create({ data: { title, complete: false } });

  redirect("/");
};

function New() {
  return (
    <div>
      <header className='flex justify-between items-center mb-4'>
        <h1 className='text-2xl'>New</h1>
      </header>
      <form className='flex gap-2 flex-col' action={createTodo}>
        <input type='text' name='title' className='border border-orange-300 px-2 py-1 bg-transparent rounded outline-none' />
        <div className='flex gap-2 justify-end'>
          <Link
            className='border border-orange-300 text-orange-300 px-2 py-1 rounded hover:bg-orange-700 hover:text-orange-100 focus-within:bg-orange-700 outline-none'
            href='..'
          >
            Cancel
          </Link>
          <button
            type='submit'
            className='border border-orange-300 text-orange-300 px-2 py-1 rounded hover:bg-orange-700 hover:text-orange-100 focus-within:bg-orange-700 outline-none'
          >
            Create
          </button>
        </div>
      </form>
      <Link
        href='/'
        className='border border-orange-300 text-orange-300 px-2 py-1 rounded hover:bg-orange-700 hover:text-orange-100 focus-within:bg-orange-700 outline-none'
      >
        {" "}
        Back to Todos
      </Link>
    </div>
  );
}

export default New;
