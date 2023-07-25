import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
// import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
// import Footer from './Footer'
// import MobileNav from './MobileNav'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="relative flex h-screen min-h-screen flex-col justify-between">
        <main className="flex flex-col bg-bgColor ">{children}</main>
        <bottom className="sticky bottom-0 z-50 w-full bg-bgColor">
          <div className="mb-3 flex flex-col items-center">
            <Link href="/" className=" mt-2 w-full  ">
              <button className="text-md inline w-full rounded-2xl border border-transparent bg-buttonColor px-4 py-2 font-bold leading-8 text-white shadow transition-colors duration-150">
                방만들기
              </button>
            </Link>
          </div>
        </bottom>
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
