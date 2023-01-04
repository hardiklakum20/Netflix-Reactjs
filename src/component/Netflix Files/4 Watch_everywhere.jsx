import React from 'react';

function  Watch_everywhere(props) {
    return (
        <>
            <div className="container-fluid">
                <div className="container-fluid">
                    <div className="row main-row d-flex justify-content-center align-items-center text-center ">
                         <div className="col-6 left">
                            <h1>Watch everywhere.</h1>
                            <h5>Stream unlimited movies and TV shows on<br />your phone,tablet,laptop,and TV.</h5>
                            
                         </div>
                        <div className="col-6 right justify-content-center align-items-center">
                            <img src="../img/device-pile-in.png" alt="tv" className='img-fluid' />
                            <video width="" height="" className='watch' autoPlay playsInline muted loop>
                                <source src="../img/video-devices-in.m4v" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    );
}

export default  Watch_everywhere;