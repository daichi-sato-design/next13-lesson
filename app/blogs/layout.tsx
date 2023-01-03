import React from 'react'
import BlogListStatic from '../components/blog-list-static'
import RefreshBtn from '../components/refresh-btn'

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex px-4">
      <aside
        className={`h-[calc(100vh-96px)] mt-[20px] rounded-xl w-1/4 p-2 dark:bg-slate-800`}
      >
        {/* @ts-ignore */}
        <BlogListStatic />
        <div className="flex justify-center">
          <RefreshBtn />
        </div>
      </aside>
      <main className="flex flex-1 justify-center">{children}</main>
    </section>
  )
}

export default BlogLayout
