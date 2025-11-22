import { Link, useLoaderData } from "react-router";

export default function JobDetails() {
  const { _id,title, company, jobType } = useLoaderData();
  console.log({ title, company, jobType });
  return (
    <div>
      <h2>Job Details</h2>
      <h2>:Title: {title}</h2>
      <p>Company: {company}</p>
      <p>Job Title: {jobType}</p>
      <Link to={`/jobapply/${_id}`}>
        <button className="btn btn-primary">Apply Now</button>
      </Link>
    </div>
  );
}
