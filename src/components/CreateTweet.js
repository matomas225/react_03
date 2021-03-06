import React from "react";
import { useState } from "react";
function CreateTweet({ tweet, tweets, setTweets, setTweet, setName, name }) {
  //functions
  const submitTweetHandler = (event) => {
    event.preventDefault();
    setTweets([...tweets, tweet]);
    setTweet("");
  };
  return (
    <div>
      <form className="flex flex-col " onSubmit={submitTweetHandler}>
        <label
          className="text-xl flex-1 text-white mt-10 block w-96 mx-auto rounded"
          htmlFor="name"
        >
          Name
        </label>
        <input
          onChange={(event) => setName(event.target.value)}
          className="flex-1 bg-purple-100 mt-2 block w-96 mx-auto rounded p-2"
          type="text"
          placeholder="Enter your name."
        />
        <label
          className="text-xl flex-1 text-white mt-2 block w-96 mx-auto rounded"
          htmlFor="name"
        >
          Tweet Text
        </label>
        <textarea
          value={tweet}
          onChange={(event) => setTweet(event.target.value)}
          className="flex-1 bg-purple-100 form-textarea mt-2 block w-96 mx-auto rounded p-2"
          rows="3"
          placeholder="Enter some long form content."
          name=""
          id=""
          cols="30"
          rows="3"
        ></textarea>
        <button className="transform hover:scale-110 w-40 mx-auto mt-5 bg-purple-500 text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150 ">
          Create Tweet
        </button>
      </form>
    </div>
  );
}

export default CreateTweet;
