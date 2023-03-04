import React, { Suspense,LazyExoticComponent } from 'react';
import { lazy } from 'react';
import "jquery-ui-dist/jquery-ui";
import './netflix.css';
const Netflix_header = lazy(()=>import('./Netflix Files/1 Netflix_header'));
const Enjoy_tv = lazy(()=>import('./Netflix Files/2 Enjoy_tv'));
const Download = lazy(()=>import('./Netflix Files/3 Download'));
const Watch_everywhere = lazy(()=>import('./Netflix Files/4 Watch_everywhere'));
const Createprofile = lazy(()=>import('./Netflix Files/5 Createprofile'));
const Frequtly_question = lazy(()=>import('./Netflix Files/6 Frequtly_question'));
const Footer = lazy(()=>import('./Netflix Files/7 Footer'));
// import Netflix_header from './Netflix Files/1 Netflix_header';
// import Enjoy_tv from './Netflix Files/2 Enjoy_tv';
// import Download from './Netflix Files/3 Download';
// import Watch_everywhere from './Netflix Files/4 Watch_everywhere';
// import Createprofile from './Netflix Files/5 Createprofile';
// import Frequtly_question from './Netflix Files/6 Frequtly_question';
// import Footer from './Netflix Files/7 Footer';




function Netflix(props) {
    
    return (
        <>
            <Suspense fallback={<div className='ms-5 fw-bold text-danger fs-2'>Please Wait...</div>}>
           {/* header start */}
            <Netflix_header/>
           {/* header end */}
          

            <div className="container-fluid">
                <div className="border"></div>
            </div>

            {/* Enjoy tv start */}
                <Enjoy_tv/>
            {/* Enjoy tv end */}

            <div className="container-fluid">
                <div className="border2"></div>
            </div>
           

            {/* Download start */}
                <Download/>
            {/* Download end */}

            <div className="container-fluid">
                <div className="border2 down-border"></div>
            </div>

            {/* watch everywhere start */}
                <Watch_everywhere/>
            {/* watch everywhere End */}

            <div className="container-fluid">
                <div className="border2"></div>
            </div>

            {/* create profile start */}
                <Createprofile/>
            {/* create profile end */}

            <div className="container-fluid down-border">
                <div className="border2"></div>
            </div>

            {/* frequently asked question start */}
                <Frequtly_question/>
            {/* frequently asked question end */}

            <div className="container-fluid">
                <div className="border2"></div>
            </div>

            {/* footer start */}
               <Footer/>
            {/* footer end */}  
             </Suspense>
        </>
    );
}

export default Netflix;