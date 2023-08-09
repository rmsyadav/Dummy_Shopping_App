import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import customApi from "../customFetchApi/fetchApi";
import { dateConvertIntoMiliSecond } from "../Utils/DateConversion";
import { useState } from "react";
const validate = (values)=>{
    const errors = {};
    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
    }
    
    if (!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
        errors.lastName = 'Must be 20 characters or less';
    }
    
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 8) {
        errors.password = 'Must be 8 characters or greter';
    }
    if (!values.rePassword) {
        errors.rePassword = 'Required';
    } else if (values.password !== values.rePassword) {
        errors.rePassword = 'Must be match with your password field';
    }
    if (!values.gender) {
        errors.gender = 'Please select your gender!';
    }
    if (!values.telphone) {
        errors.telphone = 'phone number is required!';
    } else if(!/^(\+\d{1,3}[- ]?)?\d{10}$/.test(values.telphone))
    {
        errors.telphone = 'must be enter correct phone number';
    }
    if(!values.birthdayDate)
    {
        errors.birthdayDate = 'Date of birth  is required!'; 
    }
    
    
    return errors;

}
const sleep = async (milliseconds) => {
    await new Promise(resolve => {
        return setTimeout(resolve, milliseconds)
    });
};
const Signup =()=>{
    const navigate= useNavigate();
    const [isSuccessRegister,setIsSuccessRegister] = useState();
    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
          birthdayDate: '',
          gender:'',
          telphone:'',
          password:'',
          rePassword:''

        },
        validate,
        onSubmit: async(values) => {
            const userDeatils ={
                username:`${values.firstName} ${values.lastName}`,
                email:values.email,
                dob:dateConvertIntoMiliSecond(values.birthdayDate),
                gender:values.gender,
                phone:values.telphone,
                password:values.password
            }
            const headers = {
                "Content-Type": "text/json"
            };

          const response = await customApi.post('/shopping/api/v1/register',userDeatils);
          if(response.data.statusCode === 200 && response.data.statusMessage === "success!" )
          {
            setIsSuccessRegister("success")
            await sleep(2000);
            navigate('/signin');
          }
          else{
            setIsSuccessRegister("error")
          }
        },
      });
    return(<>
         <section className="vh-100 gradient-custom " style={{backgroundColor: "#eee"}}> 
            <div className="container h-75">
                <div className="row justify-content-center align-items-center">
                <div className="col-12 col-lg-9 col-xl-7">

                </div>
                </div>
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-12 col-lg-9 col-xl-7">
                        <div className="card shadow-2-strong card-registration" style={{borderRadius: "15px"}}>
                            <div className="card-body p-4 p-md-5">
                              {isSuccessRegister && isSuccessRegister === "success" ?
                                <div class="alert alert-success">
                                <strong>Successfully you have registered!</strong>
                                </div>:isSuccessRegister && isSuccessRegister === "error" ?<div class="alert alert-danger">
                                <strong>Something went wrong!</strong>
                                </div>:null
                               }
                                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                                <form onSubmit={formik.handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6 mb-4">

                                        <div class="form-outline">
                                            <input 
                                                type="text" 
                                                id="firstName"
                                                name="firstName"
                                                class="form-control form-control-lg" 
                                                placeholder="First Name"
                                                onChange={formik.handleChange}
                                                value={formik.values.firstName}
                                                onBlur={formik.handleBlur}
                                            />
                                            {formik.touched.firstName && formik.errors.firstName ? (
                                                <label className="form-check-label ms-2 text-danger" htmlFor="femaleGender">{formik.errors.firstName}</label>
                                            ) : null}
                                            
                                        </div>

                                        </div>
                                        <div className="col-md-6 mb-4">

                                        <div class="form-outline">
                                            <input 
                                                type="text" 
                                                id="lastName" 
                                                name="lastName"
                                                onChange={formik.handleChange}
                                                value={formik.values.lastName}
                                                onBlur={formik.handleBlur}
                                                className="form-control form-control-lg" 
                                                placeholder="Last Name"
                                            />
                                            {formik.touched.lastName && formik.errors.lastName ? (
                                                <label className="form-check-label ms-2 text-danger" htmlFor="femaleGender">{formik.errors.lastName}</label>
                                            ) : null}
                                            
                                        </div>

                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-4 d-flex align-items-center">

                                        <div className="form-outline datepicker w-100">
                                            <input 
                                            type="date" 
                                            className="form-control form-control-lg" 
                                            id="birthdayDate" 
                                            name="birthdayDate"
                                            onChange={formik.handleChange}
                                            value={formik.values.birthdayDate}
                                            onBlur={formik.handleBlur}
                                            placeholder="Birthday(dd/mm/yyyy)" 
                                            />
                                             {formik.touched.birthdayDate && formik.errors.birthdayDate ? (
                                                <label className="form-check-label ms-2 text-danger" htmlFor="femaleGender">{formik.errors.birthdayDate}</label>
                                            ) : null}
                                        </div>

                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <h6 className="mb-2 pb-1">Gender: </h6>

                                            <div className="form-check form-check-inline">
                                                <input 
                                                className="form-check-input" 
                                                type="radio" 
                                                name="gender" 
                                                id="femaleGender"
                                                value="female"
                                                onChange={formik.handleChange} 
                                                />
                                                <label className="form-check-label" htmlFor="femaleGender">Female</label>
                                            </div>

                                            <div class="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="gender" id="maleGender" onChange={formik.handleChange} 
                                                value="male" />
                                                <label className="form-check-label" htmlFor="maleGender">Male</label>
                                            </div>

                                            <div class="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="gender" id="otherGender" onChange={formik.handleChange} 
                                                value="other" />
                                                <label className="form-check-label" htmlFor="otherGender">Other</label>
                                            </div>
                                            {formik.errors.gender ? (
                                                <label className="form-check-label ms-2 text-danger" htmlFor="femaleGender">{formik.errors.gender}</label>
                                            ) : null}

                                            </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 mb-4 pb-2">

                                        <div class="form-outline">
                                            <input 
                                            type="email" 
                                            id="email" 
                                            name="email"
                                            class="form-control form-control-lg" 
                                            placeholder="Email"
                                            onChange={formik.handleChange}
                                            value={formik.values.email} 
                                            onBlur={formik.handleBlur}
                                            />
                                            {formik.touched.email && formik.errors.email ? (
                                                <label className="form-check-label ms-2 text-danger" htmlFor="femaleGender">{formik.errors.email}</label>
                                            ) : null}
                                        </div>

                                        </div>
                                        <div class="col-md-6 mb-4 pb-2">

                                        <div class="form-outline">
                                            <input 
                                            type="tel" 
                                            id="telphone" 
                                            name="telphone"
                                            class="form-control form-control-lg" 
                                            placeholder="Phone Number"
                                            onChange={formik.handleChange}
                                            value={formik.values.telphone} 
                                            onBlur={formik.handleBlur}
                                            />
                                            {formik.touched.telphone && formik.errors.telphone ? (
                                                <label className="form-check-label ms-2 text-danger" htmlFor="femaleGender">{formik.errors.telphone}</label>
                                            ) : null}
                                        </div>

                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-4">

                                        <div class="form-outline">
                                            <input 
                                            type="password" 
                                            id="password" 
                                            name="password"
                                            class="form-control form-control-lg" 
                                            placeholder="Enter Password"
                                            onChange={formik.handleChange}
                                            value={formik.values.password} 
                                            onBlur={formik.handleBlur}
                                            />
                                            {formik.touched.password && formik.errors.password ? (
                                                <label className="form-check-label ms-2 text-danger" htmlFor="femaleGender">{formik.errors.password}</label>
                                            ) : null}
                                        </div>

                                        </div>
                                        <div className="col-md-6 mb-4">

                                        <div class="form-outline">
                                            <input 
                                            type="password" 
                                            id="rePassword"
                                            name="rePassword" 
                                            class="form-control form-control-lg" 
                                            placeholder="Re Enter Password"
                                            onChange={formik.handleChange}
                                            value={formik.values.rePassword}
                                            onBlur={formik.handleBlur} 
                                            />
                                             {formik.touched.rePassword && formik.errors.rePassword ? (
                                                <label className="form-check-label ms-2 text-danger" htmlFor="femaleGender">{formik.errors.rePassword}</label>
                                            ) : null}
                                        </div>

                                        </div>
                                    </div>
                                    <div class="mt-4 pt-2 d-flex justify-content-center align-items-center ">
                                        <input class="btn primary-button btn-lg" type="submit" value="Register" />
                                    </div>
                                    <div className="mt-4 pt-2 d-flex justify-content-center align-items-center">
                                        <span style={{fontSize:"15px"}}>Have already register?<NavLink to="/signin">Login</NavLink></span>
                                    </div>
                                </form>
                            </div>  
                        </div>  
                    </div>
                </div>
            </div>
         </section>
    </>)
}

export default Signup;