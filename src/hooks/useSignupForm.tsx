import { useEffect, useState } from "react";
import { useHistory } from "react-router";

function useSignupForm() {
  const history = useHistory()
  useEffect(() => {
    if(localStorage.getItem('user')){
      history.push('dashboard')
    }
   
  }, [])
  const [formData, setFormData] = useState({name: "",email: "", password: "", confirmPassword:""})
  const [errors, setErrors] = useState({} as any);
  const validateForm = (data: { name:string ,email: string; password: string,confirmPassword:string; }) => {
    console.log('hy',data)
    console.log(data.email)
    let errors= {} as any
    if(!data.name.trim()){
        errors.name = "email is required"
      }
    if(!data.email){
      errors.email = "email is required"
    }
    if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!data.password) {
      errors.password = 'Password is required';
    } else if (data.password.length < 6) {
      errors.password = 'Password needs to be 6 characters or more';
    }
    if (!data.confirmPassword) {
      errors.confirmPassword = 'Password is required';
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = 'Passwords do not match';
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
      register(formData)
      console.log('continue submission')
    }
    
  }
  async function register(data: { name:string;email: string; password: string; }) {
    let name = data.name;
    let email= data.email;
    let password = data.password;
    let postData = {
      name,
      email,
      password
    }
   let result = await fetch("http://:8000/api/register",{
     method:'POST',
     headers:{
       "Content-Type" : "application/json",
       "Accept": "application/json"

     },
     body:JSON.stringify(postData)
   })
   result = await result.json();
   localStorage.setItem('user',JSON.stringify(result))
   history.push("dashboard")
   //return result
}
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    console.log(e.target.name)
    const {name , value} = e.target
    setFormData(({ ...formData, [name]: value }));
  };
  return { handleChange, submitForm, formData, errors };
}

export default useSignupForm
