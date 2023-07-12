import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="relative flex h-screen min-h-screen flex-col">
        <header className="sticky top-[0vh] flex items-center justify-between bg-bgColor ">
          <div>
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
          </div>
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
            {/* <ThemeSwitch /> */}
            <MobileNav />
          </div>
        </header>
        <main className="  max-h-[calc(100vh_-_7rem)] overflow-auto  pr-4">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
