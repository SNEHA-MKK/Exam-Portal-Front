import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
// import Footer from './components/Footer'
import Register from './pages/Register'
import Login from './pages/Login'
import AdminProfilePage from './pages/admin/AdminProfilePage'
// import AdminAddCategoryPage from './pages/admin/AdminAddCategoryPage'
import AdminCategoriesPage from './pages/admin/AdminCategoriesPage'
import AdminUpdateCategoryPage from './pages/admin/AdminUpdateCategoryPage'
import AdminAddQuestionsPage from './pages/admin/questions/AdminAddQuestionsPage'
import AdminQuestionsPage from './pages/admin/questions/AdminQuestionsPage'
import AdminUpdateQuestionPage from './pages/admin/questions/AdminUpdateQuestionPage'
// import AdminAddQuiz from './pages/admin/quizzes/AdminAddQuiz'
import AdminQuizzesPage from './pages/admin/quizzes/AdminQuizzesPage'
import AdminUpdateQuiz from './pages/admin/quizzes/AdminUpdateQuiz'
import UserProfilePage from './pages/users/UserProfilePage'
import UserQuizzesPage from './pages/users/UserQuizzesPage'
import UserQuizManualPage from './pages/users/UserQuizManualPage'
import UserQuestionsPage from './pages/users/UserQuestionsPage'
import UserQuizResultPage from './pages/users/UserQuizResultPage'

function App() {


  return (
    <>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/adminProfile' element={<AdminProfilePage />} />

        {/* adminCategory */}

        {/* <Route path="/adminAddCategory" element={<AdminAddCategoryPage />} /> */}
        <Route path='/adminCategoty' element={<AdminCategoriesPage />} />
        <Route
          path="/adminUpdateCategory"
          element={<AdminUpdateCategoryPage />}
        />

        {/* adminQuiz */}

        {/* <Route path="/adminAddQuiz" element={<AdminAddQuiz />} /> */}
        <Route path="/adminQuizzes/:id" element={<AdminQuizzesPage />} />
        <Route path="/adminUpdateQuiz" element={<AdminUpdateQuiz />} />

        {/* Adminquestions */}
        {/* <Route path="/adminAddQuestion" element={<AdminAddQuestionsPage />} /> */}
        <Route path="/adminQuizzes/:id/adminQuestions/:id" element={<AdminQuestionsPage />} />
        <Route
          path="/adminUpdateQuestion"
          element={<AdminUpdateQuestionPage />}
        />

        {/* user */}

        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/quizzes" element={<UserQuizzesPage />} />
        <Route path="/quizManual/" element={<UserQuizManualPage />} />
        <Route path="/questions/" element={<UserQuestionsPage />} />
        <Route path="/quizResults/" element={<UserQuizResultPage />} />


      </Routes>

      {/* <Footer /> */}

    </>
  )
}

export default App
