import Link from "next/link";
import { prisma } from "@/db";
import TodoItem from "@/components/TodoItems";
import React from "react";

const getTodos = () => {
  return prisma.todo.findMany();
};

async function Home() {
  const todos = await getTodos();
  // Add a todo manually for now
  // await prisma.todo.create({ data: { title: "Learn Next.js", complete: false } });
  console.log(await getTodos());
  return (
    <>
      <header className='flex justify-between items-center mb-4'>
        <h1 className='text-2xl'>Todos</h1>
        <nav className='flex gap-4'>
          <Link
            href='/about'
            className='border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none'
          >
            About
          </Link>
          <Link
            href='/new'
            className='border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none'
          >
            New
          </Link>
        </nav>
      </header>
      <ul className='pl-4'>
        {todos?.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
}

export default Home;
