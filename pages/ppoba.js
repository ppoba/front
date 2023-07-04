import Link from '@/components/Link'
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

const marks = [
  {
    value: 0,
    label: '10분',
  },
  {
    value: 100,
    label: '100분',
  },
]

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />

      <div className="-mt-10 flex flex-col">
        <Image
          alt={'삼콩이 뽀바줘'}
          src={'/static/images/logo.png'}
          className="object-contain object-center md:h-36 lg:h-48"
          width={310}
          height={150}
        />
        <div className="-mt-10 rounded-2xl border-2 border-borderColor bg-white pb-6 pt-10  text-center">
          <div className="text-3xl font-bold">점심메뉴 추천 해 주세요</div>
          <div className="mt-4 text-xl text-black">
            참여 인원 : <span className="font-bold">12</span>명
            <span className="pl-4 pr-2 text-mainColor">|</span> 남은 시간 :
            <span className="font-bold">12</span>분
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-col">
        <div>항목 6개</div>
        <div className="mt-2 grid rounded-2xl border border-dashed border-borderColor bg-bgCardColor/50 p-10">
          <Image
            alt={'삼콩이 뽀바줘'}
            ㄴ
            src={'/static/images/sample.png'}
            className="object-centers object-contain"
            width={310}
            height={150}
          />
          <div className="">짜장면</div>
        </div>
      </div>
    </>
  )
}
