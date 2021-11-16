import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch(process.env.REACT_APP_BASE_URL + "api/WeatherForecast")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h1>Weather forecast:</h1>
        <dl>
          {items.map(item => (
            <li key={item.date}>
              {new Date(item.date).toLocaleString()}: {item.temperatureC}C ({item.summary})
            </li>
          ))}
        </dl>

      </div>
    );
  }
}

export default App;
