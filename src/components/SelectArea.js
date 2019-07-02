import React from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdbreact";
import {civ} from './containers/civ'
import './styles/area.css'

export default function SelectArea() { 
  return (
    <MDBContainer fluid>
      <MDBRow className="select-div">
        <h5 className="h5-responsive font-weight-bold">Select a City to show the nofly-zone area</h5>
        <MDBCol md="6" className="select-area">
          <select className="browser-default custom-select">
            {
              civ.map((name, key) =>(
                <option key={key} value={key}>{name.name}</option>
              ))
            }
          </select>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
