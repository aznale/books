import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://picsum.photos/v2/list?page=2&limit=100')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>
          <h2>{item.author}</h2>
          <p>Width: {item.width}</p>
          <p>Height: {item.height}</p>
          <p>Url: {item.url}</p>
          <a href={item.download_url} target="_blank"><img src={item.download_url} alt={item.author} style={{ width: 400 }} /></a>
        </div>
      ))}
    </div>
  );
}

export default MyComponent;
