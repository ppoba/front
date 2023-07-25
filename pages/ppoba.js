import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import headerNavLinks from '@/data/headerNavLinks'
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
      <header className="flex items-center justify-between bg-bgColor pt-4">
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <Link
              href="#"
              aria-label="뒤로가기"
              className="text-xl font-bold text-mainColor sm:p-4"
            >
              뒤로가기
            </Link>
          </div>
        </Link>
        <div className="flex items-center text-base leading-5">
          <div className=" sm:block">
            {headerNavLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </header>
      <main className="flex flex-col gap-3">
        <div className="sticky top-0 z-10 flex flex-col bg-bgColor">
          <div className="flex justify-center">
            <Image alt={'삼콩이 뽀바줘'} src={'/static/images/logo.png'} width={186} height={90} />
          </div>
          <div className="-mt-6 rounded-2xl border-2 border-borderColor bg-white p-4 pt-6 text-center">
            <div className="text-2xl font-bold ">음료골라주세요음료골라주세요</div>
            <div className="mt-3 text-black ">
              참여 인원 :<span className="mx-1 font-bold">12</span>명
              <span className="mx-6 text-mainColor">|</span>
              남은 시간 :<span className="mx-1 font-bold">12</span>분
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div>항목 6개</div>
          <div className="rounded-2xl border border-dashed border-borderColor bg-bgCardColor/50 ">
            <div className="h-100 grid overflow-auto p-4 pr-4">
              <div className="grid grid-cols-12 gap-2 border-b-[2px] pb-3 pt-3">
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
                  <button className="w-full rounded-lg border-2 border-buttonBorderColor bg-mainColor pb-2 pt-2 text-sm font-bold text-white shadow transition-colors duration-150 sm:pb-1 sm:pt-1">
                    투표
                  </button>
                </Link>
              </div>
              <div className="grid grid-cols-12 gap-2 border-b-[2px] pb-3 pt-3">
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
                  <button className="w-full rounded-lg border-2 border-buttonBorderColor bg-mainColor pb-2 pt-2 text-sm font-bold text-white shadow transition-colors duration-150 sm:pb-1 sm:pt-1">
                    투표
                  </button>
                </Link>
              </div>
              <div className="grid grid-cols-12 gap-2 border-b-[2px] pb-3 pt-3">
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
                  <button className="w-full rounded-lg border-2 border-buttonBorderColor bg-mainColor pb-2 pt-2 text-sm font-bold text-white shadow transition-colors duration-150 sm:pb-1 sm:pt-1">
                    투표
                  </button>
                </Link>
              </div>
              <div className="grid grid-cols-12 gap-2 border-b-[2px] pb-3 pt-3">
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
                  <button className="w-full rounded-lg border-2 border-buttonBorderColor bg-mainColor pb-2 pt-2 text-sm font-bold text-white shadow transition-colors duration-150 sm:pb-1 sm:pt-1">
                    투표
                  </button>
                </Link>
              </div>
              <div className="grid grid-cols-12 gap-2 border-0 pb-3 pt-3">
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
                  <button className="w-full rounded-lg border-2 border-buttonBorderColor bg-mainColor pb-2 pt-2 text-sm font-bold text-white shadow transition-colors duration-150 sm:pb-1 sm:pt-1">
                    투표
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
