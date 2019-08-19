import React from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react'

const BMap = ({ google }) => {
  return (
    <Map
      google={google}
      zoom={8}
      initialCenter={{
        lat: 47.444,
        lng: -122.176
      }}
    />
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAG7SiiTf_x-3IDCQ7itLVWkZFkRKLdj6U'
})(BMap)
