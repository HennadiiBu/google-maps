import { useJsApiLoader } from '@react-google-maps/api';
import Map from './Map/Map';
import Autocomplete from './Autocomplete/Autocomplete';

import css from './App.module.css';
import { useCallback, useState } from 'react';

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
  const [mode, setMode] = useState(MODES.MOVE);
  const [markers, setMarkers] = useState([]);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY,
    libraries,
  });

  const onPlaceSelect = useCallback(coordinates => {
    setCenter(coordinates);
  }, []);

  const toggleMode = useCallback(() => {
    switch (mode) {
      case MODES.MOVE:
        setMode(MODES.SET_MARKER);
        break;
      case MODES.SET_MARKER:
        setMode(MODES.MOVE);
        break;
      default:
        setMode(MODES.MOVE);
    }
  }, [mode]);

  const onMarkerAdd = useCallback(
    coordinaties => {
      setMarkers([...markers, coordinaties]);
    },
    [markers]
  );

  return (
    <div>
      <div className={css.adressSearchContainer}>
        <Autocomplete isLoaded={isLoaded} onSelect={onPlaceSelect} />
        <button className={css.modeToggle} onClick={toggleMode}>
          Set markers
        </button>
      </div>
      {isLoaded ? (
        <Map
          center={center}
          mode={mode}
          markers={markers}
          onMarkerAdd={onMarkerAdd}
        />
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};
