import React, { useState } from 'react';
import './App.css';
import { ImageForm } from './components/ImageForm';
import { Loading } from './components/Loading';
import { Preview } from './components/Preview';

function App() {
  const [images, setImages] = useState<string[]>([]);
  const onChangeImage = async (files: string[]) => {
    setImages(images);
  };
  return (
    <div className="App">
      <div className="wrapper">
        <ImageForm onChangeImages={onChangeImage}></ImageForm>
        <Loading></Loading>
        <Preview images={images}></Preview>
      </div>
    </div>
  );
}

export default App;
