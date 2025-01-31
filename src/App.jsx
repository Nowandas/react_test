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
import AppLayout from './layouts/AppLayout'
import AppContent from './pages/AppContent'

const App = () => {
  
  // add new job
  const addJob = async (newJob) => {
    console.log(newJob);
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers : {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    console.log('Added new Job')
    console.log(newJob)
    console.log(res.text)
    return;
  }

  // delete job
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    console.log('delete',id);  
    return;

  }
  
  const router = createBrowserRouter(
    createRoutesFromElements([
      <Route path="/" element={<MainLayout />} key="main-layout">
        <Route index element={<HomePage />} key="home-page" />,
        <Route path='/jobs' element={<JobsPage />} key="jobs-page" />,
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} key="add-job-page" />,
        <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} key="job-page" />,
        <Route path='*' element={<NotFoundPage />} key="not-found-page" />,
      </Route>
    ])
     
  )
  
  const appRouter = createBrowserRouter(
    createRoutesFromElements([
      <Route path="/app" element={<AppLayout />} key="app-layout">
        <Route index element={<AppContent />} key="appcontent-page" />,
        <Route path='/app/*' element={<NotFoundPage />} key="not-found-page" />,
      </Route>
  
    ])
     
  )

  return (
    <div>
      <RouterProvider router={router} />
      {/* <RouterProvider router={appRouter} /> */}
    </div>
  )
}

export default App
