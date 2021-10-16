import "./App.css";
import { useState } from "react";
import "./index.css";
import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <h1 className="hover:text-purple-400 duration-200 cursor-pointer text-center text-5xl text-bold font-bold text-white bg-gray-700 py-5">
        Matteo Tweets
      </h1>
      <div className="container mx-auto py-2rem">
        <CreateTweet />
        <TweetList />
        <Footer />
      </div>
    </div>
  );
}
export default App;
