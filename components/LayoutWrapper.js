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
      <div className="relative flex h-screen min-h-screen flex-col">
        <header className="sticky top-0 flex items-center justify-between bg-bgColor  pt-4">
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
        <main className="flex flex-col bg-bgColor ">{children}</main>
        <bottom className="sticky bottom-0 w-full  bg-bgColor">
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
