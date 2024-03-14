import './App.css';
import SearchBar from './SearchBar/SearchBar';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import Loader from './Loader/Loader';
import ImageModal from './ImageModal/ImageModal';
import ImageGallery from './ImageGallery/ImageGallery';
import {LoadImages} from './api.js';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import { useState, useEffect, useMemo  } from 'react';


function App() {

  const [images, setImages] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});


  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        if(page === 1) {
          const fetchedImages = await LoadImages(query);
          setImages(fetchedImages.results);
          setTotalPage(fetchedImages.total_pages);
          setError(null);
        } else {
          const fetchedImages = await LoadImages(query, page);
          setImages((prevState) => [...prevState, ...fetchedImages.results]);

        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }

    }

    if(query !== "") {
      fetchData();
    }
  }, [query, page]);

  const handleSearch = (query) => {
    setQuery(query);
    setPage(1);
  };

  const handleAddImage = () => {
    setPage((prevState) => prevState +1);

  }

  const handleOpenModal = (data) => {
    const {urls, alt_description, user} = data;
    setModalData({image: urls.full, description: alt_description, name: user.name});
    setIsModalOpen(true);

  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }

  const memoModalData = useMemo(() => ({
    name: modalData.name || "",
    image: modalData.image || "",
    description: modalData.description || "",
  }), [modalData]);

  

  return (
      <>
      <SearchBar onSubmit={handleSearch}/>
      {Loading ? (<Loader/>) : (<ImageGallery images={images} onClick={handleOpenModal}/>)}
      { totalPage > page && <LoadMoreBtn onClick={handleAddImage}/>}
      {error && <ErrorMessage message={error.message}/>}
      <ImageModal data={memoModalData} isOpen={isModalOpen} onRequestClose={handleCloseModal}/>
      </> 
    
  )
}

export default App
