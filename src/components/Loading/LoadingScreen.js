import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

const LoadingScreen = (props) =>{

    return ReactDOM.createPortal(
        <Fragment>
            <div className='position-absolute top-50 start-50 translate-middle'>Retrieving Data From Back-End...
                <div className='progress' role='progressbar' aria-label='Progress Bar' aria-valuenow={props.progressCount} aria-valuemin='0' aria-valuemax='100'>
                    <div className='progress-bar progress-bar-striped progress-bar-animated' style={{width:`${props.progressCount}%`}}></div>
                </div>
            </div>           
        </Fragment>
    , document.getElementById('loader'));
}

export default LoadingScreen;