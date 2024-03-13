import './App.css';
import SearchBar from './SearchBar/SearchBar';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';import Loader from './Loader/Loader';
import ImageModal from './ImageModal/ImageModal';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import {fetchImages} from './api';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import { useState } from 'react';


function App() {

  return (
      <>
      <SearchBar/>
      <Loader/>
      <ImageGallery/>
      <LoadMoreBtn/>
      <ErrorMessage/>
      <ImageModal/>
      </>
    
  )
}

export default App
