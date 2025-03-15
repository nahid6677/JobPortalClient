import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link, Links } from "react-router-dom";

const HotJobsCard = ({ job }) => {
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
    location,
    status
  } = job;
  return (
    <div  className="card card-compact bg-base-100 w-full shadow-xl">
      {/* <Link to={`/jobs/${_id}`}> */}
        <div className="flex gap-2">
          <figure>
            <img className="w-16" src={company_logo} alt="Shoes" />
          </figure>
          <div className="">
            <h4 className="text-2xl">{company}</h4>
            <p className="flex items-center gap-1 justify-center">
              <FaMapMarkerAlt></FaMapMarkerAlt>
              {location}
            </p>
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p className="text-start mb-2">{description}</p>
          <div className="flex gap-1 flex-wrap">
            {requirements.map((skill, idx) => (
              <p
                key={idx}
                className="border rounded-md p-2 hover:text-blue-50 "
              >
                {skill}
              </p>
            ))}
          </div>

          <div className="card-actions  flex justify-end items-center">
            <p className="">
              Salary : {salaryRange.min} - {salaryRange.max}{" "}
              {salaryRange.currency}
            </p>
            <Link to={`/jobs/${_id}`}>
              <button className="btn btn-primary">Apply Now</button>
            </Link>
          </div>
        </div>
      {/* </Link> */}
    </div>
  );
};

export default HotJobsCard;
