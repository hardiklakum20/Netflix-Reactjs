import React from 'react';

function  Download(props) {
    return (
        <>
             <div className="container-fluid">
                <div className="container-fluid">
                    
                    <div className="row main-row d-flex justify-content-center align-items-center text-center ">
                                    <div className="col-6 right justify-content-center align-items-center">
                                        <img src="../img/mobile-0819.jpg" alt="tv" className='img-fluid' />
                                        <div className="download d-flex">
                                            <div className="dow-img">
                                                <img src="../img/boxshot.png" alt="" className='img-fluid' />
                                            </div>
                                            <div className="dow-text">
                                                <h6>Stranger Things</h6>
                                                <p>Downloading...</p>
                                            </div>
                                            <div className="dow-animation"></div>
                                        </div>
                                    </div>
                                    <div className="col-6 left text-start">
                                        <h1>Download your shows <br /> to Watch offline</h1>
                                        <h5>Save your favourites easily and always have <br /> something to watch</h5>
                                    </div>   
                    </div>
                </div>
            </div>
        </>
    );
}

export default  Download;