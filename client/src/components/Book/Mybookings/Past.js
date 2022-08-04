import React, {useEffect, useState} from 'react'


function Past() {
  const [pasts, setPasts] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    fetch('/api/pasts')
    .then((r) => {
      if (r.ok) {
        r.json().then(data=> {
          // console.log(data)
          setPasts(data)
          setLoading(false)
        })
      } else {
        r.json().then((err) => console.log(err));
      }
    });
  },[])
  return (
    <div>
            {loading?(
    <>
      <h2 className="text-black p-20 text-center">Loading ...</h2>
    </>
  ):<>
      {pasts.length > 0?(
    
      <table className="table-auto w-full md:w-96 mx-auto">
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
    </table>):(
      <>
        <h2 className="text-black p-20 text-center">No Bookings Found</h2>
      </>
    )
        
}
</>
}
  
  </div>
  )
}

export default Past