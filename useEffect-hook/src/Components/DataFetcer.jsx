import React, { useState, useEffect } from 'react';

const DataFetcer = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {
        loading ? (
          <h2>Data is fetching, please wait...</h2>
        ) : (
          <div>
            <h3>Todo Title: {data.title}</h3>
            <p>Completed: {data.completed ? 'Yes' : 'No'}</p>
          </div>
        )
      }
    </div>
  );
};

export default DataFetcer;
