import React from 'react'
import Hair from '../../img/hair.jpg'
import Nails from '../../img/nails.jpg'
import Makeup from '../../img/makeup.jpg'

function Pricing() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        <span className="relative inline-block">
          <svg
            viewBox="0 0 52 24"
            fill="currentColor"
            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
          >
            <defs>
              <pattern
                id="bc9273ce-29bb-4565-959b-714607d4d027"
                x="0"
                y="0"
                width=".135"
                height=".30"
              >
                <circle cx="1" cy="1" r=".7" />
              </pattern>
            </defs>
            <rect
              fill="url(#bc9273ce-29bb-4565-959b-714607d4d027)"
              width="52"
              height="24"
            />
          </svg>
          <span className="relative">Choose</span>
        </span>{' '}
        SlayWay. Beauty everyday.
      </h2>
      <p className="text-base text-gray-700 md:text-lg">
        For the most favourable prices in town, we glam you. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
    <div className="grid max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
      <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
        <div className="relative w-full h-48">
          <img
            src={Hair}
            className="object-cover w-full h-full rounded-t"
            alt="Plan"
          />
        </div>
        <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
          <div>
            <div className="text-lg font-semibold">Hair</div>
            <p className="text-sm text-gray-900">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, aliquam.
            </p>
            <div className="mt-1 mb-4 mr-1 text-4xl font-bold sm:text-5xl">
              Ksh. 2500
            </div>
          </div>
          {/* <a
            href="/"
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            More
          </a> */}
        </div>
      </div>
      <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
        <div className="relative w-full h-48">
          <img
            src={Nails}
            className="object-cover w-full h-full rounded-t"
            alt="Plan"
          />
        </div>
        <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
          <div>
            <div className="text-lg font-semibold">Nails</div>
            <p className="text-sm text-gray-900">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, eum.
            </p>
            <div className="mt-1 mb-4 mr-1 text-4xl font-bold sm:text-5xl">
              Ksh. 1500
            </div>
          </div>
          {/* <a
            href="/"
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            More
          </a> */}
        </div>
      </div>
      <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
        <div className="relative w-full h-48">
          <img
            src={Makeup}
            className="object-cover w-full h-full rounded-t"
            alt="Plan"
          />
        </div>
        <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
          <div>
            <div className="text-lg font-semibold">Make Up</div>
            <p className="text-sm text-gray-900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, saepe?
            </p>
            <div className="mt-1 mb-4 mr-1 text-4xl font-bold sm:text-5xl">
              Ksh. 2500
            </div>
          </div>
          {/* <a
            href="/"
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            More
          </a> */}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Pricing