import React from 'react';

function  Createprofile(props) {
    return (
        <>
            <div className="container-fluid">
                <div className="container-fluid">
                    <div className="row main-row d-flex justify-content-center align-items-center text-start ">
                        <div className="col-6 right justify-content-center align-items-center">
                            <img src="../img/children.png" alt="tv" className='img-fluid me-5 child' />
                        </div>
                         <div className="col-6 left child-text">
                            <h1>Create profiles for <br /> children.</h1>
                            <h5 className=''>Send children on adventures with their<br />favourite characters in a space made just for<br /> them-free with your membership</h5> 
                         </div>  
                    </div>
                </div>
            </div>
        </>
    );
}

export default  Createprofile;