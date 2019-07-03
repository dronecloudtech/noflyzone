import React from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdbreact";
import {Link} from 'react-router-dom'
import "../styles/contact.css";
export default function Contact() {
  return (
    <MDBContainer>
      <MDBRow className="my-5">
        <MDBCol md="12" className="mt-5 img_enveloppe">
          <a href="mailto:contact@africadronevalley.com" className="mt-3">
            <img
              src={require("../img/enveloppe.jpeg")}
              className="img-fluid"
              alt="contact"
              style={{
                width: "100%"
              }}
            />
          </a>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol md="12">
          <h5 className="h5-responsive font-weight-bold text-center">
            Official sources of information about rules and airspace are
            obtained from the <Link to="" />
            <a
              href="http://www.anac.ci/anac/web/"
              className="green-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              A.N.A.C
            </a>
            . For all enquiries and questions about this website please
            contact us via email at contact@africadronevalley.com
          </h5>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
