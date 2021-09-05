import React, { useRef, useEffect } from "react";
import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";
import ScaleBar from "@arcgis/core/widgets/ScaleBar";
import Legend from "@arcgis/core/widgets/Legend";
import LayerList from "@arcgis/core/widgets/LayerList";
import Expand from "@arcgis/core/widgets/Expand";
import Search from "@arcgis/core/widgets/Search"
import "../App.css"; 

function Map() {

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

      const search = new Search ({
        view: view
      });

      view.ui.add(search, "top-right");

      const legendExpand = new Expand({
        expandIconClass: "esri-icon-legend", 
        view: view,
        content: legend
      });
      
      view.ui.add(legendExpand, "top-left");

      const layerlist = new LayerList({
        view: view
      });

      const layerListExpand = new Expand({
        expandIconClass: "esri-icon-layer-list", 
        view: view,
        content: layerlist
      });
      
      view.ui.add(layerListExpand, "top-left");

    }
  }, []);

  return <div className="mapDiv" ref={mapDiv}></div>;
}

export default Map;

