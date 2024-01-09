import { GoogleMap, MarkerF } from '@react-google-maps/api';
import React, { useState } from 'react';

import s from './Map.module.css';
import { defaultTheme } from './Theme';
// import CurrentLocationMarker from 'components/CurrentLocationMarker/CurrentLocationMarker';
import { Dialog } from '@mui/material';
import AdvertItem from 'components/AdvertItem/AdvertItem';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const Map = ({ center, markers, onMarkerAdd }) => {
  const mapRef = React.useRef(undefined);
  const [open1, setOpen1] = useState(false);
  const [advert, setAdvert] = useState({
    id: null,
    title: '',
    desc: '',
    price: null,
  });

  const onLoad = React.useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);

  const defaultOptions = {
    panControl: true,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    clickableIcons: false,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    fullscreenControl: false,
    styles: defaultTheme,
  };

  const handleClose1 = () => {
    setOpen1(false);
  };
  const handleOpen1 = () => {
    setOpen1(true);
    // setAdvert(id)
  };

  return (
    <div className={s.container}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={6}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={defaultOptions}
      >
        {/* <CurrentLocationMarker position={center} /> */}
        {markers.map(({ id, lat, lng, title, desc, price }) => {
          return (
            <MarkerF
              position={{ lat, lng }}
              key={id}
              onClick={() => {
                handleOpen1();
                setAdvert({ id, title, desc, price });
              }}
            />
          );
        })}
      </GoogleMap>
      <Dialog
        open={open1}
        onClose={handleClose1}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <AdvertItem onClose={handleClose1} advert={advert} />
      </Dialog>
    </div>
  );
};

export default Map;
