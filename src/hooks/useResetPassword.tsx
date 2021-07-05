import { useState } from "react";

function useResetPassword() {
  const [formData, setFormData] = useState({ password: "", newPassword:""})
  const [errors, setErrors] = useState({} as any);
  const validateForm = (data: { password: string,newPassword:string; }) => {
    console.log('hy',data)
    let errors= {} as any
  
    if (!data.password) {
      errors.password = 'Password is required';
    } else if (data.password.length < 6) {
      errors.password = 'Password needs to be 6 characters or more';
    }
    if (!data.newPassword) {
      errors.newPassword = 'New Password is required';
    } else if (data.newPassword.length < 6) {
        errors.newPassword = ' New Password needs to be 6 characters or more';
      }
  
   console.log('errors',errors)
   return errors
    
  }
  const submitForm = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setErrors(validateForm(formData))
    if(errors // 👈 null and undefined check
      && Object.keys(errors).length === 0 && errors.constructor === Object){
      console.log('stop')

    }
    else{ 
      resetPassword(formData);
      console.log('continue submission')
     
    }
    
  }
  async function resetPassword(data: { password: string;newPassword: string; }) {
   
    let password = data.password;
    let newPassword= data.newPassword
    let postData = {
     
      password,
      newPassword
    }
   let result = await fetch("http://:8000/api/reset-password",{
     method:'POST',
     headers:{
       "Content-Type" : "application/json",
       "Accept": "application/json"

     },
     body:JSON.stringify(postData)
   })
   result = await result.json();
   return result
}

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    console.log(e.target.name)
    const {name , value} = e.target
    setFormData(({ ...formData, [name]: value }));
  };
  return { handleChange, submitForm, formData, errors };
}

export default useResetPassword
