
import { Link } from 'react-router-dom';
import axios from "axios";
import { connect } from 'react-redux';
import { loginAccount } from '../../action/LoginAction';
import User from '../../localstorage/Users';
import "./Login.css"
import React, { Component } from 'react';
import RedirectMessage from './RedirectMessage';
import CustomerValidation from './CustomerValidation';

 class Login extends Component{
    

    // const dispatch = useDispatch();
    // let navigate = useNavigate();

    // const [login, setLogin] = useState(
    //     {
    //         userId: "",
    //         password: "",
    //         userTypeDto: "",
    //     }
    // )

     
    constructor(props){
        super(props);

        this.state={
              login:{
                userId:"",
                password:"",
                userTypeDto:""
              },
              redirect:false,
              message:"login"
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

    handleChange = (event) =>{
        let nam = event.target.name;
        let value = event.target.value;
        this.setState({login:{...this.state.login,[nam]:value}});
        console.log(this.state.login);
        if(nam !== "userTypeDto"){
        this.updateValidators(nam,value);
        }
    }



    checkLogin = async () => {

        const result = await axios.post(`http://localhost:9090/login`, this.state.login, {
            headers: {
                'Access-Control-Allow-Origin': true
            }
        }).catch((error)=>alert("Wrong Credentials"));
        console.log(result);
        if (result.data) {
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("userId", this.state.login.userId);
            localStorage.setItem("password", this.state.login.password);
            localStorage.setItem("userType", this.state.login.userTypeDto);
            User.login(this.state.login);
            console.log(this.props);
            this.props.login(result.data);
            this.setState({redirect:true})
        }
    }
    
    render(){

    
    return (
        <section class="container-fluid bg">
        <section class= "row justify-content-center">
        <section class="col-18 col-sm-7 col-md-3"> 
                    <form className='form-container'>
                        <h3>LOG IN</h3>
                        <div className="form-group">
                            <label>USERNAME</label>
                            <input type="text" className="form-control" placeholder="Enter UserName" name="userId" onChange={(event) => this.handleChange(event)} />
                        </div>
                        {this.displayValidationErrors('userId')}
                        <div className="form-group">
                            <label>PASSWORD</label>
                            <input type="password" className="form-control" placeholder="Enter Password" name="password" onChange={(event)=> this.handleChange(event)} />
                        </div>
                        {this.displayValidationErrors('password')}
                        <div className='form-group'>
                            <label for="sel1">USERTYPE</label>
                            <div class="input-group">
                                <select class="form-select" id="inputGroupSelect02" name="userTypeDto" onChange={(event) => this.handleChange(event)}>
                                    <option defaultValue={"USER"}>Choose...</option>
                                    <option value="BUYER">USER</option>
                                    <option value="ADMIN">ADMIN</option>
    
                                </select>
                                <div class="input-group-append">
                                    <label class="input-group-text" for="inputGroupSelect02">TYPE</label>
                                </div>
                            </div>
                        </div>
                        <br/>
                        
                        <button className={`btn btn-primary btn-lg btn-block ${this.isFormValid() ? '' : 'disabled'}`} onClick={(event) => {
                            this.checkLogin();
                            event.preventDefault();
                        }}
                        style={{width:'100%'}}
                        >SUBMIT</button>
                         <br/>
                         <br/>
                        <Link to="/signup">
                        <button className="btn btn-secondary btn-lg btn-block"
                         style={{width:'100%'}}
                        >
                        SIGN UP
                        </button>
                        </Link>
                        <br></br>
                        <div>
                            <RedirectMessage redirect={this.state.redirect} message={this.state.message}/>
                        </div>
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
    login: logindetails => dispatch(loginAccount(logindetails)),
    }
}



export default connect(null,mapDispatchToProps)(Login);