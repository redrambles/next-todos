"use server";
import { prisma } from "@/db";

type ToggleTodo = {
  id: string;
  complete: boolean;
};

const toggleTodo = async (id: string, complete: boolean): Promise<ToggleTodo> => {
  // console.log({ id, complete });
  const updatedTodo = await prisma.todo.update({
    where: { id: id },
    data: { complete: complete }
  });

  return updatedTodo;
};

export default toggleTodo;
