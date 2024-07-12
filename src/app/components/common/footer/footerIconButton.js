import React from 'react';
import './css/iconButton.css';
import { secondary } from '../../../../App';
export default function FooterIconButton({
  isSelected,
  imgSrc,
  height = '44px',
  width = '44px',
  padding = '8px',
  title,
  onClickFunc,
  styleProp
}) {
  return (
    <>
      <button
        style={{
          backgroundColor: isSelected ? secondary : 'none',
          borderRadius: '10px',
          border: '1px',
          height,
          width,
          padding,
          ...styleProp
        }}
        onClick={onClickFunc}
      >
        {title || <img src={imgSrc} />}
      </button>
    </>
  );
}
