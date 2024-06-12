import * as  yup from 'yup'


export const signUpSchema=yup.object({
    name:yup.string().min(2).max(20).required('*Please enter your name '),
    email:yup.string().email().required('*please enter your email'),
    password:yup.string().min(6).required('*plaese enter your password'),
    confirmpassword:yup.string().required('*please enter your password').oneOf([yup.ref("password"),null] ,'*Password must match')
})