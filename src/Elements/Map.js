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

      const webmap = new WebMap({
        portalItem: {
          /* Codigo de identificacion del mapa en Arcgis Online */
          id: "0842cc62f9774fef95e0201aa0cf7802"
        }
      });

      /*Se muestra el mapa */
      const view = new MapView({
        container: mapDiv.current,
        map: webmap,
        zoom:8
      });

      /* Se agregan las herramientas interactivas del mapa */

      /* Escala del mapa */
      const scalebar = new ScaleBar({
        view: view
      });

      view.ui.add(scalebar, "bottom-right");

      /*Leyenda del mapa */
      const legend = new Legend ({
        view: view
      });

      /* Barra de búsqueda */
      const search = new Search ({
        view: view,
        popupEnabled: false
      });

      view.ui.add(search, "top-right");

      /* Leyenda */
      const legendExpand = new Expand({
        expandIconClass: "esri-icon-legend", 
        view: view,
        content: legend
      });
      
      view.ui.add(legendExpand, "top-left");

      /* Lista de capas */
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

