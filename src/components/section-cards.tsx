export function SectionCards() {
  return (
    <div className="">
      <div className="px-6">
        <div className="mx-auto w-full">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-10 pb-12 sm:rounded-3xl sm:px-12 md:pt-14 md:pb-16 lg:flex lg:gap-x-16 lg:px-20">
            {/* Background Glow SVG */}
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            >
              <circle
                r={512}
                cx={512}
                cy={512}
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>

            {/* Left text */}
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:text-left flex flex-col justify-center">
              <h2 className="text-2xl font-semibold tracking-tight text-balance text-white sm:text-3xl">
                Sharpen Your Skills With Professional Online Courses
              </h2>
              <p className="mt-4 text-base text-pretty text-gray-300">
                Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.
              </p>
              <div className="mt-8 flex items-center justify-center gap-x-4 lg:justify-start">
                <a
                  href="#"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Get started
                </a>
                <a href="#" className="text-sm font-semibold text-white hover:text-gray-100">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            {/* Right image */}
            <div className="relative mt-10 h-64 lg:mt-4">
              <img
                alt="App screenshot"
                src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
                width={1824}
                height={1080}
                className="absolute top-0 left-0 w-228 max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
