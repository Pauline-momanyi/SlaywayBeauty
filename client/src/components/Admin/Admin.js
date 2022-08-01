import React from "react";
import Trow from "./Trow";
import './Admin.css'

function Admin() {
  return (
  
<section className="antialiased text-gray-600 h-screen px-4">
        {/* <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200 bgimage"> */}
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
                            <Trow/>
                            <Trow/>
                            <Trow/>
                            <Trow/>
                            <Trow/>
                        </tbody>                        
                    </table>
                </div>
            </div>
        {/* </div> */}
</section>
  );
}

export default Admin;
