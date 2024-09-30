import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Map = ({ location, zoom = 14, size = '600x300', apiKey }) => {
  const [hasError, setHasError] = useState(false);

  // Construct the URL for the Google Maps Static API
  const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${location.lat},${location.lng}&zoom=${zoom}&size=${size}&key=${apiKey}`;

  return (
    <div>
      {!hasError ? (
        <img
          src={mapUrl}
          alt={`Map of location (${location.lat}, ${location.lng})`}
          style={{ width: '100%', height: 'auto' }}
          onError={() => setHasError(true)} // Handle image load error
        />
      ) : (
        <div>Map failed to load. Please try again later.</div>
      )}
    </div>
  );
};

Map.propTypes = {
  location: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
  zoom: PropTypes.number,
  size: PropTypes.string,
  apiKey: PropTypes.string.isRequired,
};

export default Map;
