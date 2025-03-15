// import React from "react";
import Swal from "sweetalert2";
import UseAuth from "../../hooks/UseAuth";
import { useNavigate } from "react-router-dom";

const AddJob = () => {
  const { user } = UseAuth();
  const navigate = useNavigate()
  const handleAddJob = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    // console.log(initialData);
    const { min, max, currency, ...newJob } = initialData;
    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");
    newJob.status = newJob.status && "active"
    // console.log(newJob);
    fetch(`http://localhost:3000/jobs`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Job Added",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/myPostedJob")
        }
      });
  };
  return (
    <div className="card bg-base-100 w-full mx-auto max-w-xl shrink-0 shadow-2xl">
      <form onSubmit={handleAddJob} className="card-body">
        {/* Job Title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Title</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="Job title"
            className="input input-bordered"
            required
          />
        </div>
        {/* >Job Location */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Location</span>
          </label>
          <input
            type="text"
            name="location"
            placeholder="Job Location"
            className="input input-bordered"
            required
          />
        </div>
        {/* >Job Company*/}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Company</span>
          </label>
          <input
            type="text"
            name="company"
            placeholder="Job Location"
            className="input input-bordered"
            required
          />
        </div>
        {/* Job Type */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Type</span>
          </label>
          <select
            name="jobType"
            defaultValue={"Pick a Job Type"}
            className="select select-bordered w-full max-w-xl"
          >
            <option disabled>Pick a Job Type</option>
            <option>Full-time</option>
            <option>Intern</option>
            <option>Part-time</option>
          </select>
        </div>
        {/* job catagory */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Field</span>
          </label>
          <select
            name="category"
            defaultValue={"Pick a Job Field"}
            className="select select-bordered w-full max-w-xl"
          >
            <option disabled>Pick a Job Field</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
          </select>
        </div>
        {/* Salary Range */}
        {/* <h3 className="text-start">Salary Range</h3> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-end">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Salary Range</span>
            </label>
            <input
              type="text"
              name="min"
              placeholder="Min"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              name="max"
              placeholder="Max"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <select
              name="currency"
              defaultValue={"Pick a Currency"}
              className="select select-bordered w-full max-w-xs"
            >
              <option disabled>Pick a Currency</option>
              <option>BDT</option>
              <option>USD</option>
              <option>INR</option>
            </select>
          </div>
        </div>
        {/* Job Description */}
        <div className="form-control">
          <textarea
            name="description"
            placeholder="Description"
            className="textarea textarea-bordered textarea-sm w-full max-w-xl"
            required
          ></textarea>
        </div>
        {/* >Job Requirements */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Requirements</span>
          </label>
          <textarea
            name="requirements"
            placeholder="Each requirements in a new line"
            className="textarea textarea-bordered textarea-sm w-full max-w-xl"
            required
          ></textarea>
        </div>
        {/* >Job Responsibilities */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Responcibilities</span>
          </label>
          <textarea
            name="responsibilities"
            placeholder="Wright each responsibilities in a new line"
            className="textarea textarea-bordered textarea-sm w-full max-w-xl"
            required
          ></textarea>
        </div>
        {/* >Hr Name*/}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Hr Name</span>
          </label>
          <input
            type="text"
            name="hr_name"
            defaultValue={user?.displayName}
            className="input input-bordered"
            required
          />
        </div>
        {/* application Deadline*/}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Application Deadline</span>
          </label>
          <input
            type="date"
            name="applicationDeadline"
            placeholder="Deadline"
            className="input input-bordered"
            required
          />
        </div>
        {/* >Hr Email*/}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Hr Email</span>
          </label>
          <input
            type="email"
            name="hr_email"
            defaultValue={user?.email}
            className="input input-bordered"
            required
          />
        </div>
        {/* >Company Logo*/}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company Logo</span>
          </label>
          <input
            type="url"
            name="company_logo"
            placeholder="Company Logo URL"
            className="input input-bordered"
            required
          />
        </div>
        {/* check box */}
        <div className="form-control mt-3">
          <label className="flex gap-4 cursor-pointer"><input
              type="checkbox"
              name="status"
              required
              className="checkbox checkbox-primary"
            />
            <span className="label-text">Is active</span>
            
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
