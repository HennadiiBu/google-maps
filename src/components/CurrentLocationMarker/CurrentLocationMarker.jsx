import { MarkerF } from '@react-google-maps/api';
import React from 'react';



const CurrentLocationMarker = ({ position }) => {
  return (
    <MarkerF
      position={position}
      icon={{
        path: 'M16 0.783l4.944 10.018 11.056 1.606-8 7.798 1.888 11.011-9.888-5.199-9.889 5.199 1.889-11.011-8-7.798 11.056-1.606z',
        fillColor: '#fac917',
        fillOpacity: 1,
        strokeWeight: 0,
        scale: 1,
      }}
    //   label={{
    //     text: 'You are here',
    //     fontSize: '25px',
    //     color: 'red',
    //   }}
    />
  );
};

export default CurrentLocationMarker;
