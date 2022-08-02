import React, { useEffect, useState } from "react";
import BookItem from "./BookItem";

function Active() {
  const [actives, setActives] = useState([])
  const [errors, setErrors] = useState([])
  useEffect(()=>{
    fetch('/api/bookings')
    .then((r) => {
      if (r.ok) {
        r.json().then(data=> {
          console.log(data)
          setActives(data)
        })
      } else {
        r.json().then((err) => console.log(err));
      }
    });
  },[])

  function handleCancel(id){
    console.log(id);
    fetch(`/api/bookings/${id}`,{
      method: 'DELETE'
    }).then((r) => {
      if (!r.ok) {
      //   r.json().then((data) => {
      //     console.log(data);          
      // });
      // } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });

  }

  function handleDone(id){
    console.log(id);
    fetch(`/api/bookings/${id}`,{
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

  return (
    <table className="table-auto w-full">
      <tbody className="text-md divide-y divide-gray-100">
        {actives.map(active=>(active.status === true &&
              <tr className="hover:bg-trow hover:bg-opacity-20" key={active.id}>
              <td className="p-2 whitespace-nowrap">
                <div className="flex">
                  <div className="font-medium text-gray-800">
                    <div>{active.date}</div>
                    <div>{active.time}</div>
                  </div>
                </div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-lg text-center">{active.service}</div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-lg text-center">
                  <button className="bg-tred hover:bg-red-400 text-white font-bold py-2 px-2 rounded outline-none mt-5" onClick={()=>handleCancel(active.id)}>
                    CANCEL
                  </button>
                </div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-lg text-center">
                  <button className="bg-trow hover:bg-red-400 text-white font-bold py-2 px-2 rounded outline-none mt-5" onClick={()=>handleDone(active.id)}>
                    DONE
                  </button>
                </div>
              </td>
              </tr>
       ))}
        {/* <BookItem/> */}
      </tbody>
    </table>
  );
}

export default Active;
