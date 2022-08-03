import React from 'react'

function Reviews({reviews}) {
  return (
    <div className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8" id='reviews'>
    <h2 className='text-center'>Reviews</h2>
  <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
    {reviews.map(review=>(
    <div className="flex border-solid border-gray-200" key={review.id}>
      <div className="pt-1 mr-6 text-center">
        <div className="px-2 pb-1 mb-1 border-b border-gray-400">
          <p className="text-sm text-blue-gray-700">Aug</p>
        </div>
        <div className="px-2">
          <p className="text-lg font-bold">{review.created_at.slice(8,10)}</p>
        </div>
      </div>
      <div>
        <div className="my-2">
          <h3
            className="inline-block text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            {review.service}
          </h3>
        </div>
        <p className="mb-5 text-gray-700">
          {review.review}
        </p>
        <div className="flex items-center">
          <a href="/" aria-label="Author" title="Author" className="mr-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl3_BxOiqAfyAg9W36uxgozhTTFAi7bTreCw&usqp=CAU?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="avatar"
              className="object-cover w-10 h-10 rounded-full shadow-sm"
            />
          </a>
          <div>
            <a
              href="/"
              aria-label="Author"
              title="Author"
              className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              {review.user.username}
            </a>
            <p className="text-sm font-medium leading-4 text-gray-600">
             Customer
            </p>
          </div>
        </div>
      </div>
    </div>
    ))}
    {/* <div className="flex border-solid border-gray-200">
      <div className="pt-1 mr-6 text-center">
        <div className="px-2 pb-1 mb-1 border-b border-gray-400">
          <p className="text-sm text-blue-gray-700">May</p>
        </div>
        <div className="px-2">
          <p className="text-lg font-bold">6</p>
        </div>
      </div>
      <div>
        <div className="mb-2">
          <a
            href="/"
            className="text-xs font-semibold tracking-wide uppercase transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            aria-label="Category"
            title="Food &amp; Snacks"
          >
            Lorem. &amp; Lorem.
          </a>
        </div>
        <div className="mb-2">
          <a
            href="/"
            aria-label="Article"
            className="inline-block text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            Lorem ipsum dolor sit amet.
          </a>
        </div>
        <p className="mb-5 text-gray-700">
          Sed ut perspiciatis unde omnis iste natus error sit sed quia
          consequuntur magni voluptatem doloremque.
        </p>
        <div className="flex items-center">
          <a href="/" aria-label="Author" title="Author" className="mr-3">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="avatar"
              className="object-cover w-10 h-10 rounded-full shadow-sm"
            />
          </a>
          <div>
            <a
              href="/"
              aria-label="Author"
              title="Author"
              className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Lorem, ipsum.
            </a>
            <p className="text-sm font-medium leading-4 text-gray-600">
              Author
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="flex border-solid border-gray-200">
      <div className="pt-1 mr-6 text-center">
        <div className="px-2 pb-1 mb-1 border-b border-gray-400">
          <p className="text-sm text-blue-gray-700">Feb</p>
        </div>
        <div className="px-2">
          <p className="text-lg font-bold">27</p>
        </div>
      </div>
      <div>
        <div className="mb-2">
          <a
            href="/"
            className="text-xs font-semibold tracking-wide uppercase transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            aria-label="Category"
            title="Out of this world"
          >
            Lorem, ipsum dolor.
          </a>
        </div>
        <div className="mb-2">
          <a
            href="/"
            aria-label="Article"
            className="inline-block text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            Lorem ipsum dolor sit.
          </a>
        </div>
        <p className="mb-5 text-gray-700">
          Sed ut perspiciatis unde omnis iste natus error sit sed quia
          consequuntur magni voluptatem doloremque.
        </p>
        <div className="flex items-center">
          <a href="/" aria-label="Author" title="Author" className="mr-3">
            <img
              src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt="avatar"
              className="object-cover w-10 h-10 rounded-full shadow-sm"
            />
          </a>
          <div>
            <a
              href="/"
              aria-label="Author"
              title="Author"
              className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Lorem, ipsum.
            </a>
            <p className="text-sm font-medium leading-4 text-gray-600">
              Author
            </p>
          </div>
        </div>
      </div>
    </div> */}
  </div>
</div>
  )
}

export default Reviews