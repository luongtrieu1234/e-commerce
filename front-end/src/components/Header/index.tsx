import { useState } from "react";
import { FaPhone } from "react-icons/fa";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  console.log(isMenuOpen);

  return (
    // PC
    <header className="bg-gray-900 text-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="size-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="/" className="text-sm/6 font-semibold text-white">
            Trang chủ
          </a>
          <a href="#" className="text-sm/6 font-semibold text-white">
            Sản phẩm
          </a>
          <a href="#" className="text-sm/6 font-semibold text-white">
            Về chúng tôi
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <p className="flex items-center text-sm/6">
            <FaPhone className="mr-2" color="blue" />
            &nbsp;0916412896
          </p>
        </div>
      </nav>

      {/* Mobile */}
      {isMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-10"></div>
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 text-white">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={toggleMenu}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-blue-500"
                  >
                    Trang chủ
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-blue-500"
                  >
                    Sản phẩm
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-blue-500"
                  >
                    Về chúng tôi
                  </a>
                </div>
                <div className="py-6 text-center flex justify-center">
                  <p className="flex items-center text-sm">
                    <FaPhone className="mr-2" color="blue" />
                    &nbsp;0916412896
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
