import React, { Fragment, useEffect, useState } from 'react';

const Contact = () =>{

    const initialState = {
        email: '',
        comments: ''
    }
    const [submitting, setSubmitting] = useState(false);
    const [isCorrectEmail, setCorrectEmail] = useState(false);
    const [isCorrectComments, setCorrectComments] = useState(false);
    const [firstInput, setfirstInput] = useState(true);
    const [newForm, setNewForm] = useState(initialState);

    const handleInputChange = (event) => {
        setNewForm({
              ...newForm,
              [event.target.name]: event.target.value
          })
    }

    useEffect(() => {
        if(validateEmail(newForm.email)){
            setCorrectEmail(true);
        }else{
            setCorrectEmail(false);
        }

        if(validateComments(newForm.comments)){
            setCorrectComments(true);
        }else{
            setCorrectComments(false);
        }
    }, [newForm.email, newForm.comments])

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|.('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
    
      const validateComments = (comments) => {
        if(comments.length < 20){ return false; } else { return true; }
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        setfirstInput(false);
        if(isCorrectEmail && isCorrectComments){
            setSubmitting(true);
        }
    }

    const handleFormCancel = () => {
        setfirstInput(true);
        setNewForm(initialState);
    }

    return (
        <Fragment>
            <section className='py-5 px-3 bg-secondary-subtle' id='scrollSpyContact' style={{minHeight:`75vh`}}>
            <p className='display-5 py-2 m-0 mb-3 text-center'>Contact Me</p>
                <form autoComplete='off' onSubmit={handleSubmit}>
                    <div className='form-floating w-75 mx-auto mb-3'>
                        {firstInput ? <input className='form-control' id='floatingInput' value={newForm.email} placeholder='name@example.com' onChange={handleInputChange} name='email' /> : <input type='email' className={`form-control ${isCorrectEmail ? 'is-valid' : 'is-invalid'}`} id='floatingInput' value={newForm.email} name='email' onChange={handleInputChange} placeholder='name@example.com' /> }
                        <label htmlFor='floatingInput'>Email address (required)</label>
                        {!firstInput &&
                        <div className={`${isCorrectEmail ? 'valid-feedback' : 'invalid-feedback'}`}>
                        {isCorrectEmail ? 'Looks good!' : 'Please input correct email format.'}
                        </div>}                    
                    </div>
                    
                    <div className='form-floating w-75 mx-auto mb-3'>
                        {firstInput ? <textarea className='form-control' style={{height:100}} placeholder='Leave a comment here' id='floatingTextarea' onChange={handleInputChange} name='comments' value={newForm.comments} /> : <textarea className={`form-control ${isCorrectComments ? 'is-valid' : 'is-invalid'}`} placeholder='Leave a comment here' id='floatingTextarea' onChange={handleInputChange} name='comments' value={newForm.comments} /> }
                        <label htmlFor='floatingTextarea'>Comments (≥ 20 characters)</label>
                        {!firstInput &&
                        <div className={`${isCorrectComments ? 'valid-feedback' : 'invalid-feedback'}`}>
                        {isCorrectComments ? 'Looks good!' : 'Please input at least 20 characters.'}
                        </div>}
                    </div>

                            <div className='text-center'>
                    {submitting ? <button className="btn btn-success btn-lg" type="button" disabled>
                            <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                            <span role="status"> Loading...</span>
                            </button>   : <input type='submit' className='btn btn-success btn-lg'/> 
                        }
                            </div>
                                


                    <div className='text-center'>
                        
                        
                    </div>
                </form>
            </section>
        </Fragment>
    )
}

export default Contact;