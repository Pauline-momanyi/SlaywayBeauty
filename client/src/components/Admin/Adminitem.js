import React, { useState } from 'react'
import {FaCalendar} from 'react-icons/fa'

function Adminitem({booking, onUpdateBooking}) {
    const {id} = booking
    const [disable, setDisable] = useState(true)
    function handleMissed(){
        console.log(id);
        setDisable(false)
        fetch(`/api/admins/${id}`,{
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
         }).then((r) => {
            r.json()
          })
          .then((updatedBook)=>{
            console.log(updatedBook);
            console.log(booking);
            onUpdateBooking(booking)
        })
         
      }

  return (
                //  <Trow booking = {booking} key={booking.id}/>
                <tr className={`hover:bg-trow hover:bg-opacity-20 ${!booking.status ? "line-through" : ""}`} key={booking.id}>
                  <td className="p-2 whitespace-nowrap">
                    <div className="flex">
                      <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                        <FaCalendar />
                      </div>
                      <div className="font-medium text-gray-800">
                        <div>{booking.date}</div>
                        <div>{booking.time}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap ">
                    <div className="text-left">{booking.user.username}</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left font-medium">
                      {booking.user.phone}
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-lg text-center">{booking.service}</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-lg text-center">
                      <button
                        className={`bg-tred hover:bg-red-400 text-white font-bold py-2 px-2 rounded outline-none mt-5 ${!booking.status ? "disabled cursor-not-allowed opacity-25" : ""} `} onClick={handleMissed}
                      >
                        {!booking.status? "DONE":"MISSED"}
                      </button>
                    </div>
                  </td>
                </tr>
  )
}

export default Adminitem