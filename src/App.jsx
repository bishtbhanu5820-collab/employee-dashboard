import { useState }

from "react";

import Login

from "./components/Login";

import Dashboard

from "./components/Dashboard";



function App(){

  const token =

  localStorage.getItem(
    "token"
  );



  const [isLogin,setIsLogin] =

  useState(token ? true : false);





  return(

    <>

      {

        isLogin ?

        <Dashboard />

        :

        <Login

          setIsLogin={setIsLogin}

        />

      }

    </>

  )

}

export default App;