import React from 'react'

const Contact = () => {
  return (
    <>
        <h3 className='text text-center mt-5'>Contact Me</h3>
    <div className='container contact'>
    
        <div className='row'>
            <div className='col-lg-8'>
                <form>
                    <div className='mt-3'>
                        <input type="text" placeholder="Enter your name" className = "form-control"
                        />
                    </div>
                    <div className='mt-3'>
                        <input type="text" placeholder="Enter your email" className = "form-control"
                        />
                    </div>
                    <div className='mt-3'>
                        <input type="text" placeholder="Enter your messages" className = "form-control"
                        />
                    </div>
                    <button className='btn btn-md btn-dark mt-5'>Send now</button>
                </form>
            </div>

            
        </div>
    </div>
    </>
  )
}

export default Contact