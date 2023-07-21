import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
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

const AirbnbSlider = styled(Slider)(({ theme }) => ({
  color: '#799640',
  height: 12,
  padding: '13px 0',
  '& .MuiSlider-markLabel': {
    fontFamily: 'UhBeeQUEENJ',
    fontSize: '14',
    fontWeight: 700,
  },
  '& .MuiSlider-valueLabel': {
    background: '#000000',
    color: '#ffffff',
    borderRadius: 10,
    fontFamily: 'UhBeeQUEENJ',
    lineHeight: '14px',
    fontSize: '14',
    padding: '2px 10px 5px 10px',
  },
  '& .MuiSlider-thumb': {
    height: 27,
    width: 27,
    backgroundColor: '#799640',
    boxShadow: '0',
    '&:hover': {
      boxShadow: '0 0 0 8px rgba(121, 150, 64, 0.16)',
    },
  },
  '& .MuiSlider-track': {
    height: 12,
  },
  '& .MuiSlider-rail': {
    border: '1px solid #799640',
    height: 12,
    color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#ffffff',
    opacity: theme.palette.mode === 'dark' ? undefined : 1,
  },
}))

function AirbnbThumbComponent(props) {
  const { children, ...other } = props
  return <SliderThumb {...other}>{children}</SliderThumb>
}

function valueLabelFormat(value) {
  return `앞으로 ${value}분!`
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <main className="flex flex-col gap-3">
        <div className="mt-5 rounded-2xl border border-dashed border-borderColor bg-bgCardColor/50  p-10">
          <h1 className="leading-20 text-2xl font-extrabold tracking-tight  dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-3xl md:leading-14">
            미션을 적어주세요
          </h1>
          <div className="relative mt-4">
            <input
              aria-label="Search articles"
              type="text"
              onChange={(e) => {}}
              className="block w-full rounded-xl border-2 border-borderColor bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
            />
          </div>
          <h1 className=" leading-20 mt-10 text-2xl font-extrabold tracking-tight  dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-3xl md:leading-14">
            마감 시간 설정
          </h1>
          <AirbnbSlider
            className=" mt-2"
            valueLabelDisplay="auto"
            slots={{ thumb: AirbnbThumbComponent }}
            defaultValue={20}
            marks={marks}
            valueLabelFormat={valueLabelFormat}
          />
        </div>
      </main>
    </>
  )
}
