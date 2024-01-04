import { MarkerF } from '@react-google-maps/api';
import React from 'react';

const Marker = ({ position }) => {
  return <MarkerF position={position} />;
};

export default Marker;
