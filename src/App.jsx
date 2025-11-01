import { Route, Routes } from 'react-router-dom'
import './App.css'
import { LoginPage } from './pages/LoginPage'
import { SignupPage } from './pages/SignupPage'
import { CreateCoursesPage } from './pages/CreateCoursesPage'
import { ViewCoursesPage } from './pages/ViewCoursesPage'
import { DashboardPage } from './pages/DashboardPage'
import { HomePage } from './pages/HomePage'

// Setting up the routing
  // Pages
     // Login Page
     // Signup Page
     // Create Courses
     // View the courses
// Making UI for Register User (Done)
// Makin UI for signing in User (Done)
// Making UI for Creating a Course
// Making a UI for view the courses


// Minute details
// Once user login
  // -> navigate to Dashboard (DONE) 
    // --> Create a Course BUTTON
          // --> Navigate the user to create course page
    // --> View all courses BUTTON
          // --> Navigate the user to view courses page


function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/dashboard' element={<DashboardPage />} />
      <Route path='/create-courses' element={<CreateCoursesPage />} />
      <Route path='/view-courses' element={<ViewCoursesPage />} />
    </Routes>
  )
}

export default App
