import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageList = () => {
  const [image, setImage] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      
        const response = await axios.get(
          'https://picsum.photos/v2/list?page=2&limit=100'
        );
        const imagesData = response.data;
        setImage(imagesData);
        setIsLoading(false);
    
    };
    fetchImages();
  }, []);

  return (
    <>
    <h1>Images</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {image.map((image) => (
            <li key={image.key}>
              <strong>Id:</strong> {image.id} <br />
              <strong>Author:</strong> {image.author} <br />
              <strong>Width:</strong> {image.width} <br />
              <strong>Height:</strong> {image.height} <br />
              <strong>Url:</strong> {image.url } <br />
              <strong>Download:</strong> {image.download_url }
              </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ImageList;