import  { useEffect, useState } from "react";
import UseAuth from "../../hooks/UseAuth";
import {  useNavigate } from "react-router-dom";

const MyPostedJob = () => {
  const { user } = UseAuth();
  const [postedJob, setPostedJob] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    fetch(`http://localhost:3000/jobs?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setPostedJob(data);
        // console.log(data);
      });
  }, [user?.email]);
  // console.log(postedJob)
  const handleView = (id) =>{
    navigate(`/viewApplications/${id}`)
  }
  return (
    <div>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Location</th>
              <th>Application Count</th>
              <th>Application</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {postedJob.map((job,idx) => (
              <tr key={job._id}>
                <th>{idx + 1}</th>
                <td>{job.title}</td>
                <td>{job.company}</td>
                <td>{job.location}</td>
                <td>{job?.applicationCount ? job?.applicationCount : "0"}</td>
                <td>
                  {/* <Link to={`/viewApplications/${job?._id}`}> */}
                    <button disabled={job?.applicationCount > 0 ? false : true} onClick={()=>handleView(job?._id)} className={`btn-sm ${job?.applicationCount > 0 ? 'hover:text-white' : '' }`}> View Applications</button>
                  {/* </Link> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJob;
