import React from 'react';
import BinusLogo from '../../assets/images/LogoBinus.png';
import MikroskilLogo from '../../assets/images/LogoMikroskil.jpg';

const Education = (props) => {

    return (
        <section className='bg-secondary-subtle py-5' id='scrollSpyEducation' onMouseEnter={() => props.handlePointerEvent(3)}>
            <div className='container mx-auto'>
            <p className='display-5 text-center'>Education</p>
            <div className='card-group text-center'>
                <div className='col-xl-2 col-lg-1 col-md-0 col-sm-0 col-xs-0'></div>
                <div className='col-xl-4 col-lg-5 col-md-6 col-sm-6 col-xs-12'>
                    <div className='card card-body h-100'>
                        <a href='https://binus.ac.id' target='_blank' >
                        <img src={BinusLogo} className='card-img-top py-5 px-5' width={200} height={200} alt='Binus Logo' />
                        </a>
                        <p className='h5'><i className='bi bi-book'></i> Computer Science</p>
                        <p className='h5'><i className='bi bi-mortarboard-fill'></i> Master's Degree</p>
                        <p className='h5'><i className='bi bi-trophy-fill'></i> GPA 3.90</p>
                        <p className='h5'><i className='bi bi-calendar4-week'></i> 2020-2022</p>
                        <p className='h5'><i className='bi bi-paperclip'></i> <a target='_blank' className='link-primary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover' href='http://www.jatit.org/volumes/Vol100No9/33Vol100No9.pdf'>Publication</a></p>
                    </div>
                </div>
                <div className='col-xl-4 col-lg-5 col-md-6 col-sm-6 col-xs-12'>
                    <div className='card card-body h-100'>
                        <a href='https://mikroskil.ac.id' target='_blank'>
                            <img  src={MikroskilLogo} className='card-img-top px-4' width={200} height={200} alt='Mikroskil Logo' />
                        </a>
                        <p className='h5'><i className='bi bi-book'></i> Computer Engineering</p>
                        <p className='h5'><i className='bi bi-mortarboard-fill'></i> Bachelor's Degree</p>
                        <p className='h5'><i className='bi bi-trophy-fill'></i> GPA 3.03</p>
                        <p className='h5'><i className='bi bi-calendar4-week'></i> 2012-2018</p>
                    </div>
                </div>
                <div className='col-xl-2 col-lg-2 col-md-0 col-sm-0 col-xs-0'></div>
            </div>
            </div>
        </section>
    )
}

export default Education;