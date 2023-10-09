"use client"; // By default this will run on the server but becuase we are reacting to an onChange handler, we need this to be client-side
import { FaTrash } from "react-icons/fa";

type TodoItemProps = {
  todo: {
    id: string;
    title: string;
    complete: boolean;
  };
  toggleTodo: (id: string, complete: boolean) => void;
  deleteTodo: (id: string) => void;
};

const TodoItem = ({ todo, toggleTodo, deleteTodo }: TodoItemProps) => {
  const { id, title, complete } = todo;
  return (
    <li className='flex gap-1 items-center mb-2 justify-between w-9/12'>
      <div>
        <input
          id={id}
          type='checkbox'
          className='cursor-pointer peer'
          defaultChecked={complete}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        <label htmlFor={id} className='cursor-pointer peer-checked:line-through peer-checked:text-orange-500'>
          {" "}
          {title}
        </label>
      </div>
      <button
        type='button'
        className='border border-orange-300 text-orange-300 px-2 py-1 ml-5 rounded hover:bg-orange-700 hover:text-orange-100 focus-within:bg-orange-700 outline-none'
        onClick={() => deleteTodo(id)}
      >
        <FaTrash />
      </button>
    </li>
  );
};

export default TodoItem;
