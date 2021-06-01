import React, { useRef, useEffect } from "react";
import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";
import ScaleBar from "@arcgis/core/widgets/ScaleBar";
import Legend from "@arcgis/core/widgets/Legend";
import LayerList from "@arcgis/core/widgets/LayerList";
import "./App.css"; 

function App() {

  const mapDiv = useRef(null);

  useEffect(() => {
    if (mapDiv.current) {
      /**
       * Initialize application
       */
      const webmap = new WebMap({
        portalItem: {
          id: "5985c47d55d14848b6337548fe4be9c9"
        }
      });

      const view = new MapView({
        container: mapDiv.current,
        map: webmap,
        zoom:8
      });

      const scalebar = new ScaleBar({
        view: view
      });

      view.ui.add(scalebar, "bottom-right");

      const legend = new Legend ({
        view: view
      });

      view.ui.add(legend, "top-right");

      const layerlist = new LayerList({
        view: view
      });

      view.ui.add(layerlist, "bottom-left");

    }
  }, []);

  return <div className="mapDiv" ref={mapDiv}></div>;
}

export default App;

