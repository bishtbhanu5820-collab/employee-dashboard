import { useState }

from "react";



function Login({

  setIsLogin

}){

  const [username,setUsername] =
  useState("");

  const [password,setPassword] =
  useState("");

  const [message,setMessage] =
  useState("");



  async function login(){

    const response = await fetch(

      "https://dummyjson.com/auth/login",

      {

        method:"POST",

        headers:{
          "Content-Type":"application/json"
        },

        body: JSON.stringify({

          username: username,

          password: password,

          expiresInMins:30

        })

      }

    );



    const data =
    await response.json();



    console.log(data);



    if(data.accessToken){

      localStorage.setItem(

        "token",

        data.accessToken

      );



      setIsLogin(true);

    }

    else{

      setMessage(

        "Invalid Credentials"

      );

    }

  }





  return(

    <div className="container mt-5 login-box">

      <h1 className="text-center mb-4">

        Employee Login

      </h1>



      <input

        type="text"

        placeholder="Enter Username"

        className="form-control mb-3"

        onChange={(e)=>

          setUsername(e.target.value)

        }

      />



      <input

        type="password"

        placeholder="Enter Password"

        className="form-control mb-3"

        onChange={(e)=>

          setPassword(e.target.value)

        }

      />



      <button

        className="btn btn-primary w-100"

        onClick={login}

      >

        Login

      </button>



      <p className="text-danger text-center mt-3">

        {message}

      </p>

    </div>

  )

}

export default Login;