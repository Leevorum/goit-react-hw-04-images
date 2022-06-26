import { useState, useEffect } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import getImages from 'service/api-servise';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export function App() {
  const [images, setImages] = useState([]);
  const [input, setInput] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    if (input === '') {
      return;
    }
    setIsloading(true);
    const fetchData = async () => {
      const imagesResponse = await getImages(input, page);
      // Throw an error if the search query is not correct
      if (imagesResponse.data.hits.length === 0) {
        alert(
          'Sorry, there are no images matching your search query. Please try again.',
        );
      }

      setImages(prevState => [...prevState, ...imagesResponse.data.hits]);
      setIsloading(false);
    };
    fetchData();
  }, [input, page]);

  //Setting input search and make API request
  const handleInput = data => {
    setInput(data);
    setImages([]);
    setPage(1);
  };

  //If click 'Load more' button, change page in state for new request
  const handleClickLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={handleInput} />
      {images.length > 0 && (
        <>
          <ImageGallery images={images} />
          {!isLoading && <Button onClick={handleClickLoadMore} />}
          {isLoading && <Loader />}
        </>
      )}
    </div>
  );
}
