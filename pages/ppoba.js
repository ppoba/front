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

      <div className="sticky top-0 z-50 flex flex-col bg-bgColor text-base">
        <div className="flex justify-center pl-10 pr-10">
          <Image alt={'삼콩이 뽀바줘'} src={'/static/images/logo.png'} width={186} height={90} />
        </div>
        <div className="-mt-6 rounded-2xl border-2 border-borderColor bg-white p-4 pt-6 text-center">
          <div className="text-2xl font-bold ">음료골라주세요</div>
          <div className="mt-3 text-black ">
            참여 인원 :<span className="mx-1 font-bold">12</span>명
            <span className="mx-6 text-mainColor">|</span>
            남은 시간 :<span className="mx-1 font-bold">12</span>분
          </div>
        </div>
      </div>
      <div className=" mt-1 flex flex-col ">
        <div>항목 6개</div>
        <div className="mt-2 grid rounded-2xl border border-dashed border-borderColor bg-bgCardColor/50 px-4 py-2">
          <div className="grid grid-cols-12 gap-2 border-b-[2px] pt-3 pb-3">
            <div className="col-span-2">
              <Image
                alt={'짜장면'}
                src={'/static/images/sample.png'}
                className="object-contain"
                width={80}
                height={80}
              />
            </div>
            <div className="col-span-8 ">
              <div className="text-2xl leading-6 text-black">
                짜장면짜장면짜장면짜장면짜장면짜장면짜장면
              </div>
              <div className="text-sm leading-10 text-grayColor">투표 1명</div>
            </div>
            <Link href="/" className="col-span-2">
              <button className="w-full rounded-lg border-2 border-buttonBorderColor bg-mainColor pt-2 pb-2 text-sm font-bold text-white shadow transition-colors duration-150 sm:pt-1 sm:pb-1">
                투표
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-12 gap-2 border-b-[2px] pt-3 pb-3">
            <div className="col-span-2">
              <Image
                alt={'짜장면'}
                src={'/static/images/sample.png'}
                className="object-contain"
                width={80}
                height={80}
              />
            </div>
            <div className="col-span-8 ">
              <div className="text-2xl leading-6 text-black">
                짜장면짜장면짜장면짜장면짜장면짜장면짜장면
              </div>
              <div className="text-sm leading-10 text-grayColor">투표 1명</div>
            </div>
            <Link href="/" className="col-span-2">
              <button className="w-full rounded-lg border-2 border-buttonBorderColor bg-mainColor pt-2 pb-2 text-sm font-bold text-white shadow transition-colors duration-150 sm:pt-1 sm:pb-1">
                투표
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-12 gap-2 border-b-[2px] pt-3 pb-3">
            <div className="col-span-2">
              <Image
                alt={'짜장면'}
                src={'/static/images/sample.png'}
                className="object-contain"
                width={80}
                height={80}
              />
            </div>
            <div className="col-span-8 ">
              <div className="text-2xl leading-6 text-black">
                짜장면짜장면짜장면짜장면짜장면짜장면짜장면
              </div>
              <div className="text-sm leading-10 text-grayColor">투표 1명</div>
            </div>
            <Link href="/" className="col-span-2">
              <button className="w-full rounded-lg border-2 border-buttonBorderColor bg-mainColor pt-2 pb-2 text-sm font-bold text-white shadow transition-colors duration-150 sm:pt-1 sm:pb-1">
                투표
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-12 gap-2 border-b-[2px] pt-3 pb-3">
            <div className="col-span-2">
              <Image
                alt={'짜장면'}
                src={'/static/images/sample.png'}
                className="object-contain"
                width={80}
                height={80}
              />
            </div>
            <div className="col-span-8 ">
              <div className="text-2xl leading-6 text-black">
                짜장면짜장면짜장면짜장면짜장면짜장면짜장면
              </div>
              <div className="text-sm leading-10 text-grayColor">투표 1명</div>
            </div>
            <Link href="/" className="col-span-2">
              <button className="w-full rounded-lg border-2 border-buttonBorderColor bg-mainColor pt-2 pb-2 text-sm font-bold text-white shadow transition-colors duration-150 sm:pt-1 sm:pb-1">
                투표
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-12 gap-2 border-0 pt-3 pb-3">
            <div className="col-span-2">
              <Image
                alt={'짜장면'}
                src={'/static/images/sample.png'}
                className="object-contain"
                width={80}
                height={80}
              />
            </div>
            <div className="col-span-8 ">
              <div className="text-2xl leading-6 text-black">
                짜장면짜장면짜장면짜장면짜장면짜장면짜장면
              </div>
              <div className="text-sm leading-10 text-grayColor">투표 1명</div>
            </div>
            <Link href="/" className="col-span-2">
              <button className="w-full rounded-lg border-2 border-buttonBorderColor bg-mainColor pt-2 pb-2 text-sm font-bold text-white shadow transition-colors duration-150 sm:pt-1 sm:pb-1">
                투표
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
