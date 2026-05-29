import { useState }

from "react";



function AddEmployee({

  employees,

  setEmployees

}){

  const [name,setName] =
  useState("");

  const [email,setEmail] =
  useState("");

  const [phone,setPhone] =
  useState("");

  const [department,setDepartment] =
  useState("");

  const [role,setRole] =
  useState("");



  function addEmployee(){

    const newEmployee = {

      firstName:name,

      lastName:"",

      email:email,

      phone:phone,

      department:department,

      role:role

    };



    setEmployees([

      ...employees,

      newEmployee

    ]);



    setName("");

    setEmail("");

    setPhone("");

    setDepartment("");

    setRole("");

  }





  return(

    <div className="card p-4 shadow">

      <h3 className="mb-4">

        Add Employee

      </h3>



      <input

        type="text"

        placeholder="Full Name"

        className="form-control mb-3"

        value={name}

        onChange={(e)=>

          setName(e.target.value)

        }

      />



      <input

        type="email"

        placeholder="Email"

        className="form-control mb-3"

        value={email}

        onChange={(e)=>

          setEmail(e.target.value)

        }

      />



      <input

        type="text"

        placeholder="Phone"

        className="form-control mb-3"

        value={phone}

        onChange={(e)=>

          setPhone(e.target.value)

        }

      />



      <input

        type="text"

        placeholder="Department"

        className="form-control mb-3"

        value={department}

        onChange={(e)=>

          setDepartment(e.target.value)

        }

      />



      <input

        type="text"

        placeholder="Role"

        className="form-control mb-3"

        value={role}

        onChange={(e)=>

          setRole(e.target.value)

        }

      />



      <button

        className="btn btn-success"

        onClick={addEmployee}

      >

        Add Employee

      </button>

    </div>

  )

}

export default AddEmployee;