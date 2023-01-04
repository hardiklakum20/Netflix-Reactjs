import React from 'react';
import { useNavigate } from 'react-router-dom';

function Netflix_header(props) {

    const navigate = useNavigate();

    function handleclick(){
        navigate("/Sign_in")
    }

    return (
       <>
             {/* header start */}
             <header>
                <div className="container-fluid b-img">
                    <img src="../img/mainback.jpg" alt="back" className=' main' />
                    <div className="container logo">
                            <img src="../img/Netflix.png" alt="logo" className='' />
                    </div>
                    <div className="language container">
                        <select name="" id="">
                            <option value="">English</option>
                            <option value="">Hindi</option>
                        </select>
                    </div>
                   <button className='btn btn-danger sign' onClick={handleclick}>Sign In</button>
                    <div className="container text text-center form-control">
                       <h1>Unlimited movies,TV <br /> shows and more.</h1>
                       <h3>Watch anywhere.Cancel anytime.</h3>
                       <p>Ready to watch? Enter your email to create or restart your membership</p>
                       <input type="email" placeholder='Email Addres'/>
                       <h4><button>Get Started</button></h4>
                    </div>
                     
                </div>
            </header>
            {/* header end */}
       </>
    );
}

export default Netflix_header;