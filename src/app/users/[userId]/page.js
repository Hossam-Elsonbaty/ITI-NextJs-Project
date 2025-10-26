import React from "react";
import { notFound } from "next/navigation";

const UserDetails = async ({ params }) => {
  const { userId } = await params;
  let item;
  try{
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    if(!res.ok){
      return notFound()
    }
    item = await res.json();
  }
  catch(err){
    console.log(err);
    return notFound()
  }  
  return (
    <main className="flex items-center p-5">
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
            {item.phone}
          </p>
        </div>
      </div>
    </main>
  );
};

export default UserDetails;
