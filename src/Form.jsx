import React from 'react'
import { useFormik } from 'formik'
import { signUpSchema } from './schemas'


const initialValues={
    name:"",
    email:"",
    password:"",
    confirmpassword:""
}

const Form = () => {
    const {values,errors, touched,handleChange,handleBlur,handleSubmit}=useFormik({
        initialValues: initialValues,
        validationSchema:signUpSchema,
        onSubmit: (values,action) => {
            console.log(values);
            action.resetForm();
        }
    })
    return (
        <>
            <form action="#" onSubmit={handleSubmit}>
                <div className="main">
                    <h1>MADS Pharma</h1>
                    <div className="container">
                        <label htmlFor="name">
                            Your Name:
                        </label>
                        <br />
                        <input 
                        type="text" 
                        id='name' autoComplete='on' placeholder='Your Name' 
                        name='name'
                         value={values.name}
                         onChange={handleChange}
                         onBlur={handleBlur}
                          />
                          <br />
                          {errors.name && touched.name ?(<p className='error'> {errors.name}</p>):null}
                          <br />
                        <label
                         htmlFor="email">
                            Your Email:
                         </label>
                         <br />
                        <input
                         type="email"
                          name="email" id="email" autoComplete='on' placeholder='Your Email' 
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          />
                          <br />
                          {errors.email && touched.email ?(<p className='error'> {errors.email}</p>):null}
                          <br />
                        <label
                         htmlFor="password">
                            Password:
                            </label>
                            <br />
                        <input
                         type="password"
                          name="password" id="password" autoComplete='off' placeholder='Password' 
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}

                          />
                          <br />
                          {errors.password && touched.password ?(<p className='error'> {errors.password}</p>):null}
                          <br />
                        <label 
                        htmlFor="confirmpassword">
                            Confirm Password:
                            </label>
                            <br />
                        <input 
                        type="password" name="confirmpassword"
                         id="confirmpassword" placeholder='Confirm Password' 
                         value={values.confirmpassword}
                         onChange={handleChange}
                         onBlur={handleBlur}
                         />
                         <br />
                         {errors.confirmpassword && touched.confirmpassword ?( <p className='error'> {errors.confirmpassword}</p>):null}
                         <br />
                         <button type='submit'>Submit</button>
                       
                        <br />
                        <p>Already have an account? <a href="#" className='sign'>Sign in </a></p>
                    </div>
                </div>
            </form>

        </>
    )
}

export default Form