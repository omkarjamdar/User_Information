import React, { Component } from 'react'
import '../index.css'
export class JobInformation extends Component {
    continue = e => {
        if(this.props.values.company!== '' && this.props.values.job!== '' && this.props.values.facebook!== '' &&  this.props.values.github!== '' && this.props.values.rating!== 0 &&  this.props.values.summary!== '') 
        {   e.preventDefault();
            this.props.nextStep2();
        }
        else{
            alert('All Fields Required...!')
        }
        
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, inputChange } = this.props;

        return (
            <form className="form-container needs-validation" style={{marginTop:'7rem'}}>
            <div class="progress">
                 <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:'66.66%'}}>
                     {values.step}
                </div>
            </div>
                <h1 className="mb-5">Social Profiles</h1>
                <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input type="text" id="company" className="form-control" name="company" onChange={inputChange('company')} value={values.company} required/>
                    <div class="valid-feedback">
                       Looks good!
                     </div>
                </div>
                <div className="form-group">
                    <label htmlFor="job">Job Title</label>
                    <input type="text" id="job" className="form-control" name="job" onChange={inputChange('job')} value={values.job} required/>
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="facebook">Facebook URL</label>
                    <input type="url" className="form-control" name="facebook" onChange={inputChange('facebook')} value={values.facebook} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="github">Github URL</label>
                    <input type="url" className="form-control" name="github" onChange={inputChange('github')} value={values.github} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="rating">Rating for React</label>
                    <div>
                    <input type="range" id="rating" name="rating"  min="0" max="10" onChange={inputChange('rating')} value={values.rating} required />
                      <div style={{width:'10px',height:'10px',paddingBottom:'1.5rem',marginLeft:'10px'}}>{values.rating}</div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="summary">Summary</label>
                    <textarea 
                                id="summary"
                                className="form-control" 
                                name="summary"
                                required
                                onChange={inputChange('summary')}
                                rows="4" 
                                value={values.summary}
                                cols="50" required>
                        </textarea>
                    
                </div>

                <br />

                <div className="row">
                    <div className="col-6">
                        <button className="btn btn-danger" onClick={this.back}>Back</button>
                    </div>
                    <div className="col-6 text-right">
                        <button className="btn btn-primary" type="submit" onClick={this.continue}>Continue</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default JobInformation

