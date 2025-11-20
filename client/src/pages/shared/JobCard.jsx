import React from 'react'
import { Link } from 'react-router-dom'

export default function JobCard({ job }) {
    console.log(job._id)
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {job.title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>Salary : {job.salaryRange?.min} - {job.salaryRange?.max} {job.salaryRange?.currency}</p>
                <p>{job.description}</p>
                <div className="card-actions">
                    {
                        job?.requirements?.map((skill, index) => <div key={index} className="badge badge-outline">{skill}</div>)
                    }

                </div>
                <div className="card-actions justify-end">
                    <Link to={`/jobs/${job._id}`}>
                        <button className='btn btn-primary'>Apply Now</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
