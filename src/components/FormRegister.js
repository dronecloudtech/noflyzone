import React from "react";
import { MDBContainer, MDBCol, MDBRow, MDBBtn } from "mdbreact";

export default function FormRegister() {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="8" className="mt-5">
          <form>
            <label htmlFor="defaultFormLoginNameEx">Name</label>
            <input
              type="text"
              id="defaultFormLoginNameEx"
              className="form-control"
              required
            />
            <br />
            <label htmlFor="defaultFormLoginEmailEx">Email</label>
            <input
              type="email"
              id="defaultFormLoginEmailEx"
              className="form-control"
              required
            />
            <br />
            <label htmlFor="defaultFormphoneEx">Phone number</label>
            <input
              type="text"
              id="defaultFormphoneEx"
              className="form-control"
              required
            />
            <br />
            <label htmlFor="defaultFormaddressEx">Postal Address</label>
            <input
              type="text"
              id="defaultFormaddressEx"
              className="form-control"
              required
            />
            <br />
            <label htmlFor="defaultFormflyzoneEx">Nofly zone name</label>
            <input
              type="text"
              id="defaultFormflyzoneEx"
              className="form-control"
              required
            />
            <br />
            <label htmlFor="defaultFormdetailsEx">Nofly zone coordinates</label>
            <textarea
              rows="5"
              columns="10"
              id="defaultFormdetailsEx"
              className="form-control"
              placeholder="Insert link to the kml file, scanned file or map (use dropbox, googledrive, etc); Latitude and Longitude Points (decimal degrees); Description and Address. Use https://transfer.pcloud.com to send us a file or paste a link here to a dropbox / google drive containing the file."
              required
            />
            <div className="text-center mt-4">
              <MDBBtn color="grey" type="submit">
                Submit
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
