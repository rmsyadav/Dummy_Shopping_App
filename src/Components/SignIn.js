import { useNavigate } from "react-router-dom";
import Signin from "../Stylesheet/SignIn.css";
import { useFormik } from 'formik';
import customApi from "../customFetchApi/fetchApi";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../Slice/userDetailsSlice";


const validate = (values)=>{
    const errors = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.password) {
        errors.password = 'Required';
    }
      
    return errors;

}
const sleep = async (milliseconds) => {
    await new Promise(resolve => {
        return setTimeout(resolve, milliseconds)
    });
};
const SignIn = ()=>{
    const [isSuccessLogin,setIsSuccessLogin] = useState();
   const dispatch = useDispatch();
    const navigate= useNavigate();
    const formik = useFormik({
        initialValues: {
          email: '',
          password:''
        },
        validate,
        onSubmit: async(values) => {
            const userDeatils ={
                email:values.email,
                password:values.password
            }
          const response = await customApi.post('/shopping/api/v1/login',userDeatils);
          if(response.data.statusCode === 200 && response.data.statusMessage === "success!" )
          {
            dispatch(setUserDetails(response.data));
            setIsSuccessLogin("success")
            await sleep(2000);
            navigate('/');
          }
          else{
            setIsSuccessLogin("error")
          }

        },
      });

   const redirectToSignUpPage = ()=>{
    navigate('/signup');
   }
    return(
    <>
    <section class="h-50 gradient-form" style={{backgroundColor: "#eee"}}>
        <div class="container py-5 h-75">
            <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-xl-10">
                <div class="card rounded-3 text-black">
                <div class="row g-0">
                    <div class="col-lg-6">
                    <div class="card-body p-md-5 mx-md-4">
                        {isSuccessLogin && isSuccessLogin === "success" ?
                          <div class="alert alert-success">
                          <strong>Successfully you have loggedIn!</strong>
                         </div>:isSuccessLogin && isSuccessLogin === "error" ?<div class="alert alert-danger">
                         <strong>email or password is wrong!</strong>
                         </div>:null
                        }
                        
                        <div class="text-center">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                            style={{width: "185px"}} alt="logo"/>
                        <h4 class="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                        </div>

                        <form onSubmit={formik.handleSubmit}>
                        <p>Please login to your account</p>

                        <div class="form-outline mb-4">
                            <input
                            type="email" 
                            id="email" 
                            name="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            class="form-control"
                            placeholder="email address" 
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <label className="form-check-label ms-2 text-danger" htmlFor="femaleGender">{formik.errors.email}</label>
                            ) : null}
                        </div>

                        <div class="form-outline mb-4">
                            <input 
                            type="password" 
                            id="password" 
                            name="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            class="form-control" 
                            placeholder="Password"
                            />
                            {formik.touched.password && formik.errors.password ? (
                                <label className="form-check-label ms-2 text-danger" htmlFor="femaleGender">{formik.errors.password}</label>
                            ) : null}
                        </div>

                        <div class="text-center pt-1 mb-5 pb-1">
                            <input class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit" value="Login"></input>
                            <a class="text-muted" href="#!">Forgot password?</a>
                        </div>

                        <div class="d-flex align-items-center justify-content-center pb-4">
                            <p class="mb-0 me-2">Don't have an account?</p>
                            <button type="button" class="btn btn-outline-danger" onClick={redirectToSignUpPage}>Create new</button>
                        </div>

                        </form>

                    </div>
                    </div>
                    <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                        <h4 class="mb-4">We are more than just a company</h4>
                        <p class="large mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    </>)
}

export default SignIn;