import {

  useState

}

from "react";

import EmployeeCard

from "./EmployeeCard";

import AddEmployee

from "./AddEmployee";



function Dashboard(){



  const token =

  localStorage.getItem(
    "token"
  );



  if(!token){

    window.location.reload();

  }





  const [employees,setEmployees] =

  useState([

    {

      firstName:"Aarav Sharma",

      lastName:"",

      email:"aarav@gmail.com",

      phone:"9876543210",

      department:"IT",

      role:"Frontend Developer"

    },



    {

      firstName:"Priya Verma",

      lastName:"",

      email:"priya@gmail.com",

      phone:"9876501234",

      department:"HR",

      role:"HR Manager"

    },



    {

      firstName:"Rohan Singh",

      lastName:"",

      email:"rohan@gmail.com",

      phone:"9876511111",

      department:"Finance",

      role:"Accountant"

    },



    {

      firstName:"Ananya Gupta",

      lastName:"",

      email:"ananya@gmail.com",

      phone:"9876522222",

      department:"Marketing",

      role:"Marketing Executive"

    }

  ]);





  const [search,setSearch] =
  useState("");





  function logout(){

    localStorage.removeItem(
      "token"
    );



    window.location.reload();

  }





  const filteredEmployees =

  employees.filter((employee)=>{

    return employee.firstName

    .toLowerCase()

    .includes(

      search.toLowerCase()

    )

  });





  return(

    <div className="container-fluid p-4">



      {/* NAVBAR */}



      <div className="d-flex justify-content-between align-items-center bg-primary text-white p-3 rounded">



        <h2>

          Employee Dashboard

        </h2>



        <button

          className="btn btn-light"

          onClick={logout}

        >

          Logout

        </button>



      </div>



      {/* ADD EMPLOYEE */}



      <div className="mt-4">

        <AddEmployee

          employees={employees}

          setEmployees={setEmployees}

        />

      </div>



      



      <input

        type="text"

        placeholder="Search Employee"

        className="form-control mt-4"

        onChange={(e)=>

          setSearch(e.target.value)

        }

      />



      



      <div className="row mt-4">



        {

          filteredEmployees.map((employee,index)=>(

            <EmployeeCard

              key={index}

              employee={employee}

            />

          ))

        }



      </div>

    </div>

  )

}

export default Dashboard;