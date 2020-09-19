import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

type Props = {
  onChangeImages: (images: string[]) => void;
};

export const ImageForm = (props: Props) => {
  const onDrop = useCallback(async (acceptedFiles) => {
    const images = await Promise.all<string>(
      acceptedFiles.map(async (file: File) => {
        await postImage(file);
      }),
    );
    // props.onChangeImages(images);
  }, []);

  const postImage = async (file: Blob) => {
    const param = new FormData();
    param.append('photos', file);
    await axios.post('http://localhost:3000/photos/upload', param, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const getFileAsDataURL = (file: Blob): Promise<string> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          resolve(reader.result);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <div className="image-form" {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop files here</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
};
