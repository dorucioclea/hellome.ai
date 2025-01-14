import { useTranslation } from "next-i18next"

import { type Article } from "@/lib/mdx/types"

import { ArticleListItem } from "@/mdx/blog/articles/ArticleListItem"
import { TopArticles } from "@/mdx/blog/articles/TopArticles"

export type ArticlesPageProps = {
  articles: Article[]
}

export const ArticlesPage = ({ articles }: ArticlesPageProps) => {
  const articlesTop = articles.slice(0, 3)
  const articlesRest = articles.slice(3)

  const { t } = useTranslation("articles")

  return (
    <>
      <section
        id="articles"
        className="body-font overflow-hidden text-gray-600"
      >
        <div className="mx-auto max-w-screen-xl p-4 sm:px-4 lg:px-8 lg:pt-12">
          <div className="container mx-auto px-5 py-12">
            <div className="-my-8 divide-y-2 divide-gray-100">
              {articles.length >= 4 ? (
                <>
                  <TopArticles articles={articlesTop} />
                  {articlesRest.map((article) => (
                    <ArticleListItem
                      key={article.slug}
                      author={article.author!}
                      article={article}
                    />
                  ))}
                </>
              ) : (
                articles.map((article) => (
                  <ArticleListItem
                    key={article.slug}
                    author={article.author!}
                    article={article}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )

  // return (
  //   <>
  //     {/* <TopArticles articles={articlesTop} /> */}

  //     <main className="bg-white pb-16 pt-8 dark:bg-gray-900 lg:pb-24 lg:pt-16">
  //       <div className="mx-auto flex max-w-screen-xl justify-between px-4 ">
  //         <article className="format-sm format format-blue mx-auto w-full max-w-2xl dark:format-invert sm:format-base lg:format-lg">
  //           <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
  //             <div className="grid gap-5 sm:mx-auto sm:max-w-sm lg:max-w-full lg:grid-cols-1">
  //               {articles.map((article) => (
  //                 <ArticleListItem key={article.slug} article={article} />
  //               ))}
  //             </div>
  //           </div>
  //         </article>
  //       </div>
  //     </main>
  //   </>
  // )
}
