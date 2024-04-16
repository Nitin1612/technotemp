/*Since the map was loaded on client side, 
we need to make this component client rendered as well*/
"use client";

//Map component Component from library
import { GoogleMap } from "@react-google-maps/api";

//Map's styling
const defaultMapContainerStyle = {
  width: "100%",
  height: "375px",
  borderRadius: "10px 10px 10px 10px",
};

//K2's coordinates
const defaultMapCenter = {
  lat: 25.254068251713,
  lng: 55.34038069391241,
};

//Default zoom level, can be adjusted
const defaultMapZoom = 18;

//Map options
const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: "auto",
  mapTypeId: "satellite",
};

const MapComponent = () => {
  return (
    <div className="w-fu">
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        center={defaultMapCenter}
        zoom={defaultMapZoom}
        options={defaultMapOptions}
      ></GoogleMap>
    </div>
  );
};

export { MapComponent };
