import React from 'react';
import css from './AdvertItem.module.css'

const AdvertItem = ({ advert }) => {
  return (
    <div className={css.container}>
      <h2>{advert.title}</h2>
      <p>Description: {advert.desc}</p>
      <p>Price: {advert.price}</p>
    </div>
  );
};

export default AdvertItem;
