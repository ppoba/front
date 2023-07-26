import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Image from '@/components/Image'
import headerNavLinks from '@/data/headerNavLinks'
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
    <div className="relative flex h-screen min-h-screen flex-col justify-between">
      <div className="flex flex-col bg-bgColor ">
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
          <div className="sticky top-0 z-10 flex flex-col bg-bgColor text-base">
            <div className="flex justify-center pl-10 pr-10">
              <Image
                alt={'삼콩이 뽀바줘'}
                src={'/static/images/logo.png'}
                width={186}
                height={90}
              />
            </div>
            <div className="-mt-6 rounded-2xl border-2 border-borderColor bg-white p-4 pt-6 text-center">
              <div className="text-2xl font-bold ">음료골라주세요</div>
              <div className="mt-3 text-black ">
                참여 인원 :<span className="mx-1 font-bold">12</span>명
                <span className="mx-6 text-mainColor">|</span>
                종료된 투표입니다.
              </div>
            </div>
          </div>
          <div className=" flex flex-col  gap-2">
            <div>항목 6개</div>
            <div className="mt-2 grid rounded-2xl border border-dashed border-borderColor bg-bgCardColor/50 px-4 py-2">
              <div className="grid grid-cols-12 gap-2 border-b-[2px] pb-3 pt-3">
                <div className="col-span-2">
                  <div className=" w-100 center leading-0 rounded-lg bg-rank1Color py-[2px] text-center text-white">
                    1위
                  </div>
                </div>
                <div className="col-span-8 ">
                  <div className="text-2xl leading-6 text-black">
                    짜장면짜장면짜장면짜장면짜장면짜장면짜장면
                  </div>
                  <div className="text-sm leading-10 text-grayColor">투표 1명</div>
                </div>
                <div className="col-span-2">
                  <Image
                    alt={'짜장면'}
                    src={'/static/images/sample.png'}
                    className="object-contain"
                    width={80}
                    height={80}
                  />
                </div>
              </div>
              <div className="grid grid-cols-12 gap-2 border-b-[2px] pb-3 pt-3">
                <div className="col-span-2">
                  <div className=" w-100 center leading-0 rounded-lg border border-buttonColor bg-white py-[2px] text-center text-black">
                    2위
                  </div>
                </div>
                <div className="col-span-8 ">
                  <div className="text-2xl leading-6 text-black">
                    짜장면짜장면짜장면짜장면짜장면짜장면짜장면
                  </div>
                  <div className="text-sm leading-10 text-grayColor">투표 1명</div>
                </div>
                <div className="col-span-2">
                  <Image
                    alt={'짜장면'}
                    src={'/static/images/sample.png'}
                    className="object-contain"
                    width={80}
                    height={80}
                  />
                </div>
              </div>
              <div className="grid grid-cols-12 gap-2  pb-3 pt-3">
                <div className="col-span-2">
                  <div className=" w-100 center leading-0 rounded-lg border border-buttonColor bg-white py-[2px] text-center text-black">
                    3위
                  </div>
                </div>
                <div className="col-span-8 ">
                  <div className="text-2xl leading-6 text-black">
                    짜장면짜장면짜장면짜장면짜장면짜장면짜장면
                  </div>
                  <div className="text-sm leading-10 text-grayColor">투표 1명</div>
                </div>
                <div className="col-span-2">
                  <Image
                    alt={'짜장면'}
                    src={'/static/images/sample.png'}
                    className="object-contain"
                    width={80}
                    height={80}
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
