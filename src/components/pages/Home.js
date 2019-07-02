import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Description from "../Description";
import "leaflet/dist/leaflet.css";

class Home extends React.Component {
  render() {
    return (
      <MDBContainer fluid>
        <MDBRow className="pt-5 mt-5">
          <Description />
          <MDBCol md="12" className="my-5">
            <Map center={[5.345317, -4.024429]} zoom={14}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> Africa Drone Valley'
              />
              <Marker position={[5.345317, -4.024429]}>
                <Popup>
                  A pretty CSS3 popup.
                  <br />
                  Easily customizable.
                </Popup>
              </Marker>
            </Map>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Home;
