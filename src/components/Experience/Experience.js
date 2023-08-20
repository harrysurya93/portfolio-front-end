import React, { Fragment } from 'react';

const Experience = () => {
    return (
        <Fragment>
            <section className='' tabIndex={1} id='scrollSpyExperience'>
            <h3 className='' >Experience</h3>

            <div className='row'>
                <div className='col-4'>
                    <div id='list-example' className='list-group'>
                    <a className='list-group-item list-group-item-action' href='#list-item-1'>Polychemie Asia Pacific Permai</a>
                    <a className='list-group-item list-group-item-action' href='#list-item-2'>Soltius Indonesia</a>
                    </div>
                </div>
                <div className='col-8'>
                    <div data-bs-spy='scroll' data-bs-target='#list-example' data-bs-smooth-scroll='true' className='scrollspy-example'>
                    <h4 id='list-item-1'>Item 1</h4>
                    <p>...</p>
                    <h4 id='list-item-2'>Item 2</h4>
                    <p>...</p>
                    <h4 id='list-item-3'>Item 3</h4>
                    <p>...</p>
                    <h4 id='list-item-4'>Item 4</h4>
                    <p>...</p>
                    </div>
                </div>
            </div>            
        </section>
        </Fragment>
    )
}

export default Experience;