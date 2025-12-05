import { useState, useEffect } from 'react';
import '../header.css';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated, logout } from '../utils/auth.js';

function Header () {
   const navigate = useNavigate();
  const [auth, setAuth] = useState(isAuthenticated());


  useEffect(() => {
    setAuth(isAuthenticated());
  }, []);

  function handleLogout() {
    logout();                 
    setAuth(false);         
    navigate('/');      
  }

  return(
    <>
      <header className="header">
    <div className="header-container">

      <div className="sections-container">
        <ul className="section-container">
          <li 
          className="section"
          onClick={() => navigate('/')}
          >Home</li>
          <li className="section">Feature</li>
          <li className="section">Blog</li>
          <li className="section">Testimonials</li>
        </ul>
      </div>

      <div className="image-container">
        <img className="Kodix-picture-profile" src="/Kodix-picture-profile.jpg" />
      </div>

      <div className="buttons-container">
        {!auth && (
          <>
           <button 
          className="button-logIn"
          onClick={() => navigate('/signin')}
          >Log in
          </button>

          <button 
          className="button-signUp"
          onClick={() => navigate('/signup')}
          >Sign Up
          </button>
            </>
        )}

         {auth && (
            <button 
              className="button-logIn"
              onClick={handleLogout}
            >
              Log Out
            </button>
          )}
       
        
      </div>

    </div>
  </header>
    </>
  )};

export default Header;