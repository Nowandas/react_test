import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
// import Navbar from "./components/Navbar"
// import Hero from "./components/Hero"
// import Homecards from "./components/Homecards"
// import JobListings from "./components/JobListings"
// import ViewAllJobs from "./components/ViewAllJobs"
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage'
import JobPage from './pages/JobPage'
import { jobLoader } from './loaders/JobLoader'
import AddJobPage from './pages/AddJobPage'

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<MainLayout />} key="main-layout">
      <Route index element={<HomePage />} key="home-page" />,
      <Route path='/jobs' element={<JobsPage />} key="jobs-page" />,
      <Route path='/add-job' element={<AddJobPage />} key="add-job-page" />,
      <Route path='/jobs/:id' element={<JobPage />} loader={jobLoader} key="job-page" />,
      <Route path='*' element={<NotFoundPage />} key="not-found-page" />,
    </Route>
  ])
   
)

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
