import React, {useEffect, useState} from 'react'


function Past() {
  const [pasts, setPasts] = useState([])
  useEffect(()=>{
    fetch('/api/bookings')
    .then((r) => {
      if (r.ok) {
        r.json().then(data=> {
          console.log(data)
          setPasts(data)
        })
      } else {
        r.json().then((err) => console.log(err));
      }
    });
  },[])
  return (
    
      <table className="table-auto w-full">
      <tbody className="text-md divide-y divide-gray-100">
        {pasts.map(past=>(past.status === false &&
              <tr className="hover:bg-trow hover:bg-opacity-20" key={past.id}>
              <td className="p-2 whitespace-nowrap">
                <div className="flex">
                  <div className="font-medium text-gray-800">
                    <div>{past.date}</div>
                    <div>{past.time}</div>
                  </div>
                </div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-lg text-center text-black">{past.service}</div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-lg text-center text-black">
                  Completed
                </div>
              </td>
            </tr>
        ))}
      </tbody>
    </table>
   
   
  // {past ? "Loading..." : "Login"}
  )
}

export default Past