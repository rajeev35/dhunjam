import React, {useState, useEffect} from 'react'
//import { useHistory } from 'react-router-dom'


import '../components/login.css'

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

      //const history = useHistory();
      useEffect(() =>{
        if(localStorage.getItem('user-info')){
            //history.push("/add")
        }
      }, [])

     async function login()
      {
        console.warn(username,password)
        let item = {username,password};
        let result = await fetch("https://stg.dhunjam.in/account/admin/login",{
            method:'post',
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json',
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result))
        //history.push("/add")

      }
  return (
    
       <section className='main'>
         <div className='body'>
            <h1>Venue Admin Login</h1>
            <div className='Form'>
                <input type="text" placeholder='Username' 
                onChange={(e)=>setUsername(e.target.value)} className='Username' />
                <br /> <br />
                <input type="password" placeholder='Password'
                onChange={(e)=>setPassword(e.target.value)} className='password' />
                
                <br /><br /><br />
                <button onClick={login} className='button'>Sign in</button>
                <p>New Registration?</p>
            </div>
        </div>
        
       </section>
    
  )
}

export default Login;
