import JobCard from "../shared/JobCard"

export default function HotJobs({ jobs, loading, error }) {

    if (loading) {
        return <div>Loading jobs.....!</div>
    }

    if (error) {
        return <div>Error : {error}</div>
    }

    if (!jobs || jobs.length === 0) {
        return <div>No Jobs Found</div>
    }

    return (
        <div>
            <div className="grid grid-cols-4 gap-10">
                {
                    jobs.map(job => <JobCard key={job._id} job={job} />)
                }
            </div>
        </div>
    )
}
