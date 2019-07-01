import React from 'react'
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBInput } from "mdbreact";

export default function FormRegister() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12">
            <section className="text-center">
              <img
                src={require("./img/ADF-LOGO.png")}
                alt="logo"
                className="img-responsive"
              />
              <h3 className="h3-responsive font-weight-bold text-center my-2">Register</h3>
            </section>

            <form>
              <div className="grey-text">
                <MDBInput
                  label="Name"
                  icon="user"
                  group
                  type="text"
                  color="success"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Phone number"
                  icon="phone"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Adress"
                  icon="map-pin"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Password"
                  icon="lock"
                  group
                  type="password"
                  validate
                />
              </div>
              <div className="text-center">
                <MDBBtn outline color="primary">
                  Register
                </MDBBtn>
                <MDBBtn color="success">Login</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
        <MDBRow className="text-center my-2">
          <span className="grey-text">
            Copyright &copy; {new Date().getFullYear()} Africa Drone Valley
            Rights Reserved. Privacy Policy Terms of Use Site Map Should you
            have any questions, click here to contact our dedicated customer
            support team.
          </span>
        </MDBRow>
      </MDBContainer>
    );
}