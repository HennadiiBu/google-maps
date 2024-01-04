import { GoogleMap, MarkerF } from '@react-google-maps/api';
import React, { useCallback } from 'react';

import s from './Map.module.css';
import { defaultTheme } from './Theme';
import CurrentLocationMarker from 'components/CurrentLocationMarker/CurrentLocationMarker';
import { MODES } from 'components/App';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const Map = ({ center, mode, markers, onMarkerAdd }) => {
  const mapRef = React.useRef(undefined);

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
    scrollwheel: false,
    disableDoubleClickZoom: true,
    fullscreenControl: false,
    styles: defaultTheme,
  };

  const onClick = useCallback(
    location => {
      if (mode === MODES.SET_MARKER) {
        const lat = location.latLng.lat();
        const lng = location.latLng.lng();
        onMarkerAdd({ lat, lng });
      }
    },
    [mode, onMarkerAdd]
  );

  return (
    <div className={s.container}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={6}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={defaultOptions}
        onClick={onClick}
      >
        <CurrentLocationMarker position={center} />
        {markers.map((position) => {
          return <MarkerF position={position} key={position.lat}/>;
        })}
      </GoogleMap>
    </div>
  );
};

export default Map;
