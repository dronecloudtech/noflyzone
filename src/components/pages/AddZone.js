import React from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdbreact";
import { Link } from "react-router-dom";
import "../styles/addzone.css";
import FormRegister from "../FormRegister";
export default function AddZone() {
  return (
    <MDBContainer>
      <MDBRow className="p-5 mt-5">
        <MDBCol md="12">
          <h1 className="h1-responsive add-zone-title mt-5 font-weight-bold">
            Why add a nofly-zone ?
          </h1>
          <p className="text-justify mt-5">
            Minim aliqua consectetur esse sunt adipisicing occaecat mollit
            labore dolore ea ipsum do. Minim velit consequat excepteur officia
            in qui nostrud id labore elit sint. Laborum Lorem culpa commodo
            excepteur sit dolor consectetur nulla dolor. Dolor aute tempor
            reprehenderit minim qui. Aute sit et officia officia pariatur
            ipsum ea. Est quis minim eu tempor id ullamco. Minim aliqua
            consectetur esse sunt adipisicing occaecat mollit labore dolore ea
            ipsum do. Minim velit consequat excepteur officia in qui nostrud
            id labore elit sint. Laborum Lorem culpa commodo excepteur sit
            dolor consectetur nulla dolor. Dolor aute tempor reprehenderit
            minim qui. Aute sit et officia officia pariatur ipsum ea.
          </p>
        </MDBCol>
      </MDBRow>
      <h2 className="h2-responsive text-center add-zone-title mt-2 font-weight-bold">
        How my zone will look like ?
      </h2>
      <MDBRow className="">
        <MDBCol md="4" className="img-look mt-4">
          <img
            className="img-responsive"
            src={require("../img/datamapping.jpg")}
            alt="look"
          />
        </MDBCol>
        <MDBCol md="8 mt-4" className="datamapping-text">
          <p className="text-justify ">
            Adipisicing occaecat proident do eu Lorem irure proident consequat
            aliqua nulla. Elit anim velit sit id. Deserunt excepteur fugiat
            irure consectetur aute laborum culpa duis exercitation quis. Esse
            nulla deserunt occaecat sint culpa ipsum laboris excepteur
            adipisicing. Ex labore et est proident. Officia ullamco culpa est
            eiusmod sit consequat elit id eiusmod laborum. Ipsum reprehenderit
            consectetur do sint sunt elit ullamco.
          </p>
        </MDBCol>
      </MDBRow>
      <h2 className="h2-responsive text-center add-zone-title mt-5 font-weight-bold">
        What kind of data I must submitted ?
      </h2>
      <MDBRow className="">
        <MDBCol md="4" className="img-look mt-4">
          <img
            className="img-responsive"
            src={require("../img/submited.jpg")}
            alt="look"
          />
        </MDBCol>
        <MDBCol md="8 mt-4" className="submited-text">
          <p className="text-justify">
            The simplest and quickest method is to provide us with a{" "}
            <code>.kml</code> file containing the flat polygon for your "no
            fly zone". Alternatively, with a longer lead time, we can also
            accept a series of Latitude and Longitude points (decimal
            degrees), a screen shot of the area, a scanned in marked up map or
            just a general description. If you'd like a circular zone then
            please advise the radius. If we have any queries, Please{" "}
            <Link to="/contact" className="font-weight-bold green-text">
              Contact us
            </Link>
          </p>
        </MDBCol>
      </MDBRow>
      <MDBRow className="mt-5">
        <MDBCol md="12" className="mt-5">
          <img
            className="img-responsive"
            src={require("../img/enveloppe.jpeg")}
            alt="enveloppe"
          />
          <span className="h2-responsive text-center add-zone-title font-weight-bold">
            Fill this form below to add your nofly zone
          </span>
          <p className="text-center">
            Upload your No Fly Zone and once it’s live we'll send you a
            confirmation email.
          </p>
          <p className="text-center">
            Note: Please allow up to 10 working days before contacting us.
            You may also use the form below if you would like to request a no
            fly zone to be removed.
          </p>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <FormRegister />
      </MDBRow>
    </MDBContainer>
  );
}
