import "./App.css";
import { useState } from "react";
import "./index.css";
import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";

function App() {
  //states
  const [name, setName] = useState("Matas");
  const [tweet, setTweet] = useState();

  const [tweets, setTweets] = useState([]);
  //function
  return (
    <div className="App">
      <h1 className="hover:text-purple-400 duration-200 cursor-pointer text-center text-5xl text-bold font-bold text-white py-5">
        Matteo Tweets
      </h1>
      <div className="container mx-auto ">
        <CreateTweet
          name={name}
          setName={setName}
          tweet={tweet}
          setTweet={setTweet}
          tweets={tweets}
          setTweets={setTweets}
        />
        <TweetList tweets={tweets} name={name} />
      </div>
    </div>
  );
}
export default App;
