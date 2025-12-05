import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css' 

import App from './components/App.jsx'
import PostPage from './components/PostPage.jsx'
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

      <Route 
      path="/post/:id" 
      element={
        <PrivateRoute>
          <PostPage />
        </PrivateRoute>
      } />

    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
