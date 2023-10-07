"use server";
import { prisma } from "@/db";

const getTodos = async () => {
  const todos = await prisma.todo.findMany();
  console.log({ todos });
  return todos;
};

export default getTodos;
