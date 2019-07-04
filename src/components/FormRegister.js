import React from "react";
import { MDBContainer, MDBCol, MDBRow, MDBBtn } from "mdbreact";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import firebase from 'firebase'
export default class FormRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      address: "",
      noflyzone_name: "",
      noflyzone_coordinates: "",
      e:""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleResetForm = this.handleResetForm.bind(this);
  }

  componentWillMount(){
    const firebaseConfig = {
      apiKey: "AIzaSyCw0K7CpmWmbCOj0IEyHZQ3BFnxm3IX6kM",
      authDomain: "africadronevalley-34982.firebaseapp.com",
      databaseURL: "https://africadronevalley-34982.firebaseio.com",
      projectId: "africadronevalley-34982",
      storageBucket: "",
      messagingSenderId: "953805615933",
      appId: "1:953805615933:web:99337c7f7077ee76"
    };
    firebase.initializeApp(firebaseConfig);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleResetForm() {
    this.setState({
      name: "",
      email: "",
      phone: "",
      address: "",
      noflyzone_name: "",
      noflyzone_coordinates: ""
    });
  }

  notify = () => {
    toast.success("Data was submitted with success", {
      position: "top-right",
      autoClose: "5000",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  };

  notifyFailed = () => {
    toast.warning(`"Data was not submitted"`, {
      position: "top-right",
      autoClose: "5000",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  };

  async handleSendData(){
    try {
      const dat = await firebase.database().ref(`users/${this.state.name}`).push({
      Name:this.state.name,
      Email:this.state.email,
      Phone:this.state.phone,
      Address:this.state.address,
      Nofly_Zone_Name:this.state.noflyzone_name,
      Nofly_Zone_Coords:this.state.noflyzone_coordinates
    })
    } catch (error) {
      this.setState({e:error})
    }
    
  }

  handleSubmit(e) {
    e.preventDefault();
    this.handleSendData() == true ? this.notify() : this.notifyFailed();
    this.handleResetForm();
  }

  render() {
    return (
      <MDBContainer>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
        <MDBRow>
          <MDBCol md="8" className="mt-5">
            <form onSubmit={this.handleSubmit} id="myform">
              <label htmlFor="defaultFormLoginNameEx">Name</label>
              <input
                type="text"
                id="defaultFormLoginNameEx"
                className="form-control"
                required
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <br />
              <label htmlFor="defaultFormLoginEmailEx">Email</label>
              <input
                type="email"
                id="defaultFormLoginEmailEx"
                className="form-control"
                required
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <br />
              <label htmlFor="defaultFormphoneEx">Phone number</label>
              <input
                type="text"
                id="defaultFormphoneEx"
                className="form-control"
                required
                name="phone"
                value={this.state.phone}
                onChange={this.handleChange}
              />
              <br />
              <label htmlFor="defaultFormaddressEx">Postal Address</label>
              <input
                type="text"
                id="defaultFormaddressEx"
                className="form-control"
                required
                name="address"
                value={this.state.address}
                onChange={this.handleChange}
              />
              <br />
              <label htmlFor="defaultFormflyzoneEx">Nofly zone name</label>
              <input
                type="text"
                id="defaultFormflyzoneEx"
                className="form-control"
                required
                name="noflyzone_name"
                value={this.state.noflyzone_name}
                onChange={this.handleChange}
              />
              <br />
              <label htmlFor="defaultFormdetailsEx">
                Nofly zone coordinates
              </label>
              <textarea
                rows="5"
                columns="10"
                id="defaultFormdetailsEx"
                className="form-control"
                placeholder="Insert link to the kml file, scanned file or map (use dropbox, googledrive, etc); Latitude and Longitude Points (decimal degrees); Description and Address. Use https://transfer.pcloud.com to send us a file or paste a link here to a dropbox / google drive containing the file."
                required
                name="noflyzone_coordinates"
                value={this.state.noflyzone_coordinates}
                onChange={this.handleChange}
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
}
