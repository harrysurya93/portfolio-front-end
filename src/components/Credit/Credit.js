import React from 'react';

const Credit = () => {
    return (
        <footer className='m-0 py-3' style={{minHeight:'25vh', backgroundColor:'#000000'}}>
            <div className='container'>
                <p className='text-white text-center px-5'>Developed and designed by Harry Surya using React and Bootstrap, Database are delivered through RestAPI using .NET Core and Entity Framework, and finally deployed using AWS Cloud Services such as AWS Amplify and AWS Route 53.</p>
                <h3 className='text-center'>
                    <a className='text-white mx-1' href='https://www.linkedin.com/in/harry-surya/' target='_blank'><i className='bi bi-linkedin'></i></a>
                    <a className='text-white mx-1' href='https://github.com/harrysurya93' target='_blank'><i className='bi bi-github'></i></a>
                    <a className='text-white mx-1' href='https://www.instagram.com/harrysurya93/' target='_blank'><i className='bi bi-instagram'></i></a>
                    <a className='text-white mx-1' href='https://www.facebook.com/profile.php?id=100092739357301' target='_blank'><i className='bi bi-facebook'></i></a>
                    <a className='text-white mx-1' href='mailto:harrysurya93@gmail.com' target='_blank'><i class="bi bi-envelope-at-fill"></i></a>
                </h3>
            </div>
        </footer>
    )
}

export default Credit;