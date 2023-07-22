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
          <div className="-mt-4 flex justify-between rounded-2xl border-2 border-borderColor bg-white p-2">
            <input
              type="text"
              onChange={(e) => {}}
              className="border-1 w-[90%] focus:border-current focus:ring-0 "
            />
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
    </>
  )
}
