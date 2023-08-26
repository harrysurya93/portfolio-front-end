import React, { useEffect, useRef } from 'react';
import ResumePDF from '../../assets/documents/Resume.pdf';
import Menus from '../../database/Menus';
import './NavBar.css';

const NavBar = (props) => {

    const checkTheme = useRef();
    const btnClose = useRef();
    const navRef = useRef();

    const handleThemeChange = (e) =>{
        const themeValue = e.target.checked ? 'dark' : 'light';
        localStorage.setItem('theme', themeValue);
        document.documentElement.setAttribute('data-bs-theme',themeValue);
        props.setTheme(themeValue);
    }

    useEffect(()=> {
        if(props.theme === 'dark'){
            checkTheme.current.checked = true;
        }
        else{
            checkTheme.current.checked = false;
        }
    },[props.theme])

    const handleClick = () => {
        btnClose.current.click();
    }

    console.log(props.theme);

    return(
        <nav className={`py-1 navbar navbar-expand-md sticky-top ${props.theme ==='dark' ? 'bg-dark' : 'bg-light'}`} id='navbarPortfolio' style={{opacity:0.95, backdropFilter:'blur(6px)'}}>
            <div className='container-fluid'>
                <button className='navbar-toggler ms-auto border-0 btn' type='button' data-bs-toggle='offcanvas' data-bs-target='#offcanvasNavbar' aria-controls='offcanvasNavbar' aria-label='Toggle navigation'>
                    <i className='bi bi-filter-right display-5'></i>
                </button>
                <div ref={navRef} className='offcanvas offcanvas-end' tabIndex='-1' id='offcanvasNavbar' aria-labelledby='offcanvasNavbarLabel'>
                <div className='offcanvas-header ms-auto'>
                    <button type='button' ref={btnClose} className='btn-close' data-bs-dismiss='offcanvas' aria-label='Close'></button>
                </div>
                <div className='offcanvas-body' id='navbarContent'>
                    <ul className='nav navbar-nav nav-pills justify-content-start flex-grow-1 text-center gap-1'>
                        {Menus.map(menu =>                             
                            <li key={menu.id} className='nav-item'>
                                <a className={`btn ${props.theme === 'dark' ? 'btn-outline-light' : 'btn-outline-dark'} w-100 border-0`} onClick={handleClick} href={menu.section}><i className={menu.icon}></i> {menu.name}</a>
                            </li>

                        )}                        
                        <li className='nav-item'>
                            <a className={`btn ${props.theme === 'dark' ? 'btn-outline-light' : 'btn-outline-dark'} w-100 border-0`} onClick={handleClick} href={ResumePDF} target='_blank'><i className='bi bi-filetype-pdf'></i> Resume</a>
                        </li>                        
                    </ul>
                    <ul className='nav navbar-nav nav-pills justify-content-end me-2'>
                        <li className='nav-item h6 m-auto mt-2'>
                            <div className='form-check form-switch'>
                                <input ref={checkTheme} className='form-check-input border border-dark-subtle' onChange={handleThemeChange} type='checkbox' role='switch' id='flexSwitchCheckDefault' />
                                <label style={{marginTop:'2px'}}><span className='d-none d-md-block d-lg-block d-xl-block'>{props.theme === 'dark' ? <i className='bi bi-moon-stars-fill'></i> : <i className='bi bi-moon-fill text-dark'></i> }</span><span className='d-block d-md-none'>Dark Mode</span></label>
                            </div>
                        </li> 
                    </ul>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;