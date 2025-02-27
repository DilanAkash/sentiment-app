import React, { useState } from "react";

function App() {
  const [tweet, setTweet] = useState("");
  const [sentiment, setSentiment] = useState("");

  const handlePredict = async () => {
    const response = await fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tweet_text: tweet }),
    });

    const data = await response.json();
    setSentiment(data.sentiment);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Tweet Sentiment Predictor</h2>
      <input
        type="text"
        placeholder="Enter tweet..."
        value={tweet}
        onChange={(e) => setTweet(e.target.value)}
        style={{ padding: "10px", width: "300px" }}
      />
      <br />
      <button onClick={handlePredict} style={{ marginTop: "10px", padding: "10px 20px", background: "green", color: "white" }}>
        Predict Sentiment
      </button>
      <h3 style={{ marginTop: "20px" }}>{sentiment}</h3>
    </div>
  );
}

export default App;
