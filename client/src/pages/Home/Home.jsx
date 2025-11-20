import { Suspense, useEffect, useState } from "react";
import Banner from "./Banner";
import HotJobs from "./HotJobs";

export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [lodaing, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/jobs')
      .then(res => {
        if (!res.ok) {
          throw new Error("Faild to fetch jobs")
        }
        return res.json();
      })
      .then(data => {
        setJobs(data)
      })
      .catch(err => {
        console.log(err)
        setError(err.message)
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      <Banner />
      <div className="container mx-auto">
        <Suspense fallback={<h1>Loading...</h1>}>
          <HotJobs jobs={jobs} lodaing={lodaing} error={error} />
        </Suspense>
      </div>
    </>
  )
}
