import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFetch from '../customHook/useFetch';

const RegisterForm = function(){
    const formSubmitData =  {
        login:{
         username : "",
         password : "",
         rememberCheck : false
     },
         register: {
             username : "",
             password : ""
         }
     }
    const [formData, setFormData] = useState(formSubmitData);
    const [validated, setValidated] = React.useState({login:false,register:false});
    const BASE_URL = '/registeration';
    const {requestData,postData,data,error,loading} = useFetch(BASE_URL);
    const form_generator = 
        {'login':[
        {
            id : 1,
            label : "Username or email address",
            type : 'text',
            name : 'username',
            placeholder : '',
            values : "",
            ariaDescription : "usernameValidate" ,
            errorMessage : "Please provide a valid username",
            successMessage : "Looks Good",
            pattern : "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$",
            controlId : 'controlPlainLoginUser',
            acc:'login'
        },
        {
            id : 2,
            label : 'Password',
            type : 'text',
            name : 'password',
            placeholder : '',
            values : "",
            ariaDescription : "passwordValidate",
            errorMessage : "Please provide correct password" ,
            successMessage : "Cool Password",
            pattern : "^[A-Za-z][A-Za-z0-9_]{7,29}$",
            controlId : 'controlPlainLoginEmail',
            acc:'login'
        },
        {
            id : 3,
            label : 'Remember me',
            type : 'checkbox',
            name : 'rememberCheck',
            placeholder : '',
            values : ["Remember me"],
            ariaDescription : "",
            errorMessage : "" ,
            successMessage : "",
            pattern : "",
            controlId : 'controlPlainLoginCheck',
            acc:'login'
        }
   ] ,'register':[
        {
            id : 11,
            label : "Email address",
            type : 'email',
            name : 'username',
            placeholder : '',
            values : "",
            ariaDescription : "EmailValidate" ,
            errorMessage : "Please provide a valid email id",
            successMessage : "Looks Good",
            pattern : "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$" ,
            controlId : 'controlPlainRegisterEmail',
            acc:'register'
        },
        {
            id : 12,
            label : 'Password',
            type : 'text',
            name : 'password',
            placeholder : '',
            values : "",
            ariaDescription : "PasswordValidate",
            errorMessage : "Please provide correct password" ,
            successMessage : "Cool Password",
            pattern : "^[A-Za-z][A-Za-z0-9_]{7,29}$",
            formText : 'Your personal data will be used to support your experience throughout this website, to manage '+
            'access to your account, and for other purposes described in our privacy policy.',
            controlId : 'controlPlainRegisterPassword',
            acc:'register'
        }
   ]};
   
    const handleInputChange = (event) => { 
        const getFormType = event.target.getAttribute('account');
        setFormData({...formData,[getFormType]:
            {...formData[getFormType],[event.target.name] : event.target.type === 'checkbox' ? event.target.checked : event.target.value}});
    }
    const handleSubmitAccount = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formName = form.getAttribute('name');
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
                setValidated(()=>(
                    {...validated,[formName]:true}
                )); 
            }
            else{  
                setFormData(formSubmitData);
                setValidated(()=>(
                    {...validated,[formName]:false}
                ));
                if(formName === 'register'){
                    postData(formData[formName]);
                }
                else if(formName==='login'){
                }
            }      
     }
    const handleInputFields = (formdata,formType)=>{
        return (formdata.map((fields) => {
             const {id,type,placeholder,label,values,name,ariaDescription,acc,errorMessage,successMessage,pattern,formText,controlId,...others} = fields;           
             const stateValues = `{formData.${acc}.${name}}`;
            return(
              typeof(values) === "string" ? 
                        <Form.Group key={id} className="mb-3" controlId={controlId}>  
                            <Form.Label>{label} <span style={{color:'red',fontWeight:'bold'}}>*</span></Form.Label>
                            <Form.Control key={id} size="lg" type={type} required value={eval(stateValues)} account={acc}
                                placeholder={placeholder} name={name} onChange={handleInputChange}
                                aria-describedby={ariaDescription} pattern={pattern}/>
                            <Form.Control.Feedback id={ariaDescription} type='invalid'>
                                {errorMessage}
                            </Form.Control.Feedback>
                            <Form.Control.Feedback id={ariaDescription} type='valid'>
                                {successMessage}
                            </Form.Control.Feedback>
                            <Form.Text style={{fontSize:20}}>
                                {formText}
                            </Form.Text>
                        </Form.Group>    :
                                values.map((items) => {
                                    return (   
                                        <Form.Group key={id} className="mb-3" controlId={controlId}>          
                                            <Form.Check key={id} type={type} placeholder={placeholder} account={acc}
                                            name={name} inline value={eval(stateValues)} checked={eval(stateValues)}
                                            onChange={handleInputChange} label={label}/>
                                        </Form.Group>
                                    )
                                }))             
        })
        )
    }
    
    return(
        <div className='account-controller container'>
            <p className='account-layer'>My Account</p>  
            <div>
                {data && typeof(data) === 'string' && <h3 style={{color:'green'}}>{data}</h3>}
                {error && <h3 style={{color:'#EF6877'}}>Error : Something went wrong !!!</h3>}
            </div>
            <div className='row'>                
                  {
                    Object.keys(form_generator).map((formType,index)=>{
                        return (
                            <div className='col-6' key={index}>          
                                <p className='account-heading'>{(formType.charAt(0)).toUpperCase()+formType.slice(1)}</p>                
                                <div className='account-form'>
                                    <Form key={`form${index}`} noValidate name={formType} validated={validated[formType]} onSubmit={handleSubmitAccount}>
                                        {handleInputFields(form_generator[formType],formType)}
                                        <div className='submit-account'>
                                            <Button key={`btn${index}`} type="submit" className='btnSubmit' size="lg">
                                                {formType === 'login' ? 'Log in' : 'Register'}
                                            </Button>
                                        </div>  
                                    </Form>
                                    {formType === 'login' && <Link className='forgot-password'>Lost your Password?</Link>}
                                </div>
                            </div>
                         )
                    })
                    }                           
            </div>                   
        </div>
    )
}

export default RegisterForm;
 