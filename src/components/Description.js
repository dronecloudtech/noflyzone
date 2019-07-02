import React from "react";
import { MDBContainer, MDBCol, MDBRow} from "mdbreact";

export default function Description() {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="12">
          <h3 className="h3-responsive text-center font-weight-bold">Description</h3>
          <p className="text-justify">
            Lorem reprehenderit exercitation laboris occaecat culpa occaecat
            aliquip cillum duis aute nisi culpa exercitation anim. Id aute et
            voluptate ut ex sit in in. Occaecat pariatur pariatur nostrud
            consectetur adipisicing nulla reprehenderit irure amet consectetur
            ea cupidatat. Do et officia veniam aliqua proident enim ad ex ex
            aute quis aliquip duis minim. Minim duis quis cillum duis aliqua
            id esse. Lorem reprehenderit exercitation laboris occaecat culpa
            occaecat aliquip cillum duis aute nisi culpa exercitation anim. Id
            aute et voluptate ut ex sit in in. Occaecat pariatur pariatur
            nostrud consectetur adipisicing nulla reprehenderit irure amet
            consectetur ea cupidatat. Do et officia veniam aliqua proident
            enim ad ex ex aute quis aliquip duis minim. Minim duis quis cillum
            duis aliqua id esse.
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
