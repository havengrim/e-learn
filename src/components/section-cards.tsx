import women from "@/assets/women.png"

export function SectionCards() {
  return (
    <div className="">
      <div className="px-6">
        <div className="mx-auto w-full">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-10 pb-12 rounded-3xl sm:px-12 md:pt-14 md:pb-16 lg:flex lg:gap-x-16 lg:px-20 lg:relative">
            {/* Background Glow SVG */}
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            >
              <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
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
                Learn at your own pace with expert-led modules designed to help you grow, succeed, and stay ahead in
                your career.
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
            {/* Right person image */}
            <div className="hidden xl:block lg:flex-shrink-0 lg:absolute lg:bottom-0 lg:right-18">
              <div className="relative">
                <img
                  alt="Professional person"
                  src={women || "/placeholder.svg"}
                  width={300}
                  height={400}
                  className="h-80 w-auto object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
