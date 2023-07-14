import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const NewYorkMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBqFboyBxjmagt7bEJk8XKGqIwB6JNe4-g',
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{ width: '700px', height: '700px' }}
      center={{ lat: 40.7831, lng: -73.9712 }}
      zoom={12}
    />
  ) : (
    <div>Loading Google Maps...</div>
  );
};

export default NewYorkMap;
