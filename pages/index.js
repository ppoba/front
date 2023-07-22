import Link from '@/components/Link'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import { PageSEO } from '@/components/SEO'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import Slider, { SliderThumb, SliderValueLabelProps } from '@mui/material/Slider'
import { styled } from '@mui/material/styles'
import Tooltip from '@mui/material/Tooltip'

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
      <main className="flex flex-col gap-3">
        <div className="sticky top-0 z-10 flex flex-col justify-center bg-bgColor text-base">
          <div className="flex justify-center">
            <div className="flex w-[300px] flex-col gap-2 text-3xl font-bold">
              <div className="flex justify-center">결정장애인 저를 위해 투표</div>
              <div className="flex justify-between">
                <span>한번 !</span>
                <span>부탁요</span>
              </div>
            </div>
          </div>
          <div className="-mt-9 flex justify-center">
            <Image alt={'삼콩이 뽀바줘'} src={'/static/images/logo.png'} width={130} height={70} />
          </div>
          <div className="-mt-4 flex justify-between rounded-2xl border-2 border-borderColor bg-white px-2 py-1">
            <input
              type="text"
              onChange={(e) => {}}
              className="color-inputColor w-[90%] border-0 focus:border-current focus:ring-0"
              placeholder="찾고있는 방이 있나요?"
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </div>
          <div className="mt-2 flex justify-center text-3xl font-bold">
            가장 들어가 보고 싶은 방은?
          </div>
        </div>
      </main>
    </>
  )
}
