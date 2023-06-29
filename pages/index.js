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

const AirbnbSlider = styled(Slider)(({ theme }) => ({
  color: '#3a8589',
  height: 3,
  padding: '13px 0',
  '& .MuiSlider-thumb': {
    height: 27,
    width: 27,
    backgroundColor: '#fff',
    border: '1px solid currentColor',
    '&:hover': {
      boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
    },
    '& .airbnb-bar': {
      height: 9,
      width: 1,
      backgroundColor: 'currentColor',
      marginLeft: 1,
      marginRight: 1,
    },
  },
  '& .MuiSlider-track': {
    height: 3,
  },
  '& .MuiSlider-rail': {
    color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#d8d8d8',
    opacity: theme.palette.mode === 'dark' ? undefined : 1,
    height: 3,
  },
}))

function AirbnbThumbComponent(props) {
  const { children, ...other } = props
  return (
    <SliderThumb {...other}>
      {children}
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
    </SliderThumb>
  )
}

function ValueLabelComponent(props) {
  const { children, value } = props

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  )
}
export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="rounded-2xl border border-dashed border-borderColor bg-bgCardColor/50  p-5">
        <h1 className="leading-20 text-2xl font-extrabold tracking-tight  dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-3xl md:leading-14">
          미션을 적어주세요
        </h1>
        <div className="relative mt-4">
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => {}}
            placeholder="방 이름을 적어주세요"
            className="block w-full rounded-xl border-2 border-borderColor bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
          />
        </div>
        <h1 className=" leading-20 mt-8 text-2xl font-extrabold tracking-tight  dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-3xl md:leading-14">
          마감 시간 설정
        </h1>
        <AirbnbSlider
          slots={{ thumb: AirbnbThumbComponent }}
          getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
          defaultValue={[20, 40]}
        />
        <Slider
          valueLabelDisplay="auto"
          slots={{
            valueLabel: ValueLabelComponent,
          }}
          aria-label="custom thumb label"
          defaultValue={20}
        />
      </div>
    </>
  )
}
