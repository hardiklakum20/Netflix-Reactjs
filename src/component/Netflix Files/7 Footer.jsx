import React from 'react';

function  Footer(props) {
    return (
        <>
            <div className="container-fluid main-foot">
                         <div className="container">
                            <h5 className='pt-5'>Questions? Call 000-800-919-1694</h5>
                            <div className="row pt-5">
                                 <div className="col-3">
                                   <h6> <a href="#">FAQ</a></h6>
                                    <h6><a href="#">Investor Relations</a></h6>
                                    <h6><a href="#">Privacy</a></h6>
                                    <h6><a href="#">Speed Test</a></h6>
                                    <div className="language2 container pt-4">
                                        <select name="" id="">
                                            <option value="">English</option>
                                            <option value="">Hindi</option>
                                        </select>
                                     </div>
                                     <h6 className='pt-3 pb-5'>Netflix</h6>
                                </div>
                                <div className="col-3">
                                    <h6><a href="#">Help Centre</a></h6>
                                    <h6><a href="#">Jobs</a></h6>
                                    <h6><a href="#">Cookie Preferences</a></h6>
                                    <h6><a href="#">Legal Notices</a></h6>
                                </div>
                                <div className="col-3">
                                    <h6><a href="#">Account</a></h6>
                                    <h6><a href="#">Ways to Watch</a></h6>
                                    <h6><a href="#">Corporate Information</a></h6>
                                    <h6><a href="#">Only on Netflix</a></h6>
                                </div>
                                <div className="col-3">
                                    <h6><a href="#">Media Centre</a></h6>
                                    <h6><a href="#">Terms of Use</a></h6>
                                    <h6><a href="#">Contact Us</a></h6>
                                </div>
                             </div> 
                         </div>
                </div> 
        </>
    );
}

export default  Footer;