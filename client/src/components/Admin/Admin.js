import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import {FaCalendar} from 'react-icons/fa'
import "./Admin.css";

function Admin({user}) {
  const [allbookings, setAllbookings] = useState([]);
  const [err, setErrors] = useState([]);
  useEffect(() => {
    // fetch all bookings
    fetch("/api/admins").then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          console.log(data);
          setAllbookings(data);
        });
      }
    });
  }, []);

  function handleMissed(id){
    console.log(id);
    fetch(`/api/admins/${id}`,{
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
        },
     }).then((r) => {
        if (r.ok) {
          r.json().then((data) => {
            console.log(data);          
        });
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
  }

  let navigate = useNavigate()

  console.log(user);
  useEffect(()=>{
    if(user == null){
      navigate('/auth')
    }
  }, [user])

  return (
    <section className="antialiased text-gray-600 px-4">
      <header className="px-5 py-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-800">Clients</h2>
      </header>
      <div className="p-3">
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Date</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Phone</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Service</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Action</div>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100">
              {allbookings.map((booking) => (
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
                        className={`bg-tred hover:bg-red-400 text-white font-bold py-2 px-2 rounded outline-none mt-5 ${!booking.status ? "disabled cursor-not-allowed opacity-25" : ""} `} onClick={()=>handleMissed(booking.id)}
                      >
                        MISSED
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Admin;
