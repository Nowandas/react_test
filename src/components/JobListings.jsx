import JobListing from "./JobListing"
import PropTypes from "prop-types";
import {useState, useEffect} from "react";
import Spinner from "./Spinner";
import NoJobsAvailable from "./NoJobsAvailable";
import ErrorMessage from "./ErrorMessage";

const JobListings = ({isHome = false}) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl= isHome ? "/api/jobs?is_featured=true" : "/api/jobs";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log('Error fetching data', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchJobs();
  }, [isHome]);

  return (
    <>
    { jobs.length > 0 ? <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Featured Jobs" : "All Jobs"}
        </h2>
            {loading ? (
              <Spinner loading={loading} />
            ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {jobs.map((job) => (
                <JobListing key={job.id} job={job} />
            ))}
        </div>
            )}

      </div>
    </section> : 
      error ?<ErrorMessage errorMessage={error.message}/> : <NoJobsAvailable /> 
    }
    </>
  )
}

JobListings.propTypes = {
  isHome:PropTypes.bool,
};


export default JobListings