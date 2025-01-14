import { type ReactNode } from "react"

import { type Article } from "@/lib/mdx/types"

import ArticleHeader from "@/mdx/blog/articles/ArticleHeader"

type ArticleProps = {
  article: Article
  children: ReactNode
}

const ArticlePage = ({ article, children }: ArticleProps) => {
  return (
    <>
      <main className="pb-16 pt-8  lg:pb-24 lg:pt-16">
        <div className="mx-auto flex max-w-screen-xl justify-between px-4 ">
          <article className="format-sm format format-blue dark:format-invert sm:format-base lg:format-lg mx-auto w-full max-w-2xl">
            <ArticleHeader article={article} />

            <section className="prose">{children}</section>
          </article>
        </div>
      </main>
    </>
  )
}

export default ArticlePage
