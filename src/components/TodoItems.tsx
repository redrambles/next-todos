type TodoItemProps = {
  todo: {
    id: string;
    title: string;
    complete: boolean;
  };
};

const TodoItem = ({ todo: { id, title, complete } }: TodoItemProps) => {
  return (
    <li className='flex gap-1 items-center mb-2'>
      <input id={id} type='checkbox' className='cursor-pointer peer' />
      <label htmlFor={id} className='cursor-pointer peer-checked:line-through peer-checked:text-slate-500'>
        {" "}
        {title}
      </label>
    </li>
  );
};

export default TodoItem;
