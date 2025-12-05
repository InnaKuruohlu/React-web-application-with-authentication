import '../signUp.css'
import { useNavigate } from 'react-router-dom';
import { saveUser } from '../utils/auth';
import { useEffect } from 'react';

import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import StarsIcon from '@mui/icons-material/Stars';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function SignUp () {
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

    const user = {
      email: form.email.value,
      firstName: form['first-name'].value,
      lastName: form['last-name'].value,
      password: form.pwd.value,
    };

    saveUser(user);

  
    navigate('/signin');
  }
  return (
    <>
      <section className="signUp-section">
    <div className="containerImgSingUp"><img className="imageSignUp" src="../Kodix-picture-profile.jpg" /></div>
    <div className="containerSignUp">

      <div className="firstContainerSignUp">
        <h2 className="titleSignUp">Sign up</h2>

        <form className="formSignUp" onSubmit={handleSubmit}>
          <div className="email-container-signUp">
            <label for="email" className="label-email-signUp">Email address</label >
            <input 
            type="email" 
            className="contact-input-signUp" 
            name="user-email" 
            id="email" 
            placeholder="Your email address" 
            maxlength="40" 
            pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,8}"  required />
          </div>
          
          <div className="containerFullName">

            <div className="containerFirstName">
              <label for="first-name" className="labelFirstName">First name</label>
              <input 
              type="text" 
              id="first-name" 
              className="inputFirstName" 
              name="firstName" 
              placeholder="Your first name" 
              minlength="2" 
              maxlength="40" required />
            </div>

            <div className="containerLastName">
              <label for="last-name" className="labelLastName">Last name</label>
              <input 
              type="text" 
              id="last-name" 
              className="inputLastName" 
              name="lastName" 
              placeholder="Your last name" 
              minlength="2" 
              maxlength="40" required />
            </div>
          </div>

          <div className="password-container-SignUp">
              <label for="pwd" className="label-passwordSignUp">Password</label>
              <input 
              type="password" 
              id="pwd" 
              className="password-inputSignUp" 
              name="pwd" 
              placeholder="Enter password" 
              minlength="8" required />
          </div>

          <p className="forgot-pswText-SignUp">Forgot password?</p>

          <button 
          type="submit" 
          className="SignUpBtn">Sign In 
          <span className="arrow-button"><ArrowForwardIcon /></span>
          </button>

        </form>

         <p className="yesAccountText">Already have an account? 
          <span 
          className="optionSignIn"
          onClick={() => navigate('/signin')}
          >Sign In</span></p>
      </div>



      <div className="secondContainerSignUp">
        <h2 className="seconContainerTitle">Get Your FREE <br/>30-Days Trial Now!</h2>


       <div className="container-info-SignUp">

        <div className="signUpinfoContain">
          <div className="iconSignUp">
            <MonetizationOnIcon />
          </div>
          <div className="separateInfo">
           <p className="titleInfo">Absolutely FREE</p>
           <p className="textInfo">No hidden charges, No credit<br/> card required</p>
          </div>
        </div>

        <div className="signUpinfoContain">
          <div className="iconSignUp">
            <DynamicFormIcon />
          </div>
          <div className="separateInfo">
            <p className="titleInfo">Fast & Easy</p>
            <p className="textInfo">Get access instantly, no<br/> downloads required</p>
          </div>
        </div>

        <div className="signUpinfoContain">
          <div className="iconSignUp">
            <AssignmentIndIcon />
          </div>
          <div className="separateInfo">
             <p className="titleInfo">Your Own Data</p>
            <p className="textInfo">Enjoy the Free Trial with your<br/> company data</p>
          </div>
        </div>

        <div className="signUpinfoContain">
          <div className="iconSignUp">
            <StarsIcon />
          </div>
          <div className="separateInfo">
             <p className="titleInfo">Unlimited Features</p>
            <p className="textInfo">Access all features of the<br/> world's #1 business software!</p>
          </div>
        </div>
      </div>

      <p className="callNumber">Call us at <span className="number">800 1301 448</span></p>
      </div>


    </div>
  </section>
    
    </>
  )
};

export default SignUp;