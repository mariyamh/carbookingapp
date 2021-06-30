import {useState} from 'react'
import { useHistory } from 'react-router';

function useLoginForm() {
 
  const [formData, setFormData] = useState({email: "", password: ""})
  const [errors, setErrors] = useState({} as any);
  const validateForm = (data: { email: string; password: string; }) => {
    console.log('hy',data)
    console.log(data.email)
    let errors= {} as any
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
       login(formData);
      console.log('continue submission')
    }
    
  }
  async function login(data: { email: string; password: string; }) {
         let email= data.email;
         let password = data.password;
         let postData = {
           email,
           password
         }
        let result = await fetch("http://:8000/api/login",{
          method:'POST',
          headers:{
            "Content-Type" : "application/json",
            "Accept": "application/json"

          },
          body:JSON.stringify(postData)
        })
        result = await result.json();
        localStorage.setItem('user',JSON.stringify(result))
        return result
  }
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    console.log(e.target.name)
    const {name , value} = e.target
    setFormData(({ ...formData, [name]: value }));
  };
  return { handleChange, submitForm, formData, errors };
  
}

export default useLoginForm
