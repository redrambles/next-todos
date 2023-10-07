"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import getTodos from "./functions/getTodos";
import toggleTodo from "./functions/toggleTodo";
import deleteTodo from "./functions/deleteTodo";
import TodoItem from "@/components/TodoItems";
import React from "react";

type TodoType = {
  id: string;
  title: string;
  complete: boolean;
};

function Home() {
  const [todos, setTodos] = useState<TodoType[]>([]);

  useEffect(() => {
    const loadTodos = async () => {
      await handleGetTodos();
    };
    loadTodos();
  }, []);

  const handleGetTodos = async () => {
    const todos = await getTodos();
    setTodos(todos);
  };

  const handleToggleTodo = async (id: string, complete: boolean) => {
    await toggleTodo(id, complete);
  };

  const handleDeleteTodo = async (id: string) => {
    await deleteTodo(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Add a todo manually for now
  // await prisma.todo.create({ data: { title: "Learn Next.js", complete: false } });
  // console.log(await getTodos());
  return (
    <>
      <header className='flex justify-between items-center mb-4'>
        <h1 className='text-2xl'>Todos</h1>
        <nav className='flex gap-4'>
          <Link
            href='/about'
            className='border border-orange-300 text-orange-300 px-2 py-1 rounded hover:bg-orange-700 hover:text-orange-100 focus-within:bg-orange-700 outline-none'
          >
            About
          </Link>
          <Link
            href='/new'
            className='border border-orange-300 text-orange-300 px-2 py-1 rounded hover:bg-orange-700 hover:text-orange-100 focus-within:bg-orange-700 outline-none'
          >
            New
          </Link>
        </nav>
      </header>
      <ul className='pl-4 mt-20'>
        {todos?.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={handleToggleTodo} deleteTodo={handleDeleteTodo} />
        ))}
      </ul>
    </>
  );
}

export default Home;
