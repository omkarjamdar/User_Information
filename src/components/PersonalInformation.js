import React, { Component } from "react";
export default class PersonalInformation extends Component {
  continue = (e) => {
    let mobileNumberLength = this.props.values.phone;
    if (
      this.props.values.fname.match(/\d/) ||
      this.props.values.lname.match(/\d/)
    ) {
      alert("Please enter character");
    } else if (mobileNumberLength.length !== 10) {
      alert("Please enter 10 digit mobile number");
    } else {
      this.props.nextStep();
    }
    e.preventDefault();
  };

  render() {
    const { values, inputChange } = this.props;

    return (
      <form
        className="form-container needs-validation"
        style={{ marginTop: "7rem" }}
        onSubmit={this.continue}
      >
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            aria-valuenow="70"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "33.33%" }}
          >
            {values.step}
          </div>
        </div>
        <h1 className="mb-5">Personal Information</h1>
        <div className="form-group">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            className="form-control"
            name="fname"
            onChange={inputChange("fname")}
            value={values.fname}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            className="form-control"
            name="lname"
            onChange={inputChange("lname")}
            value={values.lname}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={inputChange("email")}
            value={values.email}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Mobile Number</label>
          <input
            type="number"
            className="form-control"
            name="phone"
            onChange={inputChange("phone")}
            value={values.phone}
            required
          />
        </div>
        <div className="form-group">
          <label for="exampleFormControlSelect1">Select City</label>
          <select
            class="form-control"
            name="city"
            onChange={inputChange("city")}
            id="exampleFormControlSelect1"
            value={values.city}
            required
          >
            <option value=""></option>
            <option value="Mumbai">Mumbai</option>
            <option value="Pune">Pune</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Kerala">Kerala</option>
            <option value="Hyderabad">Hyderabad</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="date">Date Of Birth</label>
          <input
            type="date"
            className="form-control"
            name="date"
            onChange={inputChange("date")}
            value={values.date}
            required
          />
        </div>

        <br />

        <div className="col-6 text-right">
          <button type="submit" className="btn btn-primary">
            Continue
          </button>
        </div>
      </form>
    );
  }
}
