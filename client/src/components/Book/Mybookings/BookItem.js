import React from 'react'

function BookItem({active, setErrors, setShow, handleRemove, handleSoDone}) {
  const {id} = active;

  function handleCancel(){
    console.log(id);
    fetch(`/api/bookings/${id}`,{
      method: 'DELETE'
    })
    // .then((r) => r.json())
    .then(()=>{
          handleRemove(id)
          console.log(`${active} ${id}`);
        })
    }

  

  

  function handleDone(){
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
            handleSoDone(id)      
        });
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
  }
  return (
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
        <button className="bg-tred hover:bg-red-400 text-white font-bold py-2 px-2 rounded outline-none mt-5" onClick={handleCancel}>
          CANCEL
        </button>
      </div>
    </td>
    <td className="p-2 whitespace-nowrap">
      <div className="text-lg text-center">
        <button className="bg-trow hover:bg-red-400 text-white font-bold py-2 px-2 rounded outline-none mt-5" onClick={handleDone}>
          DONE
        </button>
      </div>
    </td>
    </tr>
  )
}

export default BookItem