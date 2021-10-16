import React from "react";
import Tweet from "./Tweet";
import { useState } from "react";
function TweetList({ name, tweets }) {
  return (
    <div className="tweet-list flex flex-col md:flex-row flex-wrap justify-start mx-auto mt-10">
      {tweets.map((tweet) => (
        <Tweet name={name} tweets={tweet} />
      ))}
    </div>
  );
}

export default TweetList;
