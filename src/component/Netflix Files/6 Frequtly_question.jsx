import React, { useState } from 'react';
import Net_api from '../Api/Net_api';

function  Frequtly_question(props) { 
    
    const[api,setapi] = useState(Net_api)
    console.log(api);

    return (
        <>
           <div className="container-fluid main-freq">
                    <div className="container text-center text-white">
                        <h1 className='pt-5 pb-5 fs-1 fw-bolder'>Frequently Asked Questions</h1>
                    </div>
                    <div className="container">
                    <div className="accordion border-0 w-75 ms-auto me-auto pb-5" id="accordionExample">
                        
                            {api.map((curlEle)=>{
                                const{id,title,pera,icon}=curlEle
                                return(
                                    <>
                                    <div className="accordion-item border-0 bg-dark mb-4">
                                        <h2 className="accordion-header" id="headingOne" key={id}>
                                            <button className="accordion-button bg-dark text-white fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                {curlEle.title}
                                            </button>
                                       </h2>
                                       <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body text-white bg-dark fs-4">
                                               {curlEle.pera}
                                            </div>
                                        </div>
                                        </div>
                                        
                                    </>
                                )
                            })}
                            
                        {/* <div class="accordion-item border-0">
                            <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Accordion Item #2
                            </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body text-white bg-dark">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item border-0">
                            <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Accordion Item #3
                            </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body bg-dark text-white">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                            </div>
                        </div> */}
                    </div>
                    </div>
                    <div className="container text2 text-center pb-5">
                       <p>Ready to watch? Enter your email to create or restart your membership</p>
                       <input type="email" placeholder='Email Addres'/>
                       <h4><button>Get Started</button></h4>
                    </div>
                </div> 
        </>
    );
}

export default  Frequtly_question;