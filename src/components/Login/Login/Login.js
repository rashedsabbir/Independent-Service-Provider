import React from 'react';
import './Login.css';
import loginImg from '../../../img/login.svg';
import useAuth from '../../../Hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link, useLocation, useHistory } from 'react-router-dom';

const Login = () => {
   // location
   const location = useLocation();
   // history
   const history = useHistory();
   // redirect uri
   const redirect_uri = location?.state?.from || '/home';
   // use auth
   const { setEmail, setPassword, signInUsingGoogle, setUser, setError, signInUsingFb,
   signInUsingGithub,error,loginUsingEmailPassword } = useAuth();

   // handleEmail
   const handleEmail = (e) => {
      setEmail(e.target.value)
   }
   // handlePassword
   const handlePassword = (e) => {
      setPassword(e.target.value)
   }

   // handleSubmit
   const handleSubmit = (e) => {
      e.preventDefault()
      loginUsingEmailPassword()
      .then(result => {
         setUser(result.user);
         history.push(redirect_uri)
     })
     .catch(err => {
         setError(err.message)
     })
   }

   // handle Google SignIn
   const handleGoogleSignIn = () => {
      signInUsingGoogle()
         .then(result => {
            setUser(result.user)
            history.push(redirect_uri)
         })
         .catch(err => {
            setError(err.message);
         })
   }

   // handle Fb sign In
   const handleFbSignIn = () => {
      signInUsingFb()
         .then(result => {
            setUser(result.user)
            history.push(redirect_uri)
         })
         .catch(err => {
            setError(err.message)
         })
   }

   // handle Github Sign In
   const handleGithubSignIn = () => {
      signInUsingGithub()
      .then(result => {
         setUser(result.user)
         history.push(redirect_uri)
     })
     .catch(err => {
         setError(err.message)
     })
   }
   // set time for error
   setTimeout(() => {
      setError('')
   }, 5000);
   return (
      <>
      <div className="login_bg"></div>
         <div className="login_section">
            <div className="container">
               <div className="row align-items-center login_wrapper" data-aos="fade-up">
                  <div className="col-lg-6 col-md-6">
                     <div className="login_img">
                        <img src={loginImg} alt="" />
                     </div>
                     <Link to="/register"><p className="register">Create An Account</p></Link>
                  </div>
                  <div className="col-lg-6 col-md-6">
                     <div className="login_form">
                        <h2>Log In</h2>
                        <form onSubmit={handleSubmit}>
                           <span>
                              <FontAwesomeIcon className="icon" icon={faEnvelope} /> <input onChange={handleEmail}
                                 placeholder="Email" />
                           </span>
                           <span>
                              <FontAwesomeIcon className="icon" icon={faLock} /> <input type="password"
                               onChange={handlePassword}  placeholder="Password" />
                           </span>
                           <p id="error" className="text-danger">{error}</p>
                           <div className="row align-items-center my-3">
                              <div className="col-lg-6 col-6">
                                 <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                                 </div>
                              </div>
                              <div className="col-lg-6 col-6 text-end">
                                 <p className="forgot_text">Forgot Password</p>
                              </div>
                           </div>
                           <input className="text-white" type="submit" value="Login" />
                        </form>
                        <div className="other_login d-flex align-items-center mt-5">
                           <span>Or Login With : </span>
                           <div onClick={handleGoogleSignIn} className="login google_login">
                              <FontAwesomeIcon className="login_icon" icon={faGoogle} />
                           </div>
                           <div onClick={handleFbSignIn} className="login fb_login">
                              <FontAwesomeIcon className="login_icon" icon={faFacebookF} />
                           </div>
                           <div onClick={handleGithubSignIn} className="login github_login">
                              <FontAwesomeIcon className="login_icon" icon={faGithub} />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Login;