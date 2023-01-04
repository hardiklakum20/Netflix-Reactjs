import React from 'react';
import { useState } from 'react';
import Netflix_api from '../Api/Netflix_api';

function Enjoy_tv(props) {

    const [programdata,setprogramdata] = useState(Netflix_api)
    console.log(programdata);

    return (
        <>
            <div className="container-fluid">
                <div className="container-fluid">
                    <div className="row main-row d-flex justify-content-center align-items-center text-center">
                        {programdata.map((curEle)=>{
                            const{id,heading,info,img,video}=curEle;
                            return(
                                <>
                             <div className="col-6 left"key={id}>
                                <h1>{curEle.heading}</h1>
                                <h5>{curEle.info}</h5>  
                             </div>
                             <div className="col-6 right justify-content-center align-items-center">
                                 <img src={curEle.img} alt="tv" className='img-fluid' />
                                <video width="" height="" autoPlay playsInline muted loop>
                                     <source src={curEle.video} type="video/mp4" />
                                </video>
                             </div>
                             </>
                            )
                        })}         
                    </div>
                </div>
            </div>
        </>
    );
}

export default Enjoy_tv;