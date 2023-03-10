import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { MdDelete } from "react-icons/md";
import AuthContext from "../context/AuthContext";


const Points = () => {
  
  let { user,baseurl  } = useContext(AuthContext)
  let [data, setData] = useState([])
  const token = JSON.parse(localStorage.getItem("authToken"))

  console.log("hhhhhhhhhhhhhhhhhhhhhhhhjjjjjjjjjjjjjjjffffffffffffffffff")
  const getData = () => {
    axios.get(baseurl+"accounts/profile",
        {
            headers: {
                Authorization: `Bearer ${token.access}`,
                "content-type": "application/json"
            }

        }
    ).then((response) => {
        console.log("ddddddddddddddddddddddddddddddddddddddddddddddddddddddd", response);
        const { data } = response
        setData(data[0])
        console.log("fffffffffffffffffffffffffffffffffffffffffff", data[0]);
    })
}
useEffect(() => {
    getData()
}, []);

  return (
   <>

      <div className="relative py-16 my-10 mr-4 bg-gradient-to-br from-sky-50 to-gray-200">
        <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
          <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
            <div className="rounded-xl bg-white shadow-xl">
              <div className="p-6 sm:p-16">
                <div className="space-y-4">

                  <h2 className="mb-8 text-2xl text-cyan-900 font-bold">MY POINTS</h2>
                </div>
                <div className="mt-16 grid space-y-4">
                  <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                    hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                    <div className="relative flex items-center space-x-4 justify-center">
                      <a href="">
                        <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">{data.my_points}</span>
                      </a>
                    </div>
                  </button>



                </div>
              </div>
            </div>
          </div>
        </div>
        </div>


      </>
      )
}

      export default Points