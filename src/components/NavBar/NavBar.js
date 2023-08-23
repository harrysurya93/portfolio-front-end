import React, { Fragment } from 'react';
import ResumePDF from '../../assets/documents/Resume.pdf';

const NavBar = () => {
    return(
        <Fragment>
            <nav class="navbar navbar-expand-md sticky-top" id='portfolioNavBar' style={{backgroundColor:'#000000'}}>
                <div class="container-fluid">
                    <button class="navbar-toggler ms-auto border-0 btn btn-outline-dark py-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <i class="bi bi-filter-right fs-1 text-white"></i>
                    </button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{backgroundColor:'#4d4855'}}>
                    <div class="offcanvas-header ms-auto">
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body" id="navbarContent">
                        <ul class="navbar-nav justify-content-end gap-2 flex-grow-1 text-center ">
                            <li className='nav-item h6 mb-0'>
                                <a className='nav-link text-white btn-outline-primary' href='#scrollSpyAbout'><i className='bi bi-file-person-fill'></i> About</a>
                            </li>
                            <li className='nav-item h6 mb-0'>
                                <a className='nav-link text-white' href='#scrollSpyExperience'><i className='bi bi-briefcase-fill'></i> Experience</a>
                            </li>
                            <li className='nav-item h6 mb-0'>
                                <a className='nav-link text-white' href='#scrollSpyEducation'><i className='bi bi-mortarboard-fill'></i> Education</a>
                            </li>
                            <li className='nav-item h6 mb-0'>
                                <a className='nav-link text-white' href='#scrollSpyWork'><i class="bi bi-code-slash"></i> Work</a>
                            </li>
                            <li className='nav-item h6 mb-0'>
                                <a className='nav-link text-white' href='#scrollSpyContact'><i className='bi bi-envelope'></i> Contact</a>
                            </li>
                            <li className='nav-item h6 mb-0'>
                                <a className='nav-link text-white' href={ResumePDF} target='_blank'><i className='bi bi-filetype-pdf'></i> Resume</a>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default NavBar;