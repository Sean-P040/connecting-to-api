import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [fetchCount, setFetchCount] = useState(1);
  const [currentFetch, setCurrentFetch] = useState({
    userId: "",
    id: "",
    title: "",
    completed: "",
  });

  const HandleFetchApi = async () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${fetchCount}`)
      .then((response) => {
        const { userId, id, title, completed } = response.data;
        setCurrentFetch({
          ...currentFetch,
          ...{ userId, id, title, completed },
        });
        setFetchCount(fetchCount + 1);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="App">
      <h1>Testing API Fetch from Dummy Api</h1>
      <button onClick={HandleFetchApi}>
        Click to fetch record #{fetchCount}
      </button>
      <h2>user id: {currentFetch.userId}</h2>
      <h2>id: {currentFetch.id}</h2>
      <h2>title: {currentFetch.title}</h2>
      <h2>completed: {currentFetch.completed.toString()}</h2>
      <br />

      <h5>from: https://jsonplaceholder.typicode.com/</h5>
    </div>
  );
}

export default App;
