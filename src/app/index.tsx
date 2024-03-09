/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { Login } from './pages/LoginPage/Loadable';
import { TaskDetails } from './pages/TaskDetailsPage/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { OnboardingPage } from './pages/OnboardingPage/Loadable';
import { ProfilingPage } from './pages/ProfilingPage/Loadable';
import { useTranslation } from 'react-i18next';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/TaskList" element={<HomePage />} />
        <Route path="/TaskDetails/:id" element={<TaskDetails />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/Profiling" element={<ProfilingPage />} />
        <Route path="/Onboarding" element={<OnboardingPage />} />
        
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}
