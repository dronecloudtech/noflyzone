import React from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdbreact";
import FormRegister from "../FormRegister";
import CarouselRegister from "../CarouselRegister";
import '../styles/registerpage.css'
export default function Register() {
  return (
    <MDBContainer>
      <MDBRow className="p-3">
        <MDBCol md="6">
          <CarouselRegister />
        </MDBCol>
        <MDBCol md="6">
          <FormRegister />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
