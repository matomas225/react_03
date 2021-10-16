import React from "react";
import Tweet from "./Tweet";

function TweetList() {
  return (
    <div className="tweet-list flex flex-col md:flex-row flex-wrap justify-start mx-auto mt-10">
      <Tweet />
      <Tweet />
      <Tweet />
    </div>
  );
}

export default TweetList;
