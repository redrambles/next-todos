"use server";
import { prisma } from "@/db";

type DeleteTodo = {
  id: string;
};

const deleteTodo = async (id: string): Promise<DeleteTodo> => {
  // console.log({ id, complete });
  const deletedTodo = await prisma.todo.delete({
    where: { id: id }
  });

  return deletedTodo;
};

export default deleteTodo;
