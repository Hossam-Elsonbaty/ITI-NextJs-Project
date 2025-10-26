'use client'
import Link from "next/link";
import React, { Suspense, useEffect, useState } from "react";
import Loader from "../components/Loader";
import AddBookDialog from "../components/Dialog";
import { GoTrash } from "react-icons/go";
const Page = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [data, setData] = useState([])
  const handleGetData = async()=>{
    // const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const res = await fetch("http://localhost:3000/users-data");
    const data = await res.json();
    setData(data)
    console.log(data);
  }
  const handleDeleteUser = async(id)=> {
    fetch(`http://localhost:3000/users-data`,{
      method:"DELETE",
      body:JSON.stringify({id})
    })
  }
  useEffect(()=>{
    handleGetData()
  },[])
  return (
    <main className="flex items-center justify-center flex-wrap gap-3 p-5">
      <AddBookDialog open={isOpen} onOpenChange={()=>setIsOpen(false)}/>
      <button className="fixed bottom-32 right-16 p-3 bg-cyan-900 rounded-xl text-white" onClick={()=>setIsOpen(true)}>Add New User</button>
      <Suspense fallback={<Loader />}>
        {data.map((item) => (
          <div
            key={item.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.name}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so
                far, in reverse chronological order.
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.email}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.phone}
              </p>
              <Link
                href={`users/${item.id}`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
            <button className="p-3 cursor-pointer " onClick={()=>handleDeleteUser(item.id)}>
              <GoTrash className="text-red-600 text-2xl"/>
            </button>
          </div>
        ))}      
      </Suspense>
    </main>
  );
}

export default Page;
