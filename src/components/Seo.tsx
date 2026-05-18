import { Helmet } from 'react-helmet-async'
import { SITE } from '../constants/site'

export function Seo() {
  const title = `${SITE.name} - ${SITE.role}`
  const description = SITE.tagline

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}
