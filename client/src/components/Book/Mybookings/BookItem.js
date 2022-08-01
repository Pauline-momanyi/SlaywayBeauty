import React from 'react'

function BookItem() {
  return (
    <tr className="hover:bg-trow hover:bg-opacity-20">
    <td className="p-2 whitespace-nowrap">
      <div className="flex">
        {/* <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><FaCalendar/></div> */}
        <div className="font-medium text-gray-800">
          <div>Jul 30</div>
          <div>11:00 am</div>
        </div>
      </div>
    </td>
    <td className="p-2 whitespace-nowrap">
      <div className="text-lg text-center">Hair</div>
    </td>
    <td className="p-2 whitespace-nowrap">
      <div className="text-lg text-center">
        <button className="bg-tred hover:bg-red-400 text-white font-bold py-2 px-2 rounded outline-none mt-5">
          CANCEL
        </button>
      </div>
    </td>
  </tr>
  )
}

export default BookItem