import React from 'react';
import './Gallery.css';
import Galleries from '../../database/Galleries';

const Gallery = (props) => {

    return(
        <section className='py-5 border-bottom' id='sectionGallery'>
            <div className='container px-xl-5 py-xl-3 p-sm-0'>
            <p className='display-5 text-center'>Gallery</p>
            <div className='row mx-1'>
                {Galleries.map(gallery =>
                    
                    <div key={gallery.id} className='card col-xl-4 col-lg-4 col-md-12 col-sm-12 p-0'>
                        <img src={gallery.src} className='card-img-top' alt={gallery.title} />
                        <div className='card-body'>
                        <h5 className='card-title'>{gallery.title}</h5>
                        <p className='card-text'>{gallery.description}</p>
                        <p className='card-text'><small className='text-body-secondary'><i className='bi bi-calendar-check'></i> {gallery.startDate} - {gallery.endDate}</small></p>
                        </div>
                    </div>
                    
                )}
                </div>
            </div>
        </section>
    )
}

export default Gallery;