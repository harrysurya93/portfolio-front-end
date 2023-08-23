import React, { Fragment } from 'react';
import ResumePDF from '../../assets/documents/Resume.pdf';

const NavBar = (props) => {
    return(
        <Fragment>
            <nav className='navbar navbar-expand-md sticky-top' id='portfolioNavBar' style={{backgroundColor:'#000000'}}>
                <div className='container-fluid'>
                    <button className='navbar-toggler ms-auto border-0 btn btn-outline-dark' type='button' data-bs-toggle='offcanvas' data-bs-target='#offcanvasNavbar' aria-controls='offcanvasNavbar' aria-label='Toggle navigation'>
                        <i className='bi bi-filter-right display-5 text-white'></i>
                    </button>
                    <div className='offcanvas offcanvas-end' tabIndex='-1' id='offcanvasNavbar' aria-labelledby='offcanvasNavbarLabel' style={{backgroundColor:'#4d4855'}}>
                    <div className='offcanvas-header ms-auto'>
                        <button type='button' className='btn-close' data-bs-dismiss='offcanvas' aria-label='Close'></button>
                    </div>
                    <div className='offcanvas-body' id='navbarContent'>
                        <ul className='nav navbar-nav nav-pills justify-content-end gap-2 flex-grow-1 text-center'>
                            <li className='nav-item h5 mb-0'>
                                <a className={`nav-link text-white ${props.scrollPointer === 1 ? 'active' : ''}`} href='#scrollSpyAbout'><i className='bi bi-file-person-fill'></i> About</a>
                            </li>
                            <li className='nav-item h5 mb-0'>
                                <a className={`nav-link text-white ${props.scrollPointer === 2 ? 'active' : ''}`} href='#scrollSpyExperience'><i className='bi bi-briefcase-fill'></i> Experience</a>
                            </li>
                            <li className='nav-item h5 mb-0'>
                                <a className={`nav-link text-white ${props.scrollPointer === 3 ? 'active' : ''}`} href='#scrollSpyEducation'><i className='bi bi-mortarboard-fill'></i> Education</a>
                            </li>
                            <li className='nav-item h5 mb-0'>
                                <a className={`nav-link text-white ${props.scrollPointer === 4 ? 'active' : ''}`} href='#scrollSpyWork'><i className='bi bi-code-slash'></i> Work</a>
                            </li>
                            <li className='nav-item h5 mb-0'>
                                <a className={`nav-link text-white ${props.scrollPointer === 5 ? 'active' : ''}`} href='#scrollSpyContact'><i className='bi bi-envelope'></i> Contact</a>
                            </li>
                            <li className='nav-item h5 mb-0'>
                                <a className={`nav-link text-white ${props.scrollPointer === 6 ? 'active' : ''}`} href={ResumePDF} target='_blank'><i className='bi bi-filetype-pdf'></i> Resume</a>
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