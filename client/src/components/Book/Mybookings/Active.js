import React, { useEffect, useState } from "react";
import Reviews from "../Reviewspop";

function Active() {
  const [actives, setActives] = useState([])
  const [errors, setErrors] = useState([])
  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    fetch('/api/bookings')
    .then((r)=>r.json())
    .then(data=> {
      console.log(data)
      setActives(data)
      setLoading(false)
    })
  },[])

  function handleCancel(id){
    console.log(id);
    fetch(`/api/bookings/${id}`,{
      method: 'DELETE'
    }).then((r) => {
      console.log(r);
      console.log(id);
      if (r.ok) {
        r.json().then(()=>{
          const updatedActives = actives.filter((active)=>active.id !== id);
          setActives(updatedActives)
          console.log(actives);
        })
      }else{
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
            setShow(true);        
        });
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
  }

  return (
    <div>
      {loading?(
    <>
      <h2 className="text-black p-20 text-center">Loading ...</h2>
    </>
  ):<>
    {actives.length > 0?(
  <>
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
      </tbody>
    </table>
    {show && <Reviews />}
  </>):(
    <>
      <h2 className="text-black p-20 text-center">No Bookings Found</h2>
    </>
  )
}</>
}
  </div>
  );
}

export default Active;
