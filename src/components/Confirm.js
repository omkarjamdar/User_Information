import React, { Component } from "react";

export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: {
        step,
        fname,
        lname,
        date,
        email,
        phone,
        facebook,
        city,
        company,
        job,
        rating,
        summary,
        github,
      },
    } = this.props;

    return (
      <div className="form-container" style={{ marginTop: "7rem" }}>
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            aria-valuenow="70"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "100%" }}
          >
            {step}
          </div>
        </div>
        <h1 className="mb-5">Confirm</h1>
        <ul class="list-group">
          <li class="list-group-item">First Name: {fname}</li>
          <li class="list-group-item">Last Name: {lname}</li>
          <li class="list-group-item">Mobile Number: {phone}</li>
          <li class="list-group-item">Email: {email}</li>
          <li class="list-group-item">City: {city}</li>
          <li class="list-group-item">Date Of Birth: {date}</li>

          <li class="list-group-item">Company Name: {company}</li>
          <li class="list-group-item">Job Title: {job}</li>
          <li class="list-group-item">
            Facebook URL: <a href={facebook}>{facebook}</a>
          </li>
          <li class="list-group-item">
            Github URL: <a href={github}>{github}</a>
          </li>
          <li class="list-group-item">Rating: {rating}</li>
          <li class="list-group-item">Summary: {summary}</li>
        </ul>

        <br />
        <br />

        <div className="row">
          <div className="col-6">
            <button className="btn btn-danger" onClick={this.back}>
              Back
            </button>
          </div>
          <div className="col-6 text-right">
            <button
              className="btn btn-primary"
              type="submit"
              onClick={this.continue}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Confirm;