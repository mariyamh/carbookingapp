import {useEffect, useState} from 'react'
import { useHistory } from 'react-router';

function useLoginForm() {
  const history = useHistory()
  useEffect(() => {
    if(localStorage.getItem('user')){
      history.push('dashboard')
    }
   
  }, [history])
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
    if (Object.keys(errors).length === 0 ) {
      login(formData);
      console.log('continue submission')

    } else {
      
      console.log('stop')
    }
   
  }
  async function login(data: { email: string; password: string; }) {
         let email= data.email;
         let password = data.password;
         let postData = {
           email,
           password
         }
        let result = await fetch("http://localhost:8000/api/login",{
          method:'POST',
          headers: {
         'Content-Type': 'application/json',
         'Accept':'application/json'
        },
          body:JSON.stringify(postData)
        })
        let resResult = await result.json();
        console.log(resResult);
        if(!resResult.data || resResult.data === null || resResult.data === ''){
          console.log('im empty');
        }
        else{
          console.log(JSON.stringify(resResult))
        localStorage.setItem('user',JSON.stringify(resResult))
        
          history.push('dashboard')
        
        return result
        }
      //  return false;
       
  }
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    console.log(e.target.name)
    const {name , value} = e.target
    setFormData(({ ...formData, [name]: value }));
  };
  return { handleChange, submitForm, formData, errors };
  
}

export default useLoginForm
