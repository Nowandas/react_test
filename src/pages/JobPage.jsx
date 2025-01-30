
import { useLoaderData } from "react-router-dom";
// import Spinner from "../components/Spinner";

const JobPage = () => {
  const job= useLoaderData();

  // useEffect(() => {
  //   const fetchJob = async () => {
  //     try {
  //       const res = await fetch(`/api/jobs/${id}`);
  //       const data = await res.json();
  //       setJob(data);
  //     } catch (error) {
  //       console.log('Error fetching data', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   fetchJob();
  // }, [id]);

  return (
    <h1>{job.title}</h1>
  )
}

export {JobPage as default};