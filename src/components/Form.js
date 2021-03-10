import React,{Component} from 'react';
import PersonalInformation from './PersonalInformation';
import JobInformation from './JobInformation';
import Confirm from './Confirm';
import Success from './Success';

export default class Form extends Component {
    state = {
        step: 1,
        fname: '',
        lname:'',
        date:'',
        city:'',
        email: '',
        phone: '',
        company:'',
        job:'',
        facebook: '',
        github: '',
        rating:0,
        flag:0,
        summary:'',
       
    };

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    };    

    inputChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    };

    render() {
        const { step } = this.state;
        const { fname, lname, date, city, email, phone, facebook, company,job, github,summary,rating } = this.state;
        const values = {step,   fname, lname, date, city, email, phone, facebook, company,job, github,summary,rating };

        switch (step) {
            case 1:
                return (
                    <PersonalInformation
                        nextStep={this.nextStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <JobInformation
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );
            case 3:
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                );
            case 4:
                return (
                    <Success />
                );
        }
    }
}
