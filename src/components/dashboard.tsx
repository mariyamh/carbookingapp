import React, { useEffect } from 'react'
import { useHistory } from 'react-router'

function Dashboard() {
    const history = useHistory()
    useEffect(() => {
      if(localStorage.getItem('user')){
        history.push('dashboard')
      }
      else{
          history.push('login')
      }
     
    }, [history])
  
    return (
        <div>
            <h1>My dashboard</h1>
        </div>
    )
}

export default Dashboard
