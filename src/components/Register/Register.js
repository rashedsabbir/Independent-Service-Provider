import { faFacebookF, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
// import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import registerImg from '../../img/register.svg'
import './Register.css';
import { useLocation, useHistory } from 'react-router-dom';

const Register = () => {
   // location
   const location = useLocation();
   // history
   const history = useHistory();
   // redirect uri
   const redirect_uri = location.state?.from || '/home';
   // use auth
   const { setName, setEmail, setPassword, registerUserUsingEmailPassword, setUser, error,
   setError,registerUpdateUser,verifyEmail,signInUsingGoogle,signInUsingFb,signInUsingGithub } = useAuth();
   // use form 
   // const { register, handleSubmit, reset } = useForm();

   // handleName
   const handleName = (e) => {
      setName(e.target.value)
   }
   // handleEmail
   const handleEmail = (e) => {
      setEmail(e.target.value)
   }
   // handlePassword
   const handlePassword = (e) => {
      setPassword(e.target.value)
   }
   // handleRegister
   const handleRegister = (e) => {
      e.preventDefault()
      registerUserUsingEmailPassword()
         .then(result => {
            setUser(result.user);
            registerUpdateUser();
            verifyEmail();
            history.push(redirect_uri)
            console.log(result.user);
         })
         .catch(err => {
            setError(err.message)
            console.log(err.message);
         })
   }
   setTimeout(() => {
      setError('')
   }, 5000);

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
   return (
      <>
      <div className="register_banner"></div>
         <div className="register_section">
            <div className="container">
               <div className="row align-items-center register_wrapper" data-aos="fade-up">
                  <div className="col-lg-6 col-md-6">
                     <div className="register_img">
                        <img src={registerImg} alt="" />
                     </div>
                     <div className="text-center login_link">
                        <span>Already have an account ?</span> <Link to="/login"> Login</Link>
                     </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                     <div className="login_form">
                        <h2>Register</h2>
                        <form onSubmit={handleRegister}>
                           <span>
                              <FontAwesomeIcon className="icon" icon={faUser} /> <input type="text" 
                              onChange={handleName} placeholder="Name" />
                           </span>
                           <span>
                              <FontAwesomeIcon className="icon" icon={faEnvelope} /> <input type="email" 
                              onChange={handleEmail} placeholder="Email" />
                           </span>
                           <span>
                              <FontAwesomeIcon className="icon" icon={faLock} /> <input type="password"
                                onChange={handlePassword} placeholder="Password" />
                           </span>
                           <p className="text-danger">{error}</p>
                           <div className="row my-3 align-items-center">
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
                           <input className="text-white" type="submit" value="Register" />
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

export default Register;