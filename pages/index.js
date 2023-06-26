import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="max-w-lg rounded-2xl border border-dashed border-borderColor bg-bgCardColor/50  p-5">
        <h1 className="leading-20 text-2xl font-extrabold tracking-tight  dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-3xl md:leading-14">
          미션을 적어주세요
        </h1>

        <div className="relative mt-4">
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => {}}
            placeholder="방 이름을 적어주세요"
            className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
          />
        </div>

        <h1 className=" leading-20 mt-8 text-2xl font-extrabold tracking-tight  dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-3xl md:leading-14">
          마감 시간 설정
        </h1>
      </div>
    </>
  )
}
