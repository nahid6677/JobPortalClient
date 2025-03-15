// import  { useState } from "react";
import { useLoaderData } from "react-router-dom";

const ViewApplications = () => {
  const application = useLoaderData();
  // console.log(application)
  const handleStatusUpdate = (e, job_id, id) => {
    const status = e.target.value;
    const idAndStatus = {
      status,
      id
    }
    // console.log(status);
    fetch(`http://localhost:3000/job-application/${job_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json", // Corrected typo
      },
      body: JSON.stringify(idAndStatus)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  return (
    <div>
      <h2 className="text-3xl text-center"> Application for this job</h2>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Serial</th>
              {/* <th>resume</th> */}
              <th>Git Hub</th>
              <th>LinkedIn</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {application.map((people, idx) => (
              <tr key={idx}>
                <th>{idx + 1}</th>
                {/* <td>{people.resume}</td> */}
                <td>{people.gitHub}</td>
                <td>{people.linkedIn}</td>
                <td>{people.applicant_email}</td>
                <td>
                  <select
                    onChange={(e) => handleStatusUpdate(e, people.job_id, people._id)}
                    defaultValue={people.status || "Change Status"}
                    className="select select-sm"
                  >
                    <option disabled={true}>Change Status</option>
                    <option>Under Review</option>
                    <option>Set Interview</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
