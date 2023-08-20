import React, { Fragment } from 'react';
import ResumePDF from '../../assets/documents/Resume.pdf';

const NavBar = () => {
    return(
        <Fragment>
            <nav id='portfolioNavBar' className='navbar navbar-expand-sm bg-white border-bottom sticky-top m-0'>
                <div className='container-fluid'>
                    <button className='navbar-toggler ms-auto' type='button' data-bs-toggle='collapse' data-bs-target='#navbarContent' aria-controls='navbar' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse me-auto' id="navbarContent">
                        <ul className='navbar-nav ms-auto my-2 gap-2 text-end'>
                            <li className='nav-item'>
                                <a className='nav-link' href='#scrollSpyAbout'><i className='bi bi-file-person-fill'></i> About</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#scrollSpyExperience'><i className='bi bi-briefcase-fill'></i> Experience</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#scrollSpyEducation'><i className='bi bi-mortarboard-fill'></i> Education</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#scrollSpyWork'><i class="bi bi-code-slash"></i> Work</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#scrollSpyContact'><i className='bi bi-envelope'></i> Contact</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href={ResumePDF} target='_blank'><i className='bi bi-filetype-pdf'></i> Resume</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default NavBar;