import React from 'react';
import './signin.css'

function Sign_in(props) {
    return (
        <>
            <div className="container-fluid">
                 <img src="../img/sign_back.jpg" alt="background" className=' background' />
                    <img src="../img/Netflix.png" alt="logo" className='img-fluid sign_logo position-absolute  h-25' />
                    <div className="container">
                        <div className="sign_back position-absolute rounded-2">
                            <div className="container mt-5 ms-5">
                                <h2 className='text-white fw-bold'>Sign In</h2>
                                <form action="/action_page.php">
                                    <div class="mb-5 mt-5">
                                        <input type="email" class="form-control w-75" id="email" placeholder="Enter email" name="email" required/>
                                    </div>
                                    <div class="mb-5">
                                        <input type="password" class="form-control w-75" id="pwd" placeholder="Enter password" name="pswd" required/>
                                    </div>
                                    <button type="submit" class="btn btn-danger fw-bolder mb-2 w-75">Sign In</button>
                                    <div class="form-check mb-5 d-flex">
                                        <label class="form-check-label">
                                        <input class="form-check-input" type="checkbox" name="remember"/> Remember me
                                        </label>
                                        <a href="" className=' ms-auto me-auto'>Need help?</a>
                                    </div> 
                                </form>
                                <div className='d-flex'>
                                <h6 className='mt-5 fs-5'>New to Netflix?</h6>
                                <a href="#" className='text-white mt-5 fs-6 ms-1'>Sign up now</a>
                                </div>
                                <p className='pb-5'>This page is protected by Google reCAPTCHA to <br /> ensure you're not a bot.<a href="#" className='text-primary'>Learn more</a></p>
                               
                            </div>    
                        </div>
                    </div>
                    <div className="footer container-fluid">
                        <div className="container pt-5">
                        <h6>Questions? Call 000-800-919-1694</h6>
                        <div className="row pt-3">
                            <div className="col-3">
                                <h6><a>FAQ</a></h6>
                                <h6><a>Cookie Prefrence</a></h6>
                                <div className="languag3 container pt-4 pb-3">
                                    <select name="" id="" className='p-1'>
                                        <option value="">English</option>
                                        <option value="">Hindi</option>
                                    </select>
                                 </div>
                            </div>
                            <div className="col-3">
                                <h6><a>Help Center</a></h6>
                                <h6><a>Corporate Information</a></h6>
                            </div>
                            <div className="col-3">
                                <h6><a>Terms of Use</a></h6>
                            </div>
                            <div className="col-3">
                               <h6> <a>Privacy</a></h6>
                            </div>
                        </div>
                        </div>
                       
                    </div>
                
            </div>
           
        </>
    );
}

export default Sign_in;