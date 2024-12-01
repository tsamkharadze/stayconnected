import DefaultLayout from '@/components/layout/default/default-layout';
import Loading from '@/components/ui/loading';
import CreateQuestionPage from '@/pages/create-question/views/create-question-page';
import HomePage from '@/pages/home-page/views/home-page';
import LoginPage from '@/pages/login/views/login-page';
import NotFound from '@/pages/not-found/not-found';
import QuestionPage from '@/pages/question-page/views/question-page';
import RegistrationPage from '@/pages/registration/views/registration-page';
import UserProfile from '@/pages/user-profile/views/user-profile-page';
import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DefaultLayout />}>
          <Route
            path='/'
            element={
              <Suspense fallback={<Loading />}>
                <HomePage />
              </Suspense>
            }
          />
          <Route path='home' element={<HomePage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<RegistrationPage />} />
          <Route path='profile' element={<UserProfile />} />
          <Route path='createQuestion' element={<CreateQuestionPage />} />
          <Route path='question' element={<QuestionPage />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
