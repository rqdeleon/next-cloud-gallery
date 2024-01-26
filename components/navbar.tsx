import Image from "next/image"

export default function Navbar(){
  return(
    <div className="bg-slate-100 fixed z-50 w-full px-5">
      <div className="relative -mx-4 flex items-center justify-between">
        <div className="w-60 max-w-full px-4">
          <a href="https://mybranches.net" className="block w-full py-5">
            <Image
              src="/logo.png"
              alt="logo"
              width={50}
              height={50}    
            />
            <img
              src="assets/images/logo/logo-white.svg"
              alt="logo"
              className="hidden dark:block"
            />
          </a>
        </div>
        <div className="w-full items-center justify-between px-4 hidden md:flex">
          <div>
            <nav
              className="absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent"
            >
              <ul className="block lg:flex">
                <li>
                  <a
                    href="#"
                    className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-12 lg:inline-flex"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-12 lg:inline-flex"
                  >
                    Payment
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-12 lg:inline-flex"
                  >
                    Features
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
            <a
              href="https://mybranches.net"
              className="rounded-md bg-primary px-7 py-3 text-base font-medium text-white hover:bg-primary/90"
            >
              Make This Landing Page Yours
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}