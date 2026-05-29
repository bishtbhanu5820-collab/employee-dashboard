function EmployeeCard({

  employee

}){

  return(

    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">

      <div className="card p-3 shadow h-100">

        <h4>

          {employee.firstName}

          {" "}

          {employee.lastName}

        </h4>



        <p>

          <b>Email:</b>

          {" "}

          {employee.email}

        </p>



        <p>

          <b>Phone:</b>

          {" "}

          {employee.phone}

        </p>



        {

          employee.department &&

          <p>

            <b>Department:</b>

            {" "}

            {employee.department}

          </p>

        }



        {

          employee.role &&

          <p>

            <b>Role:</b>

            {" "}

            {employee.role}

          </p>

        }

      </div>

    </div>

  )

}

export default EmployeeCard;