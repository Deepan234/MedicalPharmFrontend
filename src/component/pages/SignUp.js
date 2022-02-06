import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {connect, useDispatch} from 'react-redux'
import { signUpAccount } from '../../action/LoginAction'
import RedirectMessage from './RedirectMessage'
import CustomerValidation from './CustomerValidation'

class SignUp extends React.Component {

    // const dispatch = useDispatch();

    // const[signup,setSignup] = useState({
    //     userId:0,
    //     password:"",
    //     userTypeDto:"BUYER",
    // })

    
    constructor(props){
        super(props);

        this.state={
              signup:{
                userId:"",
                password:"",
                userTypeDto:"BUYER"
              },
              redirect:false,
              message:"signup"
            }
        this.validators = CustomerValidation;
        this.resetValidators();
    }

    updateValidators = (fieldName, value) => {
        this.validators[fieldName].errors = [];
        this.validators[fieldName].state = value;
        this.validators[fieldName].valid = true;
        this.validators[fieldName].rules.forEach((rule) => {
            if (rule.test instanceof RegExp) {
                if (!rule.test.test(value)) {
                    this.validators[fieldName].errors.push(rule.message);
                    this.validators[fieldName].valid = false;
                }
            } else if (typeof rule.test === 'function') {
                if (!rule.test(value)) {
                    this.validators[fieldName].errors.push(rule.message);
                    this.validators[fieldName].valid = false;
                }
            }
        });
    }

    resetValidators = () => {
        Object.keys(this.validators).forEach((fieldName) => {
            this.validators[fieldName].errors = [];
            this.validators[fieldName].state = '';
            this.validators[fieldName].valid = false;
        });
    }

    displayValidationErrors = (fieldName) => {
        const validator = this.validators[fieldName];
        const result = '';
        if (validator && !validator.valid) {
            const errors = validator.errors.map((info, index) => {
                return <span style={errorStyle} key={index}>* {info}</span>;
            }); 
            return (
                <div style={errorStyle} className="col s12 row">
                    {errors}
                </div>
            ); 
        }
        return result;
    }
    
    isFormValid = () => {
        let status = true;
        Object.keys(this.validators).forEach((field) => {
            if (!this.validators[field].valid) {
                status = false;
            }
        });
        return status;
    }

    createAccount = async() => {
        console.log(this.state.signup);
      const result =  await axios.post(`http://localhost:9090/signup`,this.state.signup).catch((error)=>alert("Wrong Details"));
      this.setState({redirect:true})
      this.props.signup(result.data);
    }

    handleChange = (event) =>{
        let nam = event.target.name;
        let value = event.target.value;
        this.setState({signup:{...this.state.signup,[nam]:value}});
        console.log(this.state.signup);
        this.updateValidators(nam,value);
    }

    render(){
    return (
        <section class="container-fluid bg">
        <section class= "row justify-content-center">
        <section class="col-18 col-sm-7 col-md-3"> 
          <form className='form-container'>
            <h3>SignUp</h3>
                <div className="form-group">
                    <label>UserName</label>
                      <input type="text" className="form-control" placeholder="Enter UserName" name="userId" onChange={(event)=> this.handleChange(event)} />
                </div>
                {this.displayValidationErrors('userId')}
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter Password" name="password" onChange={(event)=> this.handleChange(event)}/>
                </div>
                {this.displayValidationErrors('password')}
                <br/>
                <div className='form-group'>
                <button type="submit" className={`btn btn-primary btn-lg btn-block ${this.isFormValid() ? '' : 'disabled'}`} onClick={(event)=>{
                    event.preventDefault();
                    this.createAccount();
                }}
                style={{width:'100%'}}
                >CREATE</button>
                <br/><br/>
                <Link to="/login">
                <button className='btn btn-secondary btn-lg btn-block'  style={{width:'100%'}}>LOGIN </button>
                </Link>
                </div>
                <RedirectMessage  redirect={this.state.redirect} message={this.state.message}/>
                </form>
        </section>
        </section>
        </section>
    )
    }
}

const errorStyle = {
    color: 'red'
};

const mapDispatchToProps = dispatch => {
    return{
    signup: signupdetails => dispatch(signUpAccount(signupdetails)),
    }
}

export default connect(null,mapDispatchToProps)(SignUp);