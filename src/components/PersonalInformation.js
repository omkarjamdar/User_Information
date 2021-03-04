import React, { Component } from 'react';


 
export default class PersonalInformation extends Component {
    continue = e => {
        if(this.props.values.fname!== '' && this.props.values.lname!== '' && this.props.values.email!== '' &&  this.props.values.mobile!== '' && this.props.values.city!== '' &&  this.props.values.date!== '') 
        {  
            if(this.props.values.fname.match(/\d/) || this.props.values.fname.match(/\d/)){
                alert("Please enter character");
            }
            else{
                    let mobileNumberLength= this.props.values.phone;
                    if(mobileNumberLength.length !== 10)
                    {
                        alert("Please enter 10 digit mobile number")
                    }
                    else{
                            
                            if(this.props.values.email.match('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'))
                            {
                                e.preventDefault();
                                this.props.nextStep1();    
                            }
                            else{
                                alert('Enter valid email address');
                            }
                                
                    }
                     
            }
            
        }
        else{
            alert('All Fields Required...!')
        }
        
    };

    
     
    render() {
        const { values, inputChange} = this.props;
      
        
        return (
            <div className="form-container">
            <div class="progress">
                 <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:'33.33%'}}>
                     {values.step}
                </div>
            </div>
                <h1 className="mb-5">Personal Information</h1>
                <div className="form-group">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" className="form-control" name="fname" onChange={inputChange('fname')} value={values.fname} required/>
                   
                    
                </div>
                <div className="form-group">
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" className="form-control" name="lname" onChange={inputChange('lname')} value={values.lname}  required/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" name="email" onChange={inputChange('email')} value={values.email}  required/>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Mobile Number</label>
                    <input type="number" className="form-control" name="phone" onChange={inputChange('phone')} value={values.phone} required/>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlSelect1">Select City</label>
                    <select class="form-control" name="city" onChange={inputChange('city')} id="exampleFormControlSelect1" value={values.city} required>
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
                    <input type="date" className="form-control" name="date" onChange={inputChange('date')} value={values.date} required/>
                </div>

                <br />

                <div className="text-right">
                <button className="btn btn-primary" type="submit" onClick={this.continue}>Continue</button>
                </div>
            </div>
        )
    }
}
