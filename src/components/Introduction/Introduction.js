import React, { Fragment } from 'react';
import ProfilePicture from '../../assets/images/ProfilePicture.png'

const Introduction = () =>{
    return (
        <Fragment>
            <section className='row m-0 px-0 py-3'>
                <div className='col-6'>
                    <h3>Hi, my name is</h3>
                    <h1>Harry Surya.</h1>
                    <h1 className='text-muted'>I build things for the web</h1>
                    <h5>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Test.</h5>
                </div>
                <div className='col-6'>
                    <img className='img-thumbnail mx-auto d-block border-0' src={ProfilePicture} />
                </div>
            </section>
        </Fragment>
    )
}

export default Introduction;