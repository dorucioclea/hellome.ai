import { DefaultSeo, type DefaultSeoProps } from "next-seo"

import { site } from "~/@mdx/siteConfig"

export const defaults: DefaultSeoProps = {
  titleTemplate: `%s | ${site.name} Blog Author`,
}

export const DefaultAuthorSEO = () => {
  return <DefaultSeo {...defaults} />
}