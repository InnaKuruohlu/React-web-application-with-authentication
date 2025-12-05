import '../singIn.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../utils/auth';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function SignIn () {
  const navigate = useNavigate();

    useEffect(() => {
    document.body.style.background = "white"; 
    document.body.style.backgroundImage = "none";

    return () => {
      document.body.style.background = "";
      document.body.style.backgroundImage = "";
    };
  }, []);


  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;

    const email = form['user-email'].value;
    const password = form.pwd.value;

    const ok = login(email, password);

    navigate('/');
  }

  return(
    <>
 
      <section className="signIn-section">
      <div className="containerImgSingIn"><img className="imageSignIn" src="../Kodix-picture-profile.jpg" /></div>
      <div className="containerSignIn">

        <div className="firstContainerSignIn">
          <h2 className="titleSignIn">Sign in</h2>

          <form className="formSignIn" onSubmit={handleSubmit}>

            <div className="email-container">
            <label htmlFor="user-email" className="label-email">Email address</label >
            <input 
              type="email" 
              className="contact-input" 
              name="user-email" 
              id="user-email" 
              placeholder="Your email address" 
              maxlength="40" 
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,8}" required />
              </div>

            <div className="password-container">
              <label htmlFor="pwd" className="label-password">Password</label>
              <input 
              type="password" 
              id="pwd" 
              className="password-input" 
              name="pwd" 
              placeholder="Enter password" 
              minlength="8" required />
            </div>

             <p className="forgot-psw-text">Forgot password?</p>

            <button 
            type="submit" 
            className="SignInBtn">Sign In
            <span className="arrow-button"><ArrowForwardIcon /></span>
            </button>
          </form>


          <p className="noAccountText">Don't have an account? 
            <span 
            className="optionSignUp"
            onClick={() => navigate('/signup')}
            >Sign Up</span></p>
        </div>

        <div className="secondContainerSignIn">
          <div className="container-kodixPro">
            <h2 className="Kodix">Kodix</h2>
            <p className="PRO">PRO</p>
          </div>

          <p className="ad">Unlimited traffic, strategic<br/> support, and AI-driven upsells</p>
          <a href="#LearnMore" className="linkLearnMore">Learn More</a>
        </div>

      </div>
  </section>
    </>
  )
}

export default SignIn;