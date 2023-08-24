import React from 'react';
import GOLiveDinasira from '../../assets/images/GOLiveDinasira.jpeg';
import WorkshopSoltius from '../../assets/images/WorkshopSoltius.jpeg';
import GOLivePolychemie from '../../assets/images/GOLivePolychemie.jpeg';

const Gallery = () => {
    return(
        <section className='bg-secondary-subtle m-0 px-0 py-5 ' id='scrollSpyGallery' style={{minHeight:'75vh'}}>
            <div className='container px-5'>
            <p className='display-5 py-2'>Gallery</p>
            <div class="card-group">
                <div class="card">
                    <img src={GOLivePolychemie} class="card-img-top" alt="Project Completion Ceremony Polychemie Asia Pacific Permai" />
                    <div class="card-body">
                    <h5 class="card-title">Completion Ceremony</h5>
                    <p class="card-text">Project consist of 4 team members that implemented ERP solution, several addons, and reporting.</p>
                    <p class="card-text"><small class="text-body-secondary"><i class="bi bi-calendar-check"></i> Dec 2018 - May 2019</small></p>
                    </div>
                </div>
                <div class="card">
                    <img src={WorkshopSoltius} class="card-img-top" alt="Workshop Soltius" />
                    <div class="card-body">
                    <h5 class="card-title">Workshop</h5>
                    <p class="card-text">Presenting MRP module as one of the ERP's functionality to help existing customer plan the supply chain.</p>
                    <p class="card-text"><small class="text-body-secondary"><i class="bi bi-calendar-check"></i> October 2018</small></p>
                    </div>
                </div>
                <div class="card">
                    <img src={GOLiveDinasira} class="card-img-top" alt="Project Completion Ceremony Dinasira Sembada" />
                    <div class="card-body">
                    <h5 class="card-title">Completion Ceremony</h5>
                    <p class="card-text">Project consist of 5 team members that implemented ERP solution, several addons, and reporting.</p>
                    <p class="card-text"><small class="text-body-secondary"><i class="bi bi-calendar-check"></i> August 2018 - November 2018</small></p>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery;