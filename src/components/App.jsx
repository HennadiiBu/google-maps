import React from 'react';
import { useCallback, useEffect, useState } from 'react';

import { useJsApiLoader } from '@react-google-maps/api';
import { useSelector } from 'react-redux';

import Map from './Map/Map';
// import Autocomplete from './Autocomplete/Autocomplete';
import { getAdverts } from '../Redux/selectors';

import css from './App.module.css';
import getBrouserLocation from './utils/geo';
import { Dialog } from '@mui/material';
import Modal from './Modal/Modal';

const API_KEY = process.env.REACT_APP_API_KEY;

const defaultCenter = {
  lat: 48.379433,
  lng: 31.16558,
};

export const MODES = {
  MOVE: 0,
  SET_MARKER: 1,
};

const libraries = ['places'];

export const App = () => {
  const [center, setCenter] = useState(defaultCenter);

  // const [markers, setMarkers] = useState([]);

  const [open, setOpen] = useState(false);

  const adverts = useSelector(getAdverts);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY,
    libraries,
  });

  const onPlaceSelect = useCallback((lat, lng) => {
    setCenter({ lat: lat, lng: lng });
  }, []);



  // const onMarkerAdd = useCallback(
  //   coordinaties => {
  //     setMarkers([...markers, coordinaties]);
  //   },
  //   [markers]
  // );

  useEffect(() => {
    getBrouserLocation()
      .then(curLoc => {
        setCenter(curLoc);
      })
      .catch(defaultLocation => {
        setCenter(defaultLocation);
      });
  }, []);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <div className={css.adressSearchContainer}>
        {/* <Autocomplete isLoaded={isLoaded} onSelect={onPlaceSelect} /> */}
        <button className={css.modeToggle} onClick={handleOpen}>
          Add markers
        </button>
      </div>
      {isLoaded ? (
        <Map center={center} markers={adverts}  />
      ) : (
        <h2>Loading...</h2>
      )}
      <div className={css.listContainer}>
        <ul className={css.itemContainer}>
          {adverts.map(adv => {
            return (
              <li
                key={adv.id}
                className={css.item}
                onClick={() => {
                  onPlaceSelect(adv.lat, adv.lng);
                }}
              >
                <h2>{adv.title}</h2>
                <p>Description: {adv.desc}</p>
                <p>Price: {adv.price}</p>
              </li>
            );
          })}
        </ul>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Modal onClose={handleClose} />
      </Dialog>
    </div>
  );
};
