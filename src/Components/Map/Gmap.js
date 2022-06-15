import React from "react"
import { Map, Marker } from "pigeon-maps"

 function Gmap() {
  return (
    <Map height={200} defaultCenter={[39.66101, 35.88278]} defaultZoom={11}>
      <Marker width={50} anchor={[39.66101, 35.88278]} />
      <Marker width={50} anchor={[39.69277, 35.51052]} />
      <Marker width={50} anchor={[39.81119, 35.18859]} />

    </Map>
  )
}

export default Gmap