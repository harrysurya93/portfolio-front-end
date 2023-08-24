import React, { Fragment } from 'react';
import BinusLogo from '../../assets/images/LogoBinus.png';
import MikroskilLogo from '../../assets/images/LogoMikroskil.jpeg';

const Education = (props) => {
    return (
        <Fragment>
            <section className='px-4 py-5 bg-secondary-subtle' id='scrollSpyEducation' style={{minHeight:`75vh`}} >
                <div className='container mx-auto'>
                <p className='display-5 py-2 mx-0 mb-3'>Education</p>
                <div class="card-group gap-5 mx-auto" style={{width:'50vw'}}>
                    <div className='col'>
                        <div className='card card-body'>
                            <a href='https://binus.ac.id' target='_blank' >
                            <img src={BinusLogo} class="card-img-top py-5 px-3" width={200} height={200} alt='Binus Logo' />
                            </a>
                            <p className='h5'><i class="bi bi-book"></i> Computer Science</p>
                            <p className='h5'><i className='bi bi-mortarboard-fill'></i> Master's Degree</p>
                            <p className='h5'><i className='bi bi-trophy-fill'></i> GPA 3.90</p>
                            <p className='h5'><i className='bi bi-calendar4-week'></i> 2020-2022</p>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='card card-body'>
                            <a href='https://mikroskil.ac.id' target='_blank'>
                                <img  src={MikroskilLogo} class="card-img-top" width={200} height={200} alt='Mikroskil Logo' />
                            </a>
                            <p className='h5'><i class="bi bi-book"></i> Computer Engineering</p>
                            <p className='h5'><i className='bi bi-mortarboard-fill'></i> Bachelor's Degree</p>
                            <p className='h5'><i className='bi bi-trophy-fill'></i> GPA 3.03</p>
                            <p className='h5'><i className='bi bi-calendar4-week'></i> 2012-2018</p>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Education;