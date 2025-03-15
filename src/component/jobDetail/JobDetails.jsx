// import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import team3 from "../../assets/team/team_1.jpg";
const JobDetails = () => {
  const job = useLoaderData();
  const {
    title,
    company,
    company_logo,
    requirements,
    description,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    responsibilities,
    _id,
    status,
    location,
  } = job;
  return (
    <div className=" min-h-screen border rounded-md p-5 mb-5">
      <div className="md:flex md:justify-between   ">
        <div className="text-start">
          <h2 className="text-2xl font-bold mt-5">{title}</h2>
          <p className="text-sm">{applicationDeadline ? applicationDeadline : "Null"}</p>
          <p className="text-sm">Status : {status ? status : "active"}</p>
        </div>
        <Link to={`/jobapply/${_id}`}>
          <button className="btn btn-primary mt-5">Apply Now</button>
        </Link>
      </div>
      <div className="divider"></div>
      <div className=" p-5 rounded-md">
        <div className="">
          <img
            className="rounded-lg w-full mx-auto sm:w-1/2 h-auto opacity-50"
            src={team3}
            alt=""
          />
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-100">Over View</h2>
          <img className="w-12 rounded-xl" src={company_logo} alt="" />
        </div>
        <div className="divider"></div>
        <div className="space-y-3">
          <p className="text-start text-xl">
            <span className="text-gray-200 w-[170px] inline-block font-bold">
              Job Type :
            </span>{" "}
            {jobType}
          </p>
          <p className="text-start text-xl">
            <span className="text-gray-200 w-[170px] inline-block font-bold">
              Category :
            </span>{" "}
            {category}
          </p>
          <p className="text-start text-xl">
            <span className="text-gray-200 w-[170px] inline-block font-bold">
              Company :
            </span>{" "}
            {company}
          </p>
          <div className="text-start text-xl flex gap-2">
            <span className="text-gray-200 w-[170px] inline-block font-bold">
              Requirements :
            </span>{" "}
            <div className="">
              {requirements.map((item, idx) => (
                <p className="" key={idx}>
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="text-start text-xl flex gap-2">
            <span className="text-gray-200 w-[170px] inline-block font-bold">
              Responsibilities :
            </span>{" "}
            <div className="">
              {responsibilities.map((item, idx) => (
                <p className="" key={idx}>
                  {item}
                </p>
              ))}
            </div>
          </div>
          <p className="text-start text-xl">
            <span className="text-gray-200 w-[170px] inline-block font-bold">
              SalaryRange :
            </span>{" "}
            {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
          </p>
          <p className="text-start text-xl">
            <span className="text-gray-200 w-[170px] inline-block font-bold">
              Location :
            </span>{" "}
            {location}
          </p>
          <div className="text-start text-xl flex gap-2">
            <span className="text-gray-200 w-[170px] inline-block font-bold">
              Description :
            </span>{" "}
            <div className="ml-6">{description}</div>
          </div>
          <div className="w-full">
            <Link to={`/jobapply/${_id}`}>
              <button className="btn btn-primary mt-5">Apply Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
