import React from 'react'
import { useLoaderData } from 'react-router'

export default function JobDetails() {
    const {title,company,jobType} = useLoaderData();
    console.log({title,company,jobType});
    return (
        <div>
            <h2>Job Details</h2>
            <h2>:Title: {title}</h2>
            <p>Company: {company}</p>
            <p>Job Title: {jobType}</p>
        </div>
    )
}
