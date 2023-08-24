import React from 'react';
import GOLiveDinasira from '../../assets/images/GOLiveDinasira.jpg';
import WorkshopSoltius from '../../assets/images/WorkshopSoltius.jpg';
import GOLivePolychemie from '../../assets/images/GOLivePolychemie.jpg';

const Gallery = (props) => {

    return(
        <section className='bg-secondary-subtle py-5' id='scrollSpyGallery' onMouseEnter={() => props.handlePointerEvent(5)}>
            <div className='container'>
            <p className='display-5 text-center'>Gallery</p>
            <div className='row mx-1'>
                <div className='card col-xl-4 col-lg-4 col-md-12 col-sm-12 p-0'>
                    <img src={GOLivePolychemie} className='card-img-top' alt='Project Completion Ceremony Polychemie Asia Pacific Permai' />
                    <div className='card-body'>
                    <h5 className='card-title'>Completion Ceremony</h5>
                    <p className='card-text'>Project consist of 4 team members that implemented ERP solution, several addons, and reporting.</p>
                    <p className='card-text'><small className='text-body-secondary'><i className='bi bi-calendar-check'></i> Dec 2018 - May 2019</small></p>
                    </div>
                </div>
                <div className='card col-xl-4 col-lg-4 col-md-12 col-sm-12 p-0'>
                    <img src={WorkshopSoltius} className='card-img-top' alt='Workshop Soltius' />
                    <div className='card-body'>
                    <h5 className='card-title'>Workshop</h5>
                    <p className='card-text'>Presenting MRP module as one of the ERP's functionality to help existing customer plan the supply chain.</p>
                    <p className='card-text'><small className='text-body-secondary'><i className='bi bi-calendar-check'></i> October 2018</small></p>
                    </div>
                </div>
                <div className='card col-xl-4 col-lg-4 col-md-12 col-sm-12 p-0'>
                    <img src={GOLiveDinasira} className='card-img-top' alt='Project Completion Ceremony Dinasira Sembada' />
                    <div className='card-body'>
                    <h5 className='card-title'>Completion Ceremony</h5>
                    <p className='card-text'>Project consist of 5 team members that implemented ERP solution, several addons, and reporting.</p>
                    <p className='card-text'><small className='text-body-secondary'><i className='bi bi-calendar-check'></i> August 2018 - November 2018</small></p>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery;