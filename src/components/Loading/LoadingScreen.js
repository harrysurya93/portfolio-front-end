import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

const LoadingScreen = (props) =>{

    return ReactDOM.createPortal(
        <Fragment>
            <div className='position-absolute top-50 start-50 translate-middle'>Please Wait...
                <div className='spinner-border' role="status">
                    <span className='visually-hidden'>Loading...</span>
                </div>
            </div>
        </Fragment>
    , document.getElementById('loader'));
}

export default LoadingScreen;