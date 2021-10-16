import React from "react";
import { useState } from "react";
function Tweet({ name, tweets }) {
  return (
    <div>
      <div className="card bg-purple-100 flex flex-col flex-initial w-full md:w-80 rounded p-4 border-2 border-purple-400 md:m-5">
        <h1 className="text-xl text-purple-700 pb-3">Name: {name}</h1>
        <p className="text-xl pb-5">Message: {tweets}</p>
        <button className="w-full transform hover:scale-110 mr-2 mt-5 bg-purple-500 text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150  ">
          Like
        </button>
        <button className="w-full transform hover:scale-110 mt-4 bg-purple-500 text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150 ">
          Delete
        </button>
      </div>
    </div>
  );
}

export default Tweet;
