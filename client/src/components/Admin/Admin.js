import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'

import "./Admin.css";
import Adminitem from "./Adminitem";

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


  function handleAllBookings(updatedBook){
    console.log(updatedBook);
    const updatedBookings = allbookings.map((booking) => {
                  if (booking.id === updatedBook.id) {
                    return updatedBook;
                  } else {
                    return booking;
                  }
                });
                setAllbookings(updatedBookings);
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
                <Adminitem booking={booking} onUpdateBooking={handleAllBookings}/>
                ))}
                </tbody>
              </table>
        </div>
      </div>
    </section>
  );
}

export default Admin;
