import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Homecards from "./components/Homecards"
import JobListings from "./components/JobListings"
import ViewAllJobs from "./components/ViewAllJobs"

const router = createBrowserRouter(
   
)


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero title="Become a Reacst Dev" subtitle="Find the React job that fits your skills and needs" />
      <Homecards />
      <JobListings />
      <ViewAllJobs />

    </div>
  )
}

export default App
