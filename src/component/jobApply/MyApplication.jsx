import { useEffect, useState } from "react";
import UseAuth from "../../hooks/UseAuth";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const MyApplication = () => {
  const { user } = UseAuth();
  const [jobs, setJobs] = useState([]);
  const instanceAxios = useAxiosSecure()
  // console.log(jobs, "aaaa");
  useEffect(() => {
    // fetch(`http://localhost:3000/job-application?email=${user.email}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setJobs(data);
    //     // console.log(data);
    //   });
    // axios.get(`http://localhost:3000/job-application?email=${user.email}`, {
    //   withCredentials: true // when use {withCredentials:true } then sent my browser cookies jwt token to the server side.
    // })
    // .then(data=>{
    //   console.log(data.data)
    //   setJobs(data.data);
    // })
    instanceAxios.get(`/job-application?email=${user.email}`)
      .then(data => {
        console.log(data.data)
        setJobs(data.data);
      })

  }, [user.email]);
  const handledelete = (id) => {
    fetch(`http://localhost:3000/job-application/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          setJobs((privious) => privious?.filter(job => job._id !== id))
        }
      })
  };
  return (
    <div>
      <h2>My Application</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, idx) => (
              <tr key={idx}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={job.company_logo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job.title}</div>
                      <div className="text-sm opacity-50">{job.location}</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>{job.status}</td>
                <th>
                  <button
                    onClick={() => handledelete(job._id)}
                    className="btn btn-ghost btn-xs"
                  >
                    X
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplication;
