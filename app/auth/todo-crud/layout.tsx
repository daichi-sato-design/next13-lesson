import React from 'react'
import { Suspense } from 'react'
import Spinner from '../../components/spinner'
import TodoEdit from '../../components/todo-edit'
import TodoList from '../../components/todo-list'

const TodoCrudLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex px-4">
      <aside
        className={`h-[calc(100vh-96px)] mt-[20px] rounded-xl w-1/4 p-2 dark:bg-slate-800`}
      >
        <TodoEdit />
        <Suspense fallback={<Spinner />}>
          {/** @ts-ignore */}
          <TodoList />
        </Suspense>
      </aside>
      <main className="flex flex-1 justify-center">{children}</main>
    </section>
  )
}

export default TodoCrudLayout
