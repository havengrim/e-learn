import { TbInnerShadowTop } from "react-icons/tb"


const Footer = () => {
  return (
      <footer className="flex justify-center px-4 text-gray-50 bg-gray-800 dark:text-white dark:bg-gray-900">
        <div className="container px-6 py-6">
            <h1 className="text-lg font-bold text-center lg:text-2xl">
            Join 31,000+ others and never miss <br /> out on new tips, tutorials, and more.
            </h1>

            <div className="flex flex-col justify-center mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
            <input
                id="email"
                type="text"
                className="px-4 py-2 text-gray-800 bg-gray-50 border  rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                placeholder="Email Address"
            />

            <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 bg-gray-700 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                Subscribe
            </button>
            </div>

            <hr className="h-px bg-gray-700 border-none my-7" />

            <div className="flex flex-col items-center justify-between md:flex-row">
                <a href="#" className="flex items-center gap-2">
                    <TbInnerShadowTop className="w-5 h-5" aria-hidden="true" />
                    <span className="text-base font-semibold">Acme Inc.</span>
                </a>
            <div className="flex mt-4 md:m-0">
                <div className="-mx-4">
                <a
                    href="#"
                    className="px-4 text-sm text-gray-50 transition-colors duration-300 hover:text-blue-400 hover:underline"
                >
                    About
                </a>
                <a
                    href="#"
                    className="px-4 text-sm text-gray-50 transition-colors duration-300 hover:text-blue-400 hover:underline"
                >
                    Blog
                </a>
                <a
                    href="#"
                    className="px-4 text-sm text-gray-50 transition-colors duration-300 hover:text-blue-400 hover:underline"
                >
                    News
                </a>
                <a
                    href="#"
                    className="px-4 text-sm text-gray-50 transition-colors duration-300 hover:text-blue-400 hover:underline"
                >
                    Contact
                </a>
                </div>
            </div>
            </div>
        </div>
        </footer>
  )
}

export default Footer
