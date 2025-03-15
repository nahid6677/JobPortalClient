import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layOut/MainLayout";
import Home from "./Home/Home";
import Register from "./register/Register";
import LogIn from "./register/LogIn";
import JobDetails from "./jobDetail/JobDetails";
import PrivateRoute from "./privateRoute/PrivateRoute";
import JobApply from "./jobApply/JobApply";
import MyApplication from "./jobApply/MyApplication";
import AddJob from "./addJob/AddJob";
import MyPostedJob from "./jobApply/MyPostedJob";
import ViewApplications from "./viewApplications/ViewApplications";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h3>Error Element</h3>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "jobs/:id",
        element: (
          <PrivateRoute>
            <JobDetails></JobDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
      },
      {
        path: "/jobapply/:id",
        element: (
          <PrivateRoute>
            <JobApply></JobApply>
          </PrivateRoute>
        ),
      },
      {
        path: "/addJob",
        element: (
          <PrivateRoute>
            <AddJob></AddJob>
          </PrivateRoute>
        ),
      },
      {
        path: "/viewApplications/:job_id",
        element: (
          <PrivateRoute>
            <ViewApplications></ViewApplications>
          </PrivateRoute>
        ),
        loader: ({params}) => fetch(`http://localhost:3000/job-application/jobs/${params.job_id}`)
      },
      {
        path: "/myPostedJob",
        element: (
          <PrivateRoute>
            <MyPostedJob></MyPostedJob>
          </PrivateRoute>
        ),
      },
      {
        path: "/myapplication",
        element: (
          <PrivateRoute>
            <MyApplication></MyApplication>
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/signin",
        element: <LogIn></LogIn>,
      },
    ],
  },
]);

export default router;
