import { NavLink } from "react-router-dom";
import { useFormik } from 'formik';

const Signup =()=>{

    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
          birthdayDate: '',
          inlineRadioOptions:'',
          telphone:'',
          password:'',
          rePassword:''

        },
        onSubmit: async(values) => {
         
        },
      });
    return(<>
         <section className="vh-100 gradient-custom">
            <div className="container h-75">
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-12 col-lg-9 col-xl-7">
                        <div className="card shadow-2-strong card-registration" style={{borderRadius: "15px"}}>
                            <div className="card-body p-4 p-md-5">
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
                                            />
                                            <label className="form-check-label ms-2" htmlFor="femaleGender">Female</label>
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
                                                className="form-control form-control-lg" 
                                                placeholder="Last Name"
                                            />
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
                                            placeholder="Birthday(dd/mm/yyyy)" 
                                            />
                
                                        </div>

                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <h6 className="mb-2 pb-1">Gender: </h6>

                                            <div className="form-check form-check-inline">
                                                <input 
                                                className="form-check-input" 
                                                type="radio" 
                                                name="inlineRadioOptions" 
                                                id="femaleGender"
                                                value="option1"
                                                onChange={formik.handleChange} 
                                                />
                                                <label className="form-check-label" htmlFor="femaleGender">Female</label>
                                            </div>

                                            <div class="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender" onChange={formik.handleChange} 
                                                value="option2" />
                                                <label className="form-check-label" htmlFor="maleGender">Male</label>
                                            </div>

                                            <div class="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender" onChange={formik.handleChange} 
                                                value="option3" />
                                                <label className="form-check-label" htmlFor="otherGender">Other</label>
                                            </div>

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
                                            />
                                            
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
                                            />
                                           
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
                                            />
                    
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
                                            />
                                        </div>

                                        </div>
                                    </div>
                                    <div class="mt-4 pt-2 d-flex justify-content-center align-items-center ">
                                        <input class="btn primary-button btn-lg" type="submit" value="Register" />
                                    </div>
                                    <div className="mt-4 pt-2 d-flex justify-content-center align-items-center">
                                        <span style={{fontSize:"15px"}}>Have already register?<NavLink to="/login">Login</NavLink></span>
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