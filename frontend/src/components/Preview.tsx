import React from 'react';

type Props = {
  images: string[];
};
export const Preview = (props: Props) => {
  return (
    <div className="preview">
      {props.images.map((v) => (
        <img src={v} alt="" />
      ))}
    </div>
  );
};
