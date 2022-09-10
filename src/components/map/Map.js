import React, { useEffect, useState } from "react";
import mark from "./marker.png";
import ReactMapGL, { Marker, Popup, NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Map = () => {
  const styleList = [
    {
      name: "Street View",
      style: "mapbox://styles/ibagwai9/ckw6nbhot5rwa15o6sxgdtq1c",
    },
    // {
    //   name: "Satellite View",
    //   style: "mapbox://styles/ibagwai9/ckvbb7a7010kh18rs9reprcn3",
    // },
  ];
  //hhs

  const [selectedShop, setSelectedShop] = useState(null);
  const [shops] = useState({});

  // const [selectedView, setSelectedView] = useState(styleList[0].name);
  const [mapStyle] = useState(styleList[0].style);

  const [viewport, setViewport] = useState({
    width: "95vw",
    height: "95vh",
    latitude: 12.0,
    longitude: 8.516667,
    zoom: 12,
  });

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  // const handleViewChange = ({ target: { value } }) => {
  //   let selected = styleList.find((i) => i.name === value);
  //   setMapStyle(selected.style);
  //   setSelectedView(value);
  // };


  // useEffect(() => {
  //   if (!shops.features) getData();
  // }, [shops.features]);
  return (
    <>
      {/* <select onChange={handleViewChange} value={selectedView}>
        {styleList.map((item, i) => (
          <option key={i} value={item.name}>
            {item.name}
          </option>
        ))}
      </select> */}
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoiaWJhZ3dhaTkiLCJhIjoiY2tweTMxODZ5MWNoZzJxcDl0ODI0dXJtdyJ9.-igEXVpIFBVzefkT89oscQ"
        mapStyle={mapStyle}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        {shops.features &&
          shops.features.length &&
          shops.features.map((shop) => (
            <Marker
              key={shop.properties.id}
              latitude={shop.geometry.coordinates[1]}
              longitude={shop.geometry.coordinates[0]}
            >
              <img
                src={mark}
                style={{ width: 20, height: 20 }}
                onClick={() => setSelectedShop(shop)}
                alt="Markers"
              />
            </Marker>
          ))}
        {selectedShop ? (
          <Popup
            latitude={selectedShop.geometry.coordinates[1]}
            longitude={selectedShop.geometry.coordinates[0]}
            onClose={() => setSelectedShop(null)}
          >
            <div>
              <h5>{selectedShop.properties.shop_name}</h5>
              <p>{selectedShop.propertiesowner_name}</p>
              <p>{selectedShop.properties.address}</p>
              <p>{selectedShop.properties.address}</p>
              <p>
                {selectedShop.properties.lga} l.g.a.{" "}
                {selectedShop.properties.state} state
              </p>
            </div>
          </Popup>
        ) : (
          ""
        )}
        <NavigationControl />
      </ReactMapGL>
    </>
  );
};

export default Map;
